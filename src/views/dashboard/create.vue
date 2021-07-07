<template>
  <div class="dashboard-create">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="事项名称">
        <el-input
          v-model="form.name"
        />
      </el-form-item>
      <el-form-item label="负责人">
        <el-input
          v-model="form.people"
        />
      </el-form-item>
      <el-form-item label="预计周期">
        <el-date-picker
          v-model="form.time"
          type="date"
          placeholder="选择日期"
        />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input
          v-model="form.phone"
        />
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          v-model="form.content"
          type="textarea"
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
        people: '',
        time: '',
        phone: '',
        content: ''
      }
    }
  },
  computed: {},
  created() {
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>
<style lang="scss">
.dashboard-create{
  padding: 15px;
  width: 50%;
}
</style>
