<template>
  <div class="line_chart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/base-ui/baseEchart';
import { computed, defineProps, withDefaults } from 'vue';
const props = withDefaults(
  defineProps<{
    XAxisType: string[];
    YAxisData: any[];
    chartTitle?: string;
  }>(),
  {
    chartTitle: ''
  }
);

const options = computed(() => {
  return {
    title: {
      text: props.chartTitle
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.XAxisType
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        type: 'line',
        stack: 'Total',
        // label: {
        //   show: true,
        //   position: 'top'
        // },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.YAxisData
      }
    ]
  };
});
</script>

<style scoped></style>
