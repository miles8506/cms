<template>
  <div class="base_card">
    <el-card class="box-card">
      <template #header>
        <slot name="title"></slot>
      </template>
      <slot></slot>
    </el-card>
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

<style lang="less" scoped></style>
