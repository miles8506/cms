<template>
  <div id="app">
    <el-config-provider :locale="zhTw">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhTw from 'element-plus/lib/locale/lang/zh-tw';

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zhTw
    };
  }
});
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
}
</style>
