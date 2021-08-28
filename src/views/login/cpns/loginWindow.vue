<template>
  <div id="login_window">
    <div class="login_wrap">
      <h2 class="title">後台管理系統</h2>
      <!-- login form start -->
      <el-tabs type="border-card" stretch v-model="Mpcformat">
        <el-tab-pane name="pc">
          <template #label>
            <span><i class="el-icon-user"></i> 帳號登入</span>
          </template>
          <account-format ref="accountFormatRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手機登入</span>
          </template>
          <phone-format ref="phoneFormatRef" />
        </el-tab-pane>
      </el-tabs>
      <!-- login form end -->

      <!-- remember_psw start -->
      <div class="remember_psw">
        <el-checkbox label="忘記密碼" v-model="isCheckMember"></el-checkbox>
        <el-link type="primary">忘記密碼</el-link>
      </div>
      <!-- remember_psw end -->

      <!-- login_btn start -->
      <el-button type="primary" class="login_btn" @click="loginClick"
        >立即登入</el-button
      >
      <!-- login_btn end -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// components
import AccountFormat from '@/views/login/cpns/accountFormat.vue';
import PhoneFormat from '@/views/login/cpns/phoneFormat.vue';

// type
import validateAction from './accountFormat.vue';
import verifyAction from './phoneFormat.vue';

export default defineComponent({
  components: {
    AccountFormat,
    PhoneFormat
  },
  setup() {
    const accountFormatRef = ref<InstanceType<typeof validateAction>>();
    const phoneFormatRef = ref<InstanceType<typeof verifyAction>>();
    const isCheckMember = ref(true);
    const Mpcformat = ref('pc');

    // 點擊登入
    const loginClick = () => {
      if (Mpcformat.value === 'pc')
        accountFormatRef.value?.validateAction(isCheckMember.value);
      else if (Mpcformat.value === 'phone')
        phoneFormatRef.value?.verifyAction(isCheckMember.value);
    };
    return {
      accountFormatRef,
      phoneFormatRef,
      isCheckMember,
      Mpcformat,
      loginClick
    };
  }
});
</script>

<style lang="less" scoped>
@import '../../../assets/less/login/loginWindow.less';
</style>
