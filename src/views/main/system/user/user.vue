<template>
  <div>
    <div id="user_search">
      <search-page
        :searchFormConfig="searchFormConfig"
        @searchQuery="searchQuery"
        @resetQuery="resetQuery"
      />
    </div>
    <window-page :searchFormConfig="windowFormConfig" />
    <div id="user_info">
      <table-page
        :tablePageConfig="tablePageConfig"
        pathName="users"
        ref="tablePageRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// components
import SearchPage from '@/components/searchPage/src/searchPage.vue';
import TablePage from '@/components/tablePage';
import WindowPage from '@/components/windowPage';

// config
import { searchFormConfig } from './config/searchPage.config';
import { tablePageConfig } from './config/tablePage.config';
import { windowFormConfig } from '@/views/main/system/user/config/windowPageConfig';

// hook
import { searchPageControl } from '@/hook/searchPageControl';

export default defineComponent({
  components: {
    SearchPage,
    TablePage,
    WindowPage
  },

  setup() {
    const { tablePageRef, searchQuery, resetQuery } = {
      ...searchPageControl()
    };

    return {
      searchFormConfig,
      tablePageConfig,
      tablePageRef,
      searchQuery,
      resetQuery,
      windowFormConfig
    };
  }
});
</script>

<style lang="less" scoped></style>
