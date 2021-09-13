<template>
  <div>
    <div id="user_search">
      <search-page :searchFormConfig="searchFormConfig" />
    </div>
    <div id="user_info">
      <table-page :tablePageConfig="tablePageConfig" pathName="users" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// components
import SearchPage from '@/components/searchPage/src/searchPage.vue';
import TablePage from '@/components/tablePage';

// config
import { searchFormConfig } from './config/searchPage.config';
import { tablePageConfig } from './config/tablePage.config';

export default defineComponent({
  components: {
    SearchPage,
    TablePage
  },
  setup() {
    return {
      searchFormConfig,
      tablePageConfig
    };
  }
});
</script>

<style lang="less" scoped></style>
