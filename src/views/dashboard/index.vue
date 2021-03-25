<template>
  <div class="dashboard-container">
    <div class="knowledge-search">
      <el-input v-model="inputKnowLedge" placeholder="请选择要查询的内容" />
      <el-button :plain="true" @click="showAllMessage">查看</el-button>
    </div>
    <!-- 现在只要一个死的，所以前端这边写死了 -->
    <div v-if="showAlls.length" class="know-all">
      <div v-for="(item, index) in showAlls" :key="index">
        <p>{{ index + 1 }}</p>
        <p class="value-ask">{{ item.question }}</p>
        <p class="value-question" v-html="item.answer_one" />
        <p class="value-question" v-html="item.answer_two" />
        <p class="value-ask">{{ item.additional_question }}</p>
        <p class="value-question" v-html="item.additional_answer_one" />
        <p class="value-question" v-html="item.additional_answer_two" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      inputKnowLedge: '',
      showAlls: [],
      showAll: false,
      isShowMessage: false
    }
  },
  computed: {},
  created() {
  },
  methods: {
    showAllMessage() {
      if (!this.inputKnowLedge) {
        this.$message('请填写第一条问题')
        return
      }
      this.$http.post('/website/getMessage', {
        getQuestionOne: this.inputKnowLedge
      }).then(res => {
        this.showAlls = res
      })
    }
  }
}
</script>
<style scoped>
.dashboard-container {
  padding: 15px;
}
.knowledge-search {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.value-question {
  background: #6abd;
}
.value-ask {
  background: pink;
}
</style>
