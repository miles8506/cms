import { IformType } from '@/base-ui/searchForm';

interface IsearchFormConfig {
  formData: IformType[];
  itemStyle?: any;
  labelWidth?: string;
  colConfig?: any;
  windowTitle: string;
}

const windowFormConfig: IsearchFormConfig = {
  windowTitle: '新建用戶權限',
  formData: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '請輸入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介紹',
      placeholder: '請輸入角色介紹'
    }
  ],
  itemStyle: {},
  labelWidth: '80px',
  colConfig: {
    span: 24
  }
};

export { windowFormConfig };
