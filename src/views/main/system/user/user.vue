<template>
  <div>
    <div id="user_search">
      <search-form v-bind="searchFormConfig" />
    </div>
    <div id="user_info"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { searchFormConfig } from './config/user.config';

// component
import SearchForm from '@/base-ui/searchForm/';

export default defineComponent({
  components: {
    SearchForm
  },
  setup() {
    return {
      searchFormConfig
    };
  }
});
</script>

<style lang="less" scoped></style>
