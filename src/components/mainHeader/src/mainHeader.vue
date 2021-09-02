<template>
  <div class="main_header">
    <i
      class="fold"
      :class="foldStatus ? 'el-icon-back' : 'el-icon-right'"
      @click="changeFoldImg"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['changeFoldStatus'],

  setup(props, { emit }) {
    const foldStatus = ref(false);
    const changeFoldImg = () => {
      foldStatus.value = !foldStatus.value;
      emit('changeFoldStatus', foldStatus.value);
    };
    return {
      foldStatus,
      changeFoldImg
    };
  }
});
</script>

<style lang="less" scoped>
@import '~@/assets/less/mainHeader/mainHeader.less';
</style>
