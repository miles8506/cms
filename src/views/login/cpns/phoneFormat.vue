<template>
  <div id="phone_format">
    <el-form :rules="rules_mb" :model="accountInfo">
      <el-form-item label="手機號:" prop="account"
        ><el-input v-model="accountInfo.account"></el-input>
      </el-form-item>
      <el-form-item label="驗證碼:" prop="verify">
        <div class="verify_wrap">
          <el-input v-model="accountInfo.verify"></el-input>
          <el-button type="primary" class="verify_btn">發送驗證碼</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
// vue
import { defineComponent, reactive } from 'vue';

// config
import { rules_mb } from '../config/accountConfig';

export default defineComponent({
  setup() {
    const accountInfo = reactive({
      account: '',
      verify: ''
    });
    return {
      rules_mb,
      accountInfo
    };
  }
});
</script>

<style lang="less" scoped>
@import '../../../assets/less/login/phoneFormat.less';
</style>
