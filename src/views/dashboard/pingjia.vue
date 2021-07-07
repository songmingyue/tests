<template>
  <div class="dashboard-pingjia">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="给我五星好评吧">
        <el-rate
          v-model="form.value1"
        />
      </el-form-item>
      <el-form-item label="评价">
        <el-input
          v-model="form.pingjia"
          type="textarea"
        />
      </el-form-item>
    </el-form>
    <el-button type="primary" class="btn-pingjia" round @click="kaipiao">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      form: {
        value1: null,
        pingjia: ''
      }
    }
  },
  computed: {},
  created() {
  },
  methods: {
    kaipiao() {
      alert('评价成功')
    }
  }
}
</script>
<style lang="scss">
  .dashboard-pingjia {
    padding: 15px;
    width: 50%;
  }
  .kaipiao-img {
    width: 50%;
  }
  .btn-pingjia {
    margin-left: 100px;
  }
</style>
