<template>
  <div class="dashboard-detail">
    <div>需求列表</div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="标题"
        width="180"
      />
      <el-table-column
        prop="status"
        label="状态"
        width="180"
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
      />
      <el-table-column
        prop="chashou"
        label="查收"
      />
    </el-table>
    <div class="btn-style">
      <el-button type="primary" round @click="gotoKaipiao">开票</el-button>
      <el-button type="primary" round @click="gotoCreate">新建需求</el-button>
      <el-button type="primary" round @click="gotopingjia">评价</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      tableData: [{
        title: '需求1',
        status: '状态',
        createTime: '2020-12-11',
        chashou: '成果1'
      }, {
        title: '需求1',
        status: '状态',
        createTime: '2020-12-11',
        chashou: '成果1'
      }, {
        title: '需求1',
        status: '状态',
        createTime: '2020-12-11',
        chashou: '成果1'
      }, {
        title: '需求1',
        status: '状态',
        createTime: '2020-12-11',
        chashou: '成果1'
      }]
    }
  },
  computed: {},
  created() {
  },
  methods: {
    gotoKaipiao() {
      this.$router.push({
        path: './kaipiao'
      })
    },
    gotopingjia() {
      this.$router.push({
        path: './pingjia'
      })
    },
    gotoCreate() {
      this.$router.push({
        path: './create'
      })
    }
  }
}
</script>
<style lang="scss">
  .dashboard-detail {
    padding: 15px;
  }
  .btn-style {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>
