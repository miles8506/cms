import { ref } from 'vue';
import TablePage from '@/components/tablePage';

export function searchPageControl() {
  const tablePageRef = ref<InstanceType<typeof TablePage>>();

  // 搜尋
  const searchQuery = (searchData: any) => {
    console.log(searchData.value);

    tablePageRef.value?.getPageAciton(searchData);
  };

  // 重置
  const resetQuery = () => {
    tablePageRef.value?.getPageAciton();
  };

  return {
    tablePageRef,
    searchQuery,
    resetQuery
  };
}
