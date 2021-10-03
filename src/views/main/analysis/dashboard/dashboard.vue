<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <base-card>
          <template #title>
            <div class="title">分類商品數量(圓餅圖)</div>
          </template>
          <pie-chart :chartData="pieChartData" />
        </base-card>
      </el-col>
      <el-col :span="10">
        <base-card>
          <template #title>
            <div class="title">不同城市商品銷量</div>
          </template>
          <map-chart :mapChartData="mapChartData" />
        </base-card>
      </el-col>
      <el-col :span="7">
        <base-card>
          <template #title>
            <div class="title">分類商品數量(玫瑰圖)</div>
          </template>
          <rose-chart :options="pieChartData" />
        </base-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="bottom_row">
      <el-col :span="12">
        <base-card>
          <template #title>
            <div class="title">分類商品銷量</div>
          </template>
          <line-chart v-bind="lineChartData" />
        </base-card>
      </el-col>
      <el-col :span="12">
        <base-card>
          <template #title>
            <div class="title">分類商品的收藏</div>
          </template>
          <bar-chart v-bind="barChartData" />
        </base-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store/index';

// component
import {
  PieChart,
  RoseChart,
  LineChart,
  BarChart,
  MapChart
} from '@/components/echartModule';
import BaseCard from '@/base-ui/baseCard';

export default defineComponent({
  components: {
    BaseCard,
    PieChart,
    RoseChart,
    LineChart,
    BarChart,
    MapChart
  },
  setup() {
    const store = useStore();
    store.dispatch('dashboardModule/getDashboardData');

    // pie&rose chartData
    const pieChartData = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item) => {
        return {
          name: item.name,
          value: item.goodsCount
        };
      });
    });

    // line chartData
    const lineChartData = computed(() => {
      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale;
      const XAxisType: string[] = [];
      const YAxisData: any[] = [];
      for (let item of categoryGoodsSale) {
        XAxisType.push(item.name);
        YAxisData.push(item.goodsCount);
      }
      return {
        XAxisType,
        YAxisData
      };
    });

    // bar chartData
    const barChartData = computed(() => {
      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor;
      const XAxisType: string[] = [];
      const YAxisData: any[] = [];
      for (let item of categoryGoodsFavor) {
        XAxisType.push(item.name);
        YAxisData.push(item.goodsFavor);
      }
      return {
        XAxisType,
        YAxisData
      };
    });

    // map chartData
    const mapChartData = computed(() => {
      return store.state.dashboardModule.addressGoodsSale;
    });

    return {
      pieChartData,
      lineChartData,
      barChartData,
      mapChartData
    };
  }
});
</script>

<style lang="less" scoped>
.bottom_row {
  margin-top: 20px;
}
</style>
