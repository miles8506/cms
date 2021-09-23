<template>
  <div>
    <table-page :tablePageConfig="tablePageConfig" pathName="menu" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// component
import TablePage from '@/components/tablePage';

// config
import { tablePageConfig } from './config/menuConfig';

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
