<template>
  <div class="base_echart" ref="baseEchartRef" :style="{ width, height }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watch } from 'vue';

// hook
import { useEchart } from '../hook/useEchart';

// echart
import { EChartsOption } from 'echarts';

const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsOption;
  }>(),
  {
    width: '100%',
    height: '360px'
  }
);

const baseEchartRef = ref<HTMLElement>();

// life cycle mounted
onMounted(() => {
  const { setOptions } = useEchart(baseEchartRef.value!);
  setOptions(props.options);

  watch(
    () => props.options,
    (newData) => {
      newData && setOptions(props.options);
    }
  );
});
</script>

<style lang="less" scoped></style>
