<template>
  <div id="main">
    <el-container class="main_container">
      <el-aside width="210px" class="main_aside">
        <aside-menu />
      </el-aside>
      <el-container class="main_right">
        <el-header id="header">Header</el-header>
        <el-main id="main_box">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// components
import asideMenu from '@/components/asideMenu';

export default defineComponent({
  components: {
    asideMenu
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
@import '../../assets/less/main/main.less';
</style>
