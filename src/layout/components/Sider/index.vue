<template>
  <div class="layout-sider">
    <div class="logo">
      <img class="logo-img" src="/logo.jpg" alt="" />
      <h3 class="logo-name" v-show="!collapse">{{ appName }}</h3>
    </div>
    <el-menu class="layout-menu" :collapse="collapse">
      <div v-for="(item, index) in menuList" :key="index">
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(itemChild, indexChild) in item.children"
            :key="indexChild"
          >
            <el-menu-item :index="itemChild.path">{{
              itemChild.name
            }}</el-menu-item>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else>
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  import { appName } from '@/constants'
  import { routerArray } from '@/router'
  const collapse = ref(false)
  console.log(routerArray)
  const menuList = computed(() => {
    // .filter((item) => item.meta?.hideMenu !== true)
    return routerArray
  })
</script>

<style lang="scss" scoped>
  .layout-sider {
    height: 100vh;
    position: relative;
    overflow: scroll;
    .logo {
      position: sticky;
      display: flex;
      align-items: center;
      height: 64px;
      z-index: 999;
      background-color: #fff;
      top: 0;
      padding: 0 10px;
      &-img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
    }
    .layout-menu {
      margin-top: 0px;
    }
  }
</style>
