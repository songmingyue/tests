<template>
  <div class="dashboard-container">
    <div class="knowledge-search">
      <el-input v-model="inputKnowLedge" placeholder="请选择要查询的内容" />
      <el-button @click="showAll = true">查看</el-button>
    </div>
    <!-- 现在只要一个死的，所以前端这边写死了 -->
    <div v-if="showAll" class="know-all">
      <div v-for="(item, index) in showAlls" :key="index">
        <p class="value-ask">{{ item.test }}</p>
        <p class="value-question">{{ item.value }}</p>
        <p v-if="item.value2" class="value-question">{{ item.value2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import showAll from '@/utils/configuration'
export default {
  name: 'Dashboard',
  data() {
    return {
      inputKnowLedge: '',
      showAll: false,
      showAlls: showAll
    }
  },
  computed: {},
  created() {
    this.getNum()
  },
  methods: {
    getNum() {
      console.log(showAll, 'showAll')
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
