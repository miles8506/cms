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
      :searchFormConfig="windowFormConfigRef"
      :defaultWindowData="defaultWindowData"
      pathName="users"
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
import { defineComponent, computed } from 'vue';

// store
import { useStore } from '@/store';

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
    const store = useStore();

    const windowFormConfigRef = computed(() => {
      // department
      const departmentList = store.state.entireDepartment;
      const departmentFind = windowFormConfig.formData.find((item) => {
        return item.field === 'departmentId';
      });
      if (departmentFind) {
        departmentFind.options = departmentList.map((item) => {
          return {
            title: item.name,
            value: item.id
          };
        });
      }

      // role
      const roleList = store.state.entireRole;
      const RoleFind = windowFormConfig.formData.find((item) => {
        return item.field === 'roleId';
      });
      if (RoleFind) {
        RoleFind.options = roleList.map((item) => {
          return {
            title: item.name,
            value: item.id
          };
        });
      }
      return windowFormConfig;
    });

    // searchPageControl hook
    const { tablePageRef, searchQuery, resetQuery } = {
      ...searchPageControl()
    };

    // windowPageControl hook
    const createCallBackFn = () => {
      const pswIpt = windowFormConfig.formData.find(
        (item) => item.field === 'password'
      );
      if (pswIpt) pswIpt.isHide = false;
    };
    const editCallBackFn = () => {
      const pswIpt = windowFormConfig.formData.find(
        (item) => item.field === 'password'
      );
      if (pswIpt) pswIpt.isHide = true;
    };
    const {
      windowPageRef,
      defaultWindowData,
      addWindowStatus,
      editWindowStatus
    } = windowPageControl(createCallBackFn, editCallBackFn);

    return {
      searchFormConfig,
      tablePageConfig,
      tablePageRef,
      searchQuery,
      resetQuery,
      windowFormConfigRef,
      addWindowStatus,
      editWindowStatus,
      windowPageRef,
      defaultWindowData
    };
  }
});
</script>

<style lang="less" scoped></style>
