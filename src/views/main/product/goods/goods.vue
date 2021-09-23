<template>
  <div>
    <table-page :tablePageConfig="tablePageConfig" pathName="goods">
      <!-- goodsImg -->
      <template #goodsImg="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #newPrice="scope">
        {{ '$' + scope.row.newPrice }}
      </template>
    </table-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// component
import TablePage from '@/components/tablePage';

// config
import { tablePageConfig } from './config/goodsConfig';

export default defineComponent({
  components: {
    TablePage
  },
  setup() {
    return {
      tablePageConfig
    };
  }
});
</script>

<style scoped></style>
