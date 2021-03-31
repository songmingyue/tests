<template>
  <div class="upload-container">
    <div class="upload-question">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
        <el-form-item label="问题" prop="question">
          <el-input v-model="ruleForm.question" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="归属知识库类" prop="category">
          <el-select v-model="ruleForm.category" placeholder="请选择">
            <el-option
              v-for="item in options.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <div v-for="(item, index) in ruleForm.answerOne" :key="index">
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
      <span class="red-tixing">暂时还未上线编辑功能哦，小姐姐们不要写错哦，如果写错，请微信私聊‘宋宋’哦</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      options: {
        options: [
          { value: '1', label: '吉利卡' }
        ]
      },
      ruleForm: {
        question: '',
        answerOne: [
          { label: '我们的回答', test: '' }
        ],
        answerTwo: '',
        category: ''
      },
      rules: {
        question: [
          { required: true, message: '要输入想录入的问题哦', trigger: 'change' }
        ],
        category: [
          { required: true, message: '请选择知识库类型哦', trigger: 'change' }
        ]
      }
    }
  },
  computed: {},
  created() {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          await this.$http.post('/website/setMessage', this.ruleForm).then(res => {
            this.$message({
              showClose: true,
              message: '提交成功',
              type: 'success'
            })
          })
          await this.$refs[formName].resetFields()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addQuestion() {
      const qest = {
        label: '我们的问题',
        text: ''
      }
      this.ruleForm.answerOne.push(qest)
    },
    reject(indexs) {
      if (this.ruleForm.answerOne.length > 1) {
        this.ruleForm.answerOne.splice(indexs, 1)
      } else {
        this.$message({
          showClose: true,
          message: '最后一个喽，不能在删除啦'
        })
      }
    }
  }
}
</script>
<style scoped>
.upload-container {
  padding: 15px;
}
.upload-question {
  width: 60%;
}
.red-tixing {
  font-size: 10px;
  color: brown;
}
.p-span-big {
  font-size: 16px;
  font-weight: 900;
}
.el-icon-remove-outline {
  font-size: 18px;
}
.el-icon-circle-plus-outline {
  font-size: 20px;
  margin-left: 120px;
  margin-bottom: 15px;
}
</style>
