<template>
  <div>
    <div id="user_search">
      <search-page />
    </div>
    <div id="user_info"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

// components
import SearchPage from '@/base-ui/searchPage';

export default defineComponent({
  components: {
    SearchPage
  },
  setup() {
    // 獲取userList data
    const store = useStore();
    store.dispatch('system/getPageAction', {
      url: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    });
    return {};
  }
});
</script>

<style lang="less" scoped></style>
