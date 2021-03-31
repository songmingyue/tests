<template>
  <div class="dashboard-container">
    <div class="container-know">
      <div class="knowledge-search">
        <!-- <el-input v-model="inputKnowLedge" placeholder="请选择要查询的内容" /> -->
        <el-select v-model="inputKnowLedge" placeholder="请选择要查询的内容">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button :plain="true" @click="isShowMessage = true">查看</el-button>
      </div>
    </div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <p>乐玩大事件</p>
          <div class="purple-name">
            <span>周五记得交周报哦</span>
            <span>这里以后会有链接的哦</span>
            <span>现在太少啦</span>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <p>咱们的知识库</p>
          <div v-if="isShowMessage">
            <div v-for="(item, index) in options" :key="index" class="purple-name content-name">
              <a @click="goToNext">{{ item.label }}>>></a>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <p>广告位招商</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      options: [
        { value: '1', label: '吉利卡' }
      ],
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
    goToNext() {
      this.$router.push({ path: './create/detail', query: { id: this.inputKnowLedge }})
    },
    showAllMessage() {

    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard-container {
  padding: 15px;
}
.container-know {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
.knowledge-search {
  width: 300px;
  display: flex;
  flex-direction: row;
}
.value-question {
  background: #6abd;
}
.value-ask {
  background: pink;
}
.all-next {
  display: flex;
  flex-direction: row;
}
.bottom-left {
  flex-basis: 100px;
}
.bottom-right {
  flex-basis: 100px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: calc(100vh - 155px);
  margin-top: 15px;
  padding-top: 20px;
}
.grid-content p {
  text-align: center;
  color: darkgreen;
  margin: 0px;
}
.purple-name {
  font-size: 12px;
  color: #444;
  padding: 15px;
  span {
    display: block;
    margin-bottom: 10px;
  }
}
.content-name {
  a {
    color: cadetblue;
    width: 100%;
    font-size: 28px;
  }
}
</style>
