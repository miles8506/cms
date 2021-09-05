<template>
  <div id="search_form">
    <el-form label-width="120px">
      <el-row>
        <template v-for="item in formData" :key="item">
          <el-col v-bind="colConfig" :style="itemStyle">
            <!-- type -> input&password -->
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-form-item :label="item.label"
                ><el-input></el-input>
              </el-form-item>
            </template>
            <!-- type -> select -->
            <template v-else-if="item.type === 'select'">
              <el-form-item :label="item.label">
                <el-select style="width: 100%"
                  ><el-option
                    v-for="option in item.options"
                    :key="option"
                    :value="item.value"
                    >{{ option.label }}</el-option
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
                ></el-date-picker>
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

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
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
#search_form {
  padding-top: 22px;
}
</style>
