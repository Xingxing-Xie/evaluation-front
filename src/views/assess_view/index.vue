<template>
  <div class="page">
    <el-card class="card">
      <el-row>
        <el-col :span="22">
          <h2>评估结果</h2>
        </el-col>
        <el-col :span="2">
          <h2>
            <el-button type="primary" @click="assess">绩效评估</el-button>
          </h2>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="card">
      <el-tree
        :data="scoreTree"
        :show-checkbox="false"
        node-key="id"
        default-expand-all
        :expand-on-click-node="true"
      >
        <span slot-scope="{ node, data }" class="custom-tree-node">
          <span>
            {{ data.label }}
          </span>
          <span>
            <el-tag v-if="data.layer === 1" type="primary" size="small" effect="plain">
              {{ data.score }}分
            </el-tag>
            <el-tag v-if="data.layer === 2" type="warning" size="small" effect="plain">
              {{ data.score }}分
            </el-tag>
            <el-tag v-if="data.layer === 3" type="info" size="small" effect="plain">
              {{ data.score }}分
            </el-tag>
          </span>
        </span>
      </el-tree>
    </el-card>
  </div>
</template>

<script>
import _ from 'lodash'
import { scoreTree } from '@/utils/assess_system'
import { getScore } from '@/api/score'

export default {
  name: 'AssessView',
  data() {
    return {
      processesList: [],
      scoreTree: _.cloneDeep(scoreTree),
      ahp: {}
    }
  },
  mounted() {
    getScore()
      .then(res => {
        this.ahp = res.data
      })
      .then(() => {
        _.forEach(this.scoreTree, (x) => this.travarse(x, (y) => y.score = parseFloat(this.ahp[y.id]).toFixed(2)))
      })
  },
  methods: {
    assess() {
      this.$router.push(`assess_survey`)
    },
    travarse(node, f) {
      if (node.children === null) {
        f(node)
      } else {
        _.forEach(node.children, (x) => this.travarse(x, f))
        f(node)
      }
    }
  }
}
</script>

<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
