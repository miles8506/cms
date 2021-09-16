<template>
  <div class="role">
    <div id="role_search">
      <search-page :searchFormConfig="searchFormConfig" />
    </div>
    <div id="role_info">
      <table-page :tablePageConfig="tablePageConfig" pathName="role" />
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

<style scoped></style>
