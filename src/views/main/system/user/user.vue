<template>
  <div>
    <div id="user_search">
      <search-page
        :searchFormConfig="searchFormConfig"
        @searchQuery="searchQuery"
        @resetQuery="resetQuery"
      />
    </div>
    <window-page
      :searchFormConfig="windowFormConfig"
      :defaultWindowData="defaultWindowData"
      ref="windowPageRef"
    />
    <div id="user_info">
      <table-page
        :tablePageConfig="tablePageConfig"
        pathName="users"
        ref="tablePageRef"
        @addWindowStatus="addWindowStatus"
        @editWindowStatus="editWindowStatus"
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
import { windowPageControl } from '@/hook/windowpageControl';

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
    const {
      windowPageRef,
      defaultWindowData,
      addWindowStatus,
      editWindowStatus
    } = windowPageControl();

    // const windowPageRef = ref<InstanceType<typeof WindowPage>>();
    // const defaultWindowData = ref({});

    // const addWindowStatus = () => {
    //   if (windowPageRef.value) {
    //     windowPageRef.value.DialogVisible = true;
    //   }
    // };

    // const editWindowStatus = (item: any) => {
    //   defaultWindowData.value = item;
    //   if (windowPageRef.value) {
    //     windowPageRef.value.DialogVisible = true;
    //   }
    // };

    return {
      searchFormConfig,
      tablePageConfig,
      tablePageRef,
      searchQuery,
      resetQuery,
      windowFormConfig,
      addWindowStatus,
      editWindowStatus,
      windowPageRef,
      defaultWindowData
    };
  }
});
</script>

<style lang="less" scoped></style>
