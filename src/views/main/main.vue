<template>
  <div id="main">
    <el-container class="main_container">
      <el-aside :width="foldStatus ? '60px' : '210px'" class="main_aside">
        <aside-menu :foldStatus="foldStatus" />
      </el-aside>
      <el-container class="main_right">
        <el-header id="header">
          <main-header @changeFoldStatus="changeFoldStatus" />
        </el-header>
        <el-main id="main_box">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// components
import asideMenu from '@/components/asideMenu';
import mainHeader from '@/components/mainHeader';

export default defineComponent({
  components: {
    asideMenu,
    mainHeader
  },
  setup() {
    const foldStatus = ref(false);
    const changeFoldStatus = (status: boolean) => {
      foldStatus.value = status;
    };
    return {
      changeFoldStatus,
      foldStatus
    };
  }
});
</script>

<style lang="less" scoped>
@import '~@/assets/less/main/main.less';
</style>
