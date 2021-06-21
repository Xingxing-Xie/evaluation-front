<template>
  <div class="page">
    <el-card class="card">
      <el-row>
        <el-col :span="22">
          <h2>评估体系</h2>
        </el-col>
        <el-col :span="2">
          <h2>
            <el-button type="primary" @click="doSurvey">指标评估</el-button>
          </h2>
        </el-col>
      </el-row>
    </el-card>
    <el-row style="height: 84vh">
      <el-col :span="12">
        <el-card class="card">
          <el-row>
            <el-col>
              <h3>指标体系</h3>
            </el-col>
            <el-col style="height: 83vh">
              <div ref="minder" style="height: 83.8vh; width: 200%; position: absolute; left: -38vw" />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="card">
          <el-row>
            <el-col>
              <h3>权重集</h3>
            </el-col>
          </el-row>
          <el-table :data="nodes" style="width: 100%;margin-top:10px;" border height="82vh">
            <el-table-column align="center" label="指标">
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column align="center" label="层级">
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
            <el-table-column align="center" label="权重">
              <template slot-scope="scope">
                <el-tag type="success">{{ scope.row.weight1 }}</el-tag>
              </template>
            </el-table-column>
          </el-table>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
import { data, nodes } from '@/utils/assess_system'
import { getWeights } from '@/api/weights'
import kity from 'kity'
import kityminder from 'kityminder-core'

export default {
  name: 'AssessIndex',
  components: {},
  data() {
    return {
      system: _.cloneDeep(data),
      minder: null,
      tab: '1',
      nodes: _.cloneDeep(nodes),
      entropy: {},
      ahp: {}
    }
  },
  mounted() {
    this.minder = new window.kityminder.Minder({
      renderTo: this.$refs.minder
    })
    this.minder.importJson(this.system)
    this.minder.execCommand('Theme', 'fresh-blue-compat')
    console.log(window.kityminder.Minder.getThemeList())
    getWeights()
      .then((res) => _.forEach(this.nodes, (node) => node.weight1 = parseFloat(res.data[node.id]).toFixed(3)))
  },
  methods: {
    doSurvey() {
      this.$router.push(`/index_survey`)
    }
  }
}
</script>

<style scoped>
  .el-table .disable-row {
    background: gray;
  }
</style>
