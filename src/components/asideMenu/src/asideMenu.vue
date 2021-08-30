<template>
  <div class="aside_menu">
    <div class="logo_wrap">
      <img src="~@/assets/img/logo.svg" alt="" class="img" />
      <div class="title">Vue3 CMS</div>
    </div>
    <aside>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <template v-for="item in asideMenu" :key="item.id"> </template>
      </el-menu>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store/';

export default defineComponent({
  setup() {
    const store = useStore();
    const systemMenu = computed(() => store.state.login.userMenu);
    return {
      systemMenu
    };
  }
});
</script>

<style lang="less" scoped>
@import '~@/assets/less/asideMenu/asideMenu.less';
</style>
