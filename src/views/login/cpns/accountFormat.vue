<template>
  <div id="account_format">
    <el-form :rules="rules" :model="accountInfo">
      <el-form-item label="帳號:" prop="account"
        ><el-input v-model="accountInfo.account"></el-input>
      </el-form-item>
      <el-form-item label="密碼:" prop="password"
        ><el-input v-model="accountInfo.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const accountInfo = reactive({
      account: '',
      password: ''
    });

    const rules = {
      account: [
        {
          required: true,
          message: '帳號欄位是必填欄位',
          trigger: 'blur'
        },
        {
          pattern: /^[a-zA-Z0-9]{5,10}$/,
          message: '請輸入5~10碼英文或數字',
          tirgger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密碼欄位是必填欄位',
          trigger: 'blur'
        },
        {
          pattern: /^[a-zA-Z0-9]{5,10}$/,
          message: '請輸入5~10碼英文或數字',
          tirgger: 'blur'
        }
      ]
    };
    return {
      accountInfo,
      rules
    };
  }
});
</script>

<style scoped></style>
