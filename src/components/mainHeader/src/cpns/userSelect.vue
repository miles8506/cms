<template>
  <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link user_select">
      <div class="avatar_img">
        <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
      </div>
      <div>{{ userName }}<i class="el-icon-arrow-down el-icon--right"></i></div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logoutAccount">退出登入</el-dropdown-item>
        <el-dropdown-item divided>用戶信息</el-dropdown-item>
        <el-dropdown-item>系統管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

//router
import { useRouter } from 'vue-router';

// vuex
import { useStore } from 'vuex';

// utils
import { localCache } from '@/utils/cache';

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const userName = computed(() => store.state.loginModule.userInfo.name);

    // logout
    const logoutAccount = () => {
      localCache.removeLocalAccount('token');
      router.push('/main');
    };
    return {
      userName,
      logoutAccount
    };
  }
});
</script>

<style scoped>
@import '~@/assets/less/userSelect/userSelect.less';
</style>
