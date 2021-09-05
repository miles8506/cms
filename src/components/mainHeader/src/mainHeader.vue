<template>
  <div class="main_header">
    <i
      class="fold"
      :class="foldStatus ? 'el-icon-back' : 'el-icon-right'"
      @click="changeFoldImg"
    ></i>
    <div class="header_bar">
      <div class="toast">麵包屑</div>
      <user-select />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// components
import UserSelect from './cpns/userSelect.vue';

export default defineComponent({
  components: {
    UserSelect
  },
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
