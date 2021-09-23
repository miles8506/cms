<template>
  <div class="window_page">
    <el-dialog v-model="DialogVisible" title="新建用戶" width="30%" center>
      <search-form v-bind="searchFormConfig" v-model:searchData="inputData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="DialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="DialogVisible = false"
            >Create</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// component
import SearchForm from '@/base-ui/searchForm';

export default defineComponent({
  components: {
    SearchForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    // dialog
    const DialogVisible = ref(true);

    // v-model input
    const inputData = ref({});
    return {
      DialogVisible,
      inputData
    };
  }
});
</script>

<style lang="less" scoped></style>
