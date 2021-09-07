<template>
  <div class="main_header">
    <i
      class="fold"
      :class="foldStatus ? 'el-icon-back' : 'el-icon-right'"
      @click="changeFoldImg"
    ></i>
    <div class="header_bar">
      <div class="toast">
        <breadcrumb :breadArrItem="breadArrItem" />
      </div>
      <user-select />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';

// components
import UserSelect from './cpns/userSelect.vue';
import Breadcrumb from '@/base-ui/breadcrumb';

//type
import type { Ibreadcrumb } from '@/base-ui/breadcrumb/type/type';

// utils
import { mapBreadcrump } from '@/utils/mapMenu';

export default defineComponent({
  components: {
    UserSelect,
    Breadcrumb
  },
  emits: ['changeFoldStatus'],

  setup(props, { emit }) {
    const foldStatus = ref(false);
    const changeFoldImg = () => {
      foldStatus.value = !foldStatus.value;
      emit('changeFoldStatus', foldStatus.value);
    };

    // breadcrumb
    const route = useRoute();
    const store = useStore();
    const breadArrItem = computed(() => {
      const currentPath = route.path;
      const userMenu = store.state.loginModule.userMenu;
      const breadcrumbArr: Ibreadcrumb[] = [];
      return mapBreadcrump(userMenu, currentPath, breadcrumbArr);
    });

    return {
      foldStatus,
      changeFoldImg,
      breadArrItem
    };
  }
});
</script>

<style lang="less" scoped>
@import '~@/assets/less/mainHeader/mainHeader.less';
</style>
