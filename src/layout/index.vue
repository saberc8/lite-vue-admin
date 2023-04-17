<template>
  <el-container class="layout-container">
    <el-aside :width="siderWidth">
      <LayoutSider></LayoutSider>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <LayoutContent></LayoutContent>
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
    .layout-header {
      box-shadow: 0 2px 4px rgba(0, 21, 41, 0.08);
    }
  }
</style>
