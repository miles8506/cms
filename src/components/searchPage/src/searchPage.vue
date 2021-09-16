<template>
  <div class="search_page">
    <search-form v-bind="searchFormConfig" v-model:searchData="searchData">
      <template #search_header></template>
      <template #search_footer>
        <div class="search_btn">
          <el-button icon="el-icon-refresh-left" size="medium" @click="resetBtn"
            >重置</el-button
          >
          <el-button type="primary" icon="el-icon-search" size="medium"
            >搜尋</el-button
          >
        </div>
      </template>
    </search-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// component
import SearchForm from '@/base-ui/searchForm/';

export default defineComponent({
  components: {
    SearchForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const searchDataConfig: any = {};
    const items = props.searchFormConfig.formData;
    for (const item of items) {
      searchDataConfig[item.field] = '';
    }
    const searchData = ref(searchDataConfig);

    const resetBtn = () => {
      for (const key in searchDataConfig) {
        searchData.value[key] = searchDataConfig[key];
      }
    };

    return {
      searchData,
      resetBtn
    };
  }
});
</script>

<style lang="less" scoped>
.search_btn {
  padding: 0 10px 10px 0;
  text-align: right;
}
</style>
