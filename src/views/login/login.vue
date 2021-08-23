<template>
  <div id="login">
    <login-window />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import loginWindow from './cpns/loginWindow.vue';

export default defineComponent({
  components: {
    loginWindow
  },
  setup() {
    return {
      defineComponent
    };
  }
});
</script>

<style lang="less" scoped>
#login {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg') center center;
}
</style>
