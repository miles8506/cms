import { IformType } from '@/base-ui/searchForm';

interface IsearchFormConfig {
  formData: IformType[];
  itemStyle?: any;
  labelWidth?: string;
  colConfig?: any;
}

// interface IsearchDataType {
//   account?: string;
//   psw?: string;
//   habit?: string;
//   dateRange?: any[];
// }

const windowFormConfig: IsearchFormConfig = {
  formData: [
    {
      field: 'name',
      type: 'input',
      label: '用戶名',
      placeholder: '請輸入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真實姓名',
      placeholder: '請輸入真實姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密碼',
      placeholder: '請輸入密碼'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '電話號碼',
      placeholder: '請輸入電話號碼'
    }
  ],
  itemStyle: {},
  labelWidth: '80px',
  colConfig: {
    span: 24
  }
};

export { windowFormConfig };
