<template>
  <div class="upload-container">
    <div class="upload-question">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
        <el-form-item label="问题" prop="question">
          <el-input v-model="ruleForm.question" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="我们的回答1" prop="answerOne">
          <el-input
            v-model="ruleForm.answerOne"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
          />
        </el-form-item>
        <el-form-item label="我们的回答2" prop="answerTwo">
          <el-input
            v-model="ruleForm.answerTwo"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
          />
        </el-form-item>
        <!-- <div v-for="(item, index) in ruleForm.addOtherQuestion" :key="index">
          <el-form-item :prop="item.additionLabel">
            <el-input v-model="item.additionalQuestion" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item :prop="item.asnwerLabel">
            <el-input
              v-model="item.questionOne"
              type="textarea"
              :rows="2"
            ></el-input>
          </el-form-item>
          <el-form-item :prop="item.answerLabelTwo"></el-form-item>
        </div> -->
        <el-form-item label="问题延展1" prop="additionalQuestion">
          <el-input v-model="ruleForm.additionalQuestion" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="我们的回答1" prop="additionalAnswerOne">
          <el-input
            v-model="ruleForm.additionalAnswerOne"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
          />
        </el-form-item>
        <el-form-item label="我们的回答2" prop="additionalAnswerTwo">
          <el-input
            v-model="ruleForm.additionalAnswerTwo"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
          />
        </el-form-item>
        <!-- <div  >
          <el-form-item :prop="item.label">
            <el-input
              v-model="item.labels"
              placeholder="请输入内容"
            ></el-input>
            <span @click="jianshao(index)">-</span>
          </el-form-item>
        </div> -->

        <!-- <p @click="addQuestion">+</p> -->
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
      ruleForm: {
        question: '',
        answerOne: '',
        answerTwo: '',
        additionalQuestion: '',
        additionalAnswerOne: '',
        additionalAnswerTwo: '',
        addOtherQuestion: [

        ]
      },
      rules: {
        question: [
          { required: true, message: '请输入我们的问题', trigger: 'change' }
        ],
        answerOne: [
          { required: true, message: '请输入我们的回答', trigger: 'change' }
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
      this.ruleForm.addOtherQuestion.push({
        label: '11',
        labels: '22'
      })
    },
    jianshao() {
      this.ruleForm.addOtherQuestion.splice()
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
</style>
