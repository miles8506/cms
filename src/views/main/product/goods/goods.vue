<template>
  <div>
    <table-page :tablePageConfig="tablePageConfig" pathName="goods" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// component
import TablePage from '@/components/tablePage';

// config
import { tablePageConfig } from './config/goodsConfig';

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
