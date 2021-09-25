import { ref } from 'vue';
import WindowPage from '@/components/windowPage';

type createCbFn = () => void;
type editCbFn = () => void;

export function windowPageControl(
  createCallBackFn?: createCbFn,
  editCallBackFn?: editCbFn
) {
  const windowPageRef = ref<InstanceType<typeof WindowPage>>();
  const defaultWindowData = ref({});

  const addWindowStatus = () => {
    defaultWindowData.value = {};
    if (windowPageRef.value) {
      windowPageRef.value.DialogVisible = true;
    }
    createCallBackFn && createCallBackFn();
  };

  const editWindowStatus = (item: any) => {
    defaultWindowData.value = item;
    if (windowPageRef.value) {
      windowPageRef.value.DialogVisible = true;
    }
    editCallBackFn && editCallBackFn();
  };

  return {
    windowPageRef,
    defaultWindowData,
    addWindowStatus,
    editWindowStatus
  };
}
