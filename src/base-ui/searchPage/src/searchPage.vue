<template>
  <div class="search_page">
    <search-form v-bind="searchFormConfig" v-model:searchData="searchData">
      <template #search_header></template>
      <template #search_footer>
        <div class="search_btn">
          <el-button icon="el-icon-refresh-left" size="medium">重置</el-button>
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
import {
  searchFormConfig,
  IsearchDataType
} from '@/views/main/system/user/config/user.config';

// component
import SearchForm from '@/base-ui/searchForm/';

export default defineComponent({
  components: {
    SearchForm
  },
  setup() {
    const searchData = ref<IsearchDataType>({
      account: '',
      psw: '',
      habit: '',
      dateRange: []
    });

    return {
      searchFormConfig,
      searchData
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
