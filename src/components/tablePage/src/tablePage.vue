<template>
  <div>
    <data-table
      :dataList="dataList"
      :dataListCount="dataListCount"
      v-bind="tablePageConfig"
      v-model:page="paginationData"
    >
      <!-- headeControl -->
      <template #headerControl>
        <el-button
          v-if="isCreate"
          type="primary"
          size="small"
          @click="addItemBtn"
          >新增</el-button
        >
      </template>

      <!-- 動態slot -->
      <template
        v-for="item in filterSlot"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>

      <!-- stautsBtn -->
      <template #status="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'danger'"
          :plain="true"
          >{{ scope.row.enable ? '啟用' : '禁用' }}</el-button
        >
      </template>

      <!-- firstTime -->
      <template #firstTime="scope">
        <span>{{ $filterUtc(scope.row.createAt) }}</span>
      </template>

      <!-- lastTime -->
      <template #lastTime="scope">
        <span>{{ $filterUtc(scope.row.updateAt) }}</span>
      </template>

      <!-- control -->
      <template #control="scope">
        <div class="control_wrap">
          ><el-button
            v-if="isUpdate"
            type="text"
            size="mini"
            icon="el-icon-edit"
            @click="editItemBtn(scope.row)"
            >編輯</el-button
          ><el-button
            v-if="isDelete"
            type="text"
            size="mini"
            icon="el-icon-delete"
            @click="deleteClick(scope.row)"
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

// hook
import { permissionControl } from '@/hook/permissionControl';

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
  emits: ['addWindowStatus', 'editWindowStatus'],
  setup(props, { emit }) {
    // 獲取userList data
    const store = useStore();

    // pagination
    const paginationData = ref({
      currentPage: 1,
      pageSize: 10
    });
    watch(paginationData, () => getPageAciton());

    // user permision
    const isCreate = permissionControl(props.pathName, 'create');
    const isDelete = permissionControl(props.pathName, 'delete');
    const isUpdate = permissionControl(props.pathName, 'update');
    const isQuery = permissionControl(props.pathName, 'query');

    // get table data
    const getPageAciton = (searchData: any = {}) => {
      if (!isQuery) return;
      const paginationInfo = {
        offset:
          (paginationData.value.currentPage - 1) *
          paginationData.value.pageSize,
        size: paginationData.value.pageSize
      };

      // 將pagination數據保存至vuex中
      store.commit('setOffset', paginationInfo.offset);
      store.commit('setSize', paginationInfo.size);

      store.dispatch('system/getPageAction', {
        url: props.pathName,
        queryInfo: {
          offset: store.state.offset,
          size: store.state.size,
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

    const filterSlot = props.tablePageConfig.tableProps.filter((item: any) => {
      if (item.slotName === 'status') return false;
      if (item.slotName === 'firstTime') return false;
      if (item.slotName === 'lastTime') return false;
      if (item.slotName === 'control') return false;
      return item.slotName;
    });

    // deleteItem
    const deleteClick = (item: any) => {
      store.dispatch('system/deletePageAction', {
        id: item.id,
        pathName: props.pathName,
        offset: store.state.offset,
        size: store.state.size
      });
    };

    // emit
    const addItemBtn = () => {
      emit('addWindowStatus');
    };
    const editItemBtn = (item: any) => {
      emit('editWindowStatus', item);
    };

    return {
      dataList,
      getPageAciton,
      paginationData,
      dataListCount,
      filterSlot,
      isCreate,
      isDelete,
      isUpdate,
      isQuery,
      deleteClick,
      addItemBtn,
      editItemBtn
    };
  }
});
</script>

<style lang="less" scoped></style>
