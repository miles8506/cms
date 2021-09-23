<template>
  <div class="window_page">
    <el-dialog
      v-model="DialogVisible"
      title="新建用戶"
      width="30%"
      center
      destroy-on-close
    >
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
import { defineComponent, ref, watch } from 'vue';

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
    },
    defaultWindowData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    // dialog
    const DialogVisible = ref(false);

    // v-model input
    const inputData = ref<any>({});

    watch(
      () => props.defaultWindowData,
      (newData) => {
        const formData = props.searchFormConfig.formData;
        for (const item of formData) {
          inputData.value[item.field] = newData[item.field];
        }
      }
    );

    return {
      DialogVisible,
      inputData
    };
  }
});
</script>

<style lang="less" scoped></style>
