<template>
  <div class="data_tabel">
    <slot name="header">
      <div class="header">
        <div class="title">{{ headerTitle }}</div>
        <div class="header_control">
          <slot name="headerControl"></slot>
        </div>
      </div>
    </slot>
    <el-table
      :data="dataList"
      @selection-change="handleSelectChange"
      style="width: 100%"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        width="60"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        label="序號"
        type="index"
        align="center"
      ></el-table-column
      ><template v-for="item in tableProps" :key="item.prop">
        <el-table-column v-bind="item" :show-overflow-tooltip="true"
          ><template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{
              scope.row[item.prop]
            }}</slot>
          </template></el-table-column
        >
      </template>
    </el-table>
    <div class="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataListCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    headerTitle: {
      type: String,
      default: ''
    },
    tableProps: {
      type: Array,
      required: true
    },
    dataList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    dataListCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:page'],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      console.log(value);
    };

    // pagination
    const handleSizeChange = (pageSize: number) => {
      // console.log(value);
      emit('update:page', {
        ...props.page,
        pageSize
      });
    };

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', {
        ...props.page,
        currentPage
      });
    };

    return {
      handleSelectChange,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>

<style lang="less" scoped>
@import '../less/table.less';
</style>
