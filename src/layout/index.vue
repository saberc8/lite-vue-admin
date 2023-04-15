<template>
  <el-container class="layout-container">
    <el-aside :width="siderWidth">
      <LayoutSider></LayoutSider>
    </el-aside>
    <el-container>
      <el-header>
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <LayoutContent></LayoutContent>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import LayoutSider from './components/Sider/index.vue'
  import LayoutHeader from './components/Header/index.vue'
  import LayoutContent from './components/Content/index.vue'
  import { siderWidth } from '@/constants'
</script>

<style lang="scss" scoped>
  .layout-container {
    height: 100vh;
    background-color: #fff;
    .layout-sider {
      background-color: #fff;
    }
  }
</style>
