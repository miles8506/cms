<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in breadArrItem" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// type
import type { Ibreadcrumb } from '../type/type';

export default defineComponent({
  props: {
    breadArrItem: {
      type: Array as PropType<Ibreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
