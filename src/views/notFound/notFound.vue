<template>
  <div id="not_found">
    <h2 class="content">notFound(404)</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
#not_found {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .content {
    margin-bottom: 100px;
  }
}
</style>
