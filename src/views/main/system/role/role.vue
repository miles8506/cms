<template>
  <div class="role">
    <table-page :tablePageConfig="tablePageConfig" pathName="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TablePage from '@/components/tablePage';
import { tablePageConfig } from './config/tablePage.config';

export default defineComponent({
  components: {
    TablePage
  },
  setup() {
    return {
      tablePageConfig
    };
  }
});
</script>

<style scoped></style>
