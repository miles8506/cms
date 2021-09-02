<template>
  <div class="aside_menu">
    <div class="logo_wrap">
      <img src="~@/assets/img/logo.svg" alt="" class="img" />
      <div class="title">Vue3 CMS</div>
    </div>
    <aside class="aside_menu">
      <el-menu
        :collapse="foldStatus"
        :uniqueOpened="false"
        default-active="2"
        class="el-menu-vertical"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
      >
        <template v-for="item in userMenus" :key="item.id + ''">
          <template v-if="item.type === 1">
            <el-submenu :index="item.id + ''">
              <template #title>
                <i v-if="item.icon" :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item
                v-for="subitem in item.children"
                :key="subitem.id + ''"
                :index="subitem.id + ''"
              >
                {{ subitem.name }}
              </el-menu-item>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  props: {
    foldStatus: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const userMenus = store.state.loginModule.userMenu;
    return {
      userMenus
    };
  }
});
</script>

<style lang="less" scoped>
@import '~@/assets/less/asideMenu/asideMenu.less';
</style>
