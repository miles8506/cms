<template>
  <div id="account_format">
    <el-form :rules="rules_pc" :model="accountInfo" ref="validateFormat">
      <el-form-item label="帳號:" prop="account"
        ><el-input v-model="accountInfo.account"></el-input>
      </el-form-item>
      <el-form-item label="密碼:" prop="password"
        ><el-input v-model="accountInfo.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
// vue
import { defineComponent, reactive, ref } from 'vue';

// config
import { rules_pc } from '../config/accountConfig';

// element-plus
import { ElForm } from 'element-plus';

// utils
import { localCache } from '@/utils/cache';

export default defineComponent({
  setup() {
    const accountInfo = reactive({
      account: localCache.getLocalAccount('account') ?? '',
      password: localCache.getLocalAccount('psw') ?? ''
    });
    const validateFormat = ref<InstanceType<typeof ElForm>>();
    const validateAction = (isCheckMember: boolean) => {
      validateFormat.value?.validate((valid): void => {
        if (valid) {
          // localstorage 判斷是否儲存帳號與密碼
          if (isCheckMember) {
            localCache.setLocalAccount('account', accountInfo.account);
            localCache.setLocalAccount('psw', accountInfo.password);
          } else {
            localCache.removeLocalAccount('account');
            localCache.removeLocalAccount('psw');
          }
        }
      });
    };
    return {
      accountInfo,
      rules_pc,
      validateAction,
      validateFormat
    };
  }
});
</script>

<style scoped></style>
