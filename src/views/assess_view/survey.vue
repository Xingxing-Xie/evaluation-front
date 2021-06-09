<template>
  <div class="page">
    <el-card class="card">
      <el-row>
        <el-col :span="20">
          <h2>备案流程评估问卷</h2>
        </el-col>
        <el-col :offset="2" :span="2">
          <h2>
            <el-button type="primary" @click="submit">提交</el-button>
          </h2>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="card">
      <el-table :data="nodes" style="width: 100%;margin-top:10px;" border height="100vh">
        <el-table-column align="center" label="指标" width="250px">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="层级" width="180px">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.layer === 1" type="primary">
              一级指标
            </el-tag>
            <el-tag v-if="scope.row.layer === 2" type="warning">
              二级指标
            </el-tag>
            <el-tag v-if="scope.row.layer === 3" type="info">
              三级指标
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="选项">
          <template slot-scope="scope">
            <div class="custom-operation">
              <el-radio v-model="scope.row.result" :label="1">优秀</el-radio>
              <el-radio v-model="scope.row.result" :label="2">良好</el-radio>
              <el-radio v-model="scope.row.result" :label="3">一般</el-radio>
              <el-radio v-model="scope.row.result" :label="4">合格</el-radio>
              <el-radio v-model="scope.row.result" :label="5">不合格</el-radio>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import _ from 'lodash'
import { nodes } from '@/utils/assess_system'
import { submitProcessSurvey } from '@/api/survey'

export default {
  name: 'Assess',
  data() {
    return {
      nodes: _.filter(_.cloneDeep(nodes), (x) => x.layer === 3)
    }
  },
  methods: {
    submit() {
      const request = {}
      _.forEach(this.nodes, (node) => {
        request[node.id] = node.result
      })
      submitProcessSurvey(request)
        .then(res => {
          this.$message({
            message: '提交问卷成功',
            type: 'success'
          })
          this.$router.push(`/assess`)
        })
    }
  }
}
</script>

<style scoped>
  .custom-operation {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 40px;
    padding-left: 40px;
  }
</style>
