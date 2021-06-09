<template>
  <div id="app">
    <el-menu
      style="opacity: 0.9; margin: 5px"
      class="el-menu-demo"
      mode="horizontal"
      :router="isRouter"
      background-color="#58A5F5"
      text-color="#fff"
      active-text-color="#FFEFBA"
    >
      <el-menu-item index="/system">
        评估体系
      </el-menu-item>
      <el-menu-item index="/assess">
        评估结果
      </el-menu-item>
    </el-menu>
    <transition name="el-fade-in-linear" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: function() {
    return {
      isRouter: true
    }
  }
}
</script>

<style>

</style>
