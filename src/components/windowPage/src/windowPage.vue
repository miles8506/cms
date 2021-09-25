<template>
  <div class="window_page">
    <el-dialog
      v-model="DialogVisible"
      :title="searchFormConfig.windowTitle"
      width="30%"
      center
      destroy-on-close
    >
      <search-form v-bind="searchFormConfig" v-model:searchData="inputData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelBtn">Cancel</el-button>
          <el-button type="primary" @click="saveBtn">Save</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

// vuex
import { useStore } from '@/store';

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
    },
    pathName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    // dialog status
    const DialogVisible = ref(false);

    // v-model(input) for component
    const inputData = ref<any>({});

    watch(
      () => props.defaultWindowData,
      (newData) => {
        const formData = props.searchFormConfig.formData;
        for (const item of formData) {
          inputData.value[item.field] = newData[item.field];
        }
        // console.log(props.defaultWindowData);
      }
    );

    // create&edit item
    const saveBtn = () => {
      DialogVisible.value = false;
      if (Object.keys(props.defaultWindowData).length > 0) {
        store.dispatch('system/editPageAction', {
          pathName: props.pathName,
          id: props.defaultWindowData.id,
          eidtData: { ...inputData.value }
        });
      } else {
        store.dispatch('system/createPageAction', {
          pathName: props.pathName,
          newData: { ...inputData.value }
        });
      }
    };

    const cancelBtn = () => {
      DialogVisible.value = false;
    };

    return {
      DialogVisible,
      inputData,
      saveBtn,
      cancelBtn
    };
  }
});
</script>

<style lang="less" scoped></style>
