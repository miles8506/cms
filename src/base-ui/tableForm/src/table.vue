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
      :data="userList"
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
      ></el-table-column>
      <template v-for="item in tableProps" :key="item.prop">
        <el-table-column v-bind="item">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
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
    userList: {
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
    }
  },
  setup() {
    const handleSelectChange = (value: any) => {
      console.log(value);
    };
    return {
      handleSelectChange
    };
  }
});
</script>

<style lang="less" scoped>
@import '../less/table.less';
</style>
