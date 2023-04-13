<template>
  <div class="app-page-about">
    <div>dependencies</div>
    <el-tag type="primary" v-for="(item, index) in schema" class="m-1">{{ item.label }}</el-tag>
    <div>devDependencies</div>
    <el-tag type="primary" v-for="(item, index) in devSchema" class="m-1">{{ item.label }}</el-tag>
  </div>
</template>

<script setup lang="ts">
  import pkg from '../../../../package.json'
  const { dependencies, devDependencies, name } = pkg
  const schema = <any>[]
  const devSchema = <any>[]
  Object.keys(dependencies).forEach((key) => {
    schema.push({ field: key, label: key })
  })
  Object.keys(devDependencies).forEach((key) => {
    devSchema.push({ field: key, label: key })
  })
</script>
