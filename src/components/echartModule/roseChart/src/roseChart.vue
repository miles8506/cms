<template>
  <div class="rose_chart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import BaseEchart from '@/base-ui/baseEchart';
import type { IdataType } from './type/type';

const props = defineProps<{
  options: IdataType;
}>();

const options = computed(() => {
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        type: 'pie',
        radius: [30, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 4
        },
        data: props.options
      }
    ]
  };
});
</script>

<style scoped></style>
