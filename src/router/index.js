import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/system',
    name: 'System',
    component: () => import('@/views/assess_system')
  },
  {
    path: '/assess',
    name: 'Assess',
    component: () => import('@/views/assess_view')
  },
  {
    path: '/index_survey',
    name: 'IndexSurvey',
    component: () => import('@/views/assess_system/survey')
  },
  {
    path: '/assess_survey',
    name: 'AssessSurvey',
    component: () => import('@/views/assess_view/survey')
  }
]

const router = new VueRouter({
  routes
})

export default router
