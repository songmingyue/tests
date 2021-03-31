<template>
  <div class="edit-dialog">
    <el-dialog
      title="编辑"
      :visible.sync="showDialog"
      :close-on-click-modal="false"
      width="540"
      left
      @close="closeDialog"
    >
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
        <el-form-item label="问题" prop="question">
          <el-input v-model="ruleForm.question" placeholder="请输入内容" />
        </el-form-item>
        <div v-for="(item, index) in ruleForm.answer_one" :key="index">
          <el-form-item :label="`${item.label}${index+1}`" prop="">
            <el-input
              v-model="item.text"
              style="width: 90%;margin-right:10px"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
            />
            <i :plain="true" class="el-icon-remove-outline" @click="reject(index)" />
          </el-form-item>
        </div>
        <i class="el-icon-circle-plus-outline" @click="addQuestion" />
        <el-form-item>
          <el-button :plain="true" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    ruleForms: {
      type: Object
    },
    isShowDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ruleForm: [],
      showDialog: false,
      rules: {
        question: [
          { required: true, message: '要输入想录入的问题哦', trigger: 'change' }
        ]
      }
    }
  },
  computed: {},
  created() {
    this.getMessage()
  },
  methods: {
    getMessage() {
      this.ruleForm = this.ruleForms
      console.log(this.ruleForms, 'this.rulefor')
      this.showDialog = this.isShowDialog
    },
    addQuestion() {
      const qest = {
        label: '我们的回答',
        text: ''
      }
      this.ruleForm.answer_one.push(qest)
    },
    reject(indexs) {
      if (this.ruleForm.answer_one.length > 1) {
        this.ruleForm.answer_one.splice(indexs, 1)
      } else {
        this.$message({
          showClose: true,
          message: '最后一个喽，不能在删除啦'
        })
      }
    },
    submitForm(formName) {
      this.ruleForm.answer_one.map((item, index) => {
        if (!item.text) {
          this.ruleForm.answer_one.splice(index, 1)
        }
      })

      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          await this.$http.post('website/edit', this.ruleForm).then(res => {
            this.$message({
              showClose: true,
              message: '修改成功',
              type: 'success'
            })
          })
          await this.closeDialog()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    closeDialog() {
      this.$emit('closeEditDialog')
    }
  }
}
</script>
<style less='scss' scoped>
.el-icon-circle-plus-outline {
  margin-left: 130px;
  font-size: 17px;
  margin-bottom: 10px;
}
</style>
