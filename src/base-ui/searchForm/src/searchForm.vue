<template>
  <div id="search_form">
    <slot name="search_header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formData" :key="item">
          <el-col v-if="!item.isHide" v-bind="colConfig" :style="itemStyle">
            <!-- type -> input&password -->
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-form-item :label="item.label"
                ><el-input v-model="searchDataRef[item.field]"></el-input>
              </el-form-item>
            </template>
            <!-- type -> select -->
            <template v-else-if="item.type === 'select'">
              <el-form-item :label="item.label">
                <el-select
                  style="width: 100%"
                  v-model="searchDataRef[item.field]"
                  ><el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.title"
                    >{{ option.title }}</el-option
                  ></el-select
                >
              </el-form-item>
            </template>
            <!-- type -> datepicker -->
            <template v-else-if="item.type === 'datepicker'">
              <el-form-item :label="item.label">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="searchDataRef[item.field]"
                ></el-date-picker>
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="search_footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

// type
import { IformType } from '../index';

export default defineComponent({
  props: {
    formData: {
      type: Array as PropType<IformType[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colConfig: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    searchData: {
      type: Object,
      // default: () => ({}),
      required: true
    }
  },
  emits: ['update:searchData'],
  setup(props, { emit }) {
    // 監聽v-model(for user.vue組件)數據
    const searchDataRef = ref({ ...props.searchData });

    watch(
      searchDataRef,
      (newData) => {
        emit('update:searchData', newData);
      },
      { deep: true }
    );

    return {
      searchDataRef
    };
  }
});
</script>

<style lang="less" scoped>
#search_form {
  padding-top: 22px;
}
</style>
