<template>
  <div class="map_chart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { convertData } from '../utils/convertData';
import BaseEchart from '@/base-ui/baseEchart';
const props = defineProps<{
  mapChartData: any[];
}>();

const options = computed(() => {
  return {
    backgroundColor: '#030303',
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2];
      }
    },
    legend: {
      orient: 'vertical',
      right: 20,
      top: 10,
      textStyle: {
        color: '#fff'
      }
    },
    visualMap: {
      min: 0,
      max: 10000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'taiwan',
      roam: 'scale',
      label: {
        emphasis: {
          show: false
        }
      },
      areaColor: 'rgb(19, 91, 153)',
      borderColor: 'rgb(9, 54, 95)',
      emphasis: {
        areaColor: 'rgb(10, 105, 187)'
      }
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(props.mapChartData),
        symbolSize: 12,
        label: {
          show: false,
          emphasis: {
            show: false
          }
        },
        emphasis: {
          borderColor: '#fff',
          borderWidth: 1
        }
      },
      {
        type: 'map',
        map: 'taiwan',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  };
});
</script>

<style scoped></style>
