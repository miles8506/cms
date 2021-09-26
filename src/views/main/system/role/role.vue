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
    <window-page
      :searchFormConfig="windowFormConfig"
      pathName="role"
      ref="windowPageRef"
      :defaultWindowData="defaultWindowData"
      :otherData="otherData"
    >
      <template #default>
        <el-tree
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleSelect"
        />
      </template>
    </window-page>
    <div id="role_info">
      <table-page
        :tablePageConfig="tablePageConfig"
        pathName="role"
        ref="tablePageRef"
        @addWindowStatus="addWindowStatus"
        @editWindowStatus="editWindowStatus"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

// vuex
import { useStore } from '@/store';

// component
import SearchPage from '@/components/searchPage/src/searchPage.vue';
import TablePage from '@/components/tablePage';
import WindowPage from '@/components/windowPage';

// config
import { searchFormConfig } from './config/searchPage.config';
import { tablePageConfig } from './config/tablePage.config';
import { windowFormConfig } from './config/windowPageConfig';

// hook
import { searchPageControl } from '@/hook/searchPageControl';
import { windowPageControl } from '@/hook/windowpageControl';

export default defineComponent({
  components: {
    SearchPage,
    TablePage,
    WindowPage
  },
  setup() {
    const store = useStore();
    const { tablePageRef, searchQuery, resetQuery } = {
      ...searchPageControl()
    };

    const {
      windowPageRef,
      defaultWindowData,
      addWindowStatus,
      editWindowStatus
    } = windowPageControl();

    // el-tree checkevent
    const menuList = computed(() => store.state.entireMenu);
    const otherData = ref({});
    const handleSelect = (data1: any, data2: any) => {
      const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys];
      otherData.value = { menuList };
    };

    return {
      searchFormConfig,
      tablePageConfig,
      tablePageRef,
      searchQuery,
      resetQuery,
      windowFormConfig,
      windowPageRef,
      defaultWindowData,
      addWindowStatus,
      editWindowStatus,
      menuList,
      handleSelect,
      otherData
    };
  }
});
</script>

<style scoped></style>
