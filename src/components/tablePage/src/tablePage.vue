<template>
  <div>
    <data-table
      :dataList="dataList"
      v-bind="tablePageConfig"
      :dataListCount="dataListCount"
      v-model:page="paginationData"
    >
      <template #headerControl>
        <el-button type="primary" size="small">小型按钮</el-button>
      </template>
      <template #goodsImg="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #status="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'danger'"
          :plain="true"
          >{{ scope.row.enable ? '啟用' : '禁用' }}</el-button
        >
      </template>
      <template #firstTime="scope">
        <span>{{ $filterUtc(scope.row.createAt) }}</span>
      </template>
      <template #lastTime="scope">
        <span>{{ $filterUtc(scope.row.updateAt) }}</span>
      </template>
      <template #control>
        <div class="control_wrap">
          <el-button type="text" size="mini" icon="el-icon-edit"
            >編輯</el-button
          >
          <el-button type="text" size="mini" icon="el-icon-delete"
            >刪除</el-button
          >
        </div>
      </template>
    </data-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useStore } from '@/store';

//component
import dataTable from '@/base-ui/tableForm';

export default defineComponent({
  components: {
    dataTable
  },
  props: {
    tablePageConfig: {
      type: Object,
      required: true
    },
    pathName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 獲取userList data
    const store = useStore();

    // pagination
    const paginationData = ref({
      currentPage: 0,
      pageSize: 10
    });
    watch(paginationData, () => getPageAciton());

    // get table data
    const getPageAciton = (searchData: any = {}) => {
      let page = 0;
      if (paginationData.value.currentPage !== 0)
        page = paginationData.value.currentPage - 1;
      store.dispatch('system/getPageAction', {
        url: props.pathName,
        queryInfo: {
          offset: page * paginationData.value.pageSize,
          size: paginationData.value.pageSize,
          ...searchData.value
        }
      });
    };
    getPageAciton();

    // table data
    const dataList = computed(() =>
      store.getters['system/getDataList'](props.pathName)
    );

    // totalPages(總頁數)
    const dataListCount = computed(() =>
      store.getters[`system/getDataCount`](props.pathName)
    );

    return {
      dataList,
      getPageAciton,
      paginationData,
      dataListCount
    };
  }
});
</script>

<style lang="less" scoped></style>
