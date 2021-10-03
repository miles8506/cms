import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import mapData from '../data/mapData.json';
echarts.registerMap('taiwan', mapData);

export function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el);
  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options);
  };

  // 響應式echarts
  window.addEventListener('resize', () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOptions
  };
}
