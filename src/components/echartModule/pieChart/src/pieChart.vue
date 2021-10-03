<template>
  <div class="pie_chart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import BaseEchart from '@/base-ui/baseEchart';
import { IdataType } from './type/type';

const props = defineProps<{
  chartData: IdataType[];
}>();

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'right'
    },
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>

<style scoped></style>
