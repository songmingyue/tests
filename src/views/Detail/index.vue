<template>
  <div class="detail-container">
    <div v-if="ruleForm.length">
      <div v-for="(item, index) in ruleForm" :key="index">
        <div class="asquest-num">
          <span>问题{{ index+1 }}{{ item.question }}</span>
          <el-button type="text" icon="el-icon-edit" @click="edditClick(item)">编辑</el-button>
        </div>
        <div class="aswer-title">
          <div v-for="(items, indexs) in item.answer_one" :key="indexs">
            <p class="aswer-text"><span>回答{{ indexs + 1 }}:</span>{{ items.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="prompt">这个知识库下面没有问题哦，快去看看其他的吧</div>
    <dialogEdir
      v-if="isEdit"
      :rule-forms="getRule"
      :is-show-dialog="isEdit"
      @closeEditDialog="closeEditDialog"
    />
  </div>
</template>

<script>
import dialogEdir from './component/dialogEdit'
export default {
  name: 'Detail',
  components: {
    dialogEdir
  },
  data() {
    return {
      ruleForm: [],
      isEdit: false,
      getRule: []
    }
  },
  computed: {},
  created() {
    this.showAllMessage()
  },
  methods: {
    showAllMessage() {
      console.log(this.$route.query.id, 'this.$route.query.id')
      this.$http.post('/website/getMessage', {
        getQuestionOne: this.$route.query.id
      }).then(res => {
        this.ruleForm = res
      })
    },
    edditClick(item) {
      this.getRule = item
      this.isEdit = true
    },
    closeEditDialog() {
      this.isEdit = false
      this.showAllMessage()
    }
  }
}
</script>
<style less='scss' scoped>
.detail-container {
  border: 1px solid #ebebeb;
  height: 85vh;
  margin: 20px;
  width: calc(100% - 40px);
  padding: 15px 15px;
  overflow: auto;
}
.asquest-num {
  background: #f8aba6;
  color: white;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.aswer-title {
  background: #78cdd1;
  padding: 9px;
  border-radius: 5px;
  margin: 10px 0px;
}
.aswer-text {
  color: #444;
}
.prompt {
  text-align: center;
  margin-top: 30px;
  color: #f69c9f;
}
</style>
