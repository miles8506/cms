<template>
  <div id="login_window">
    <div class="login_wrap">
      <h2 class="title">後台管理系統</h2>
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-user"></i> 帳號登入</span>
          </template>
          <account-format />
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手機登入</span>
          </template>
          <phone-format />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// components
import AccountFormat from '@/views/login/cpns/accountFormat.vue';
import PhoneFormat from '@/views/login/cpns/phoneFormat.vue';

export default defineComponent({
  components: {
    AccountFormat,
    PhoneFormat
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
@import '../../../assets/less/login/loginWindow.less';
</style>
