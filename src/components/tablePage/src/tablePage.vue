<template>
  <div>
    <!-- for base-ui>table -->
    <data-table :dataList="dataList" v-bind="tablePageConfig">
      <template #headerControl>
        <el-button type="primary" size="small">小型按钮</el-button>
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
import { defineComponent, computed } from 'vue';
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
    store.dispatch('system/getPageAction', {
      url: props.pathName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    });

    const dataList = computed(() =>
      store.getters['system/getDataList'](props.pathName)
    );
    // const pagesCount = computed(() => store.state.system.usersCount);
    return {
      dataList
      // pagesCount
    };
  }
});
</script>

<style lang="less" scoped></style>
