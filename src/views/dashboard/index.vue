<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input
          v-model="form.name"
        />
      </el-form-item>
      <el-form-item label="dizhi">
        <el-input
          v-model="form.address"
        />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input
          v-model="form.phone"
        />
      </el-form-item>
      <el-form-item label="需求现状">
        <el-input
          v-model="form.xuqiu"
        />
      </el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      form: {
        name: '',
        address: '',
        phone: '',
        xuqiu: ''
      }
    }
  },
  computed: {},
  created() {
  },
  methods: {
    onSubmit() {
      this.$router.push({
        path: './detail'
      })
    }
  }
}
</script>
<style lang="scss">
  .dashboard-container {
    margin-top: 20px;
    width: 400px;
    margin-left: 15px;
  }
</style>
