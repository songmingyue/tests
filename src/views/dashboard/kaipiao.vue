<template>
  <div class="dashboard-kaipiao">
    <img class="kaipiao-img" src="./piao.jpeg" alt="">
    <br>
    <el-button type="primary" round @click="kaipiao">开票</el-button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  computed: {},
  created() {
  },
  methods: {
    kaipiao() {
      alert('开票成功')
    }
  }
}
</script>
<style lang="scss">
  .dashboard-kaipiao {
    padding: 15px;
  }
  .kaipiao-img {
    width: 50%;
  }
</style>
