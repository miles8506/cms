<template>
  <div id="phone_format">
    <el-form
      :rules="rules_mb"
      :model="accountInfo"
      ref="validateFormat"
      hide-required-asterisk
    >
      <el-form-item label="手機號:" prop="name"
        ><el-input v-model="accountInfo.name"></el-input>
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
import { defineComponent, reactive, ref } from 'vue';

// vuex
import { useStore } from 'vuex';

// config
import { rules_mb } from '../config/accountConfig';

// element-plus
import { ElForm } from 'element-plus';

// utils-cache
import { localCache } from '@/utils/cache';

export default defineComponent({
  setup() {
    const store = useStore();
    const validateFormat = ref<InstanceType<typeof ElForm>>();
    const accountInfo = reactive({
      name: localCache.getLocalAccount('phone_num') ?? '',
      verify: ''
    });

    const verifyAction = (isCheckMember: boolean) => {
      validateFormat.value?.validate((status) => {
        if (status) {
          if (isCheckMember) {
            localCache.setLocalAccount('phone_num', accountInfo.name);
          } else {
            localCache.removeLocalAccount('phone_num');
          }
          store.dispatch('loginModule/getLoginPhone', accountInfo);
        }
      });
    };
    return {
      rules_mb,
      accountInfo,
      validateFormat,
      verifyAction
    };
  }
});
</script>

<style lang="less" scoped>
@import '../../../assets/less/login/phoneFormat.less';
</style>
