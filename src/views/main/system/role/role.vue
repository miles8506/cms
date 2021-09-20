<template>
  <div class="role">
    <div id="role_search">
      <search-page
        :searchFormConfig="searchFormConfig"
        ref="tablePageRef"
        @searchQuery="searchQuery"
        @resetQuery="resetQuery"
      />
    </div>
    <div id="role_info">
      <table-page
        :tablePageConfig="tablePageConfig"
        pathName="role"
        ref="tablePageRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// component
import SearchPage from '@/components/searchPage/src/searchPage.vue';
import TablePage from '@/components/tablePage';

// config
import { searchFormConfig } from './config/searchPage.config';
import { tablePageConfig } from './config/tablePage.config';

// hook
import { searchPageControl } from '@/hook/searchPageControl';

export default defineComponent({
  components: {
    SearchPage,
    TablePage
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
      resetQuery
    };
  }
});
</script>

<style scoped></style>
