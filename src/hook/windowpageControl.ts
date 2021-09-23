import { ref } from 'vue';
import WindowPage from '@/components/windowPage';

export function windowPageControl() {
  const windowPageRef = ref<InstanceType<typeof WindowPage>>();
  const defaultWindowData = ref({});

  const addWindowStatus = () => {
    if (windowPageRef.value) {
      windowPageRef.value.DialogVisible = true;
    }
  };

  const editWindowStatus = (item: any) => {
    defaultWindowData.value = item;
    if (windowPageRef.value) {
      windowPageRef.value.DialogVisible = true;
    }
  };

  return {
    windowPageRef,
    defaultWindowData,
    addWindowStatus,
    editWindowStatus
  };
}
