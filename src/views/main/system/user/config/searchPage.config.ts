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

const searchFormConfig: IsearchFormConfig = {
  formData: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '請輸入id查詢'
    },
    {
      field: 'name',
      type: 'input',
      label: '用戶名',
      placeholder: '請輸入用戶名查詢'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真實姓名',
      placeholder: '請輸入密碼查詢'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '電話號碼',
      placeholder: '請輸入電話號碼'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用戶狀態',
      placeholder: '請選擇用戶狀態',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '創建時間',
      otherOptions: {
        startPlaceholder: '開始時間',
        endPlaceholder: '結束時間',
        type: 'daterange'
      }
    }
  ],
  itemStyle: {
    padding: '10px 40px'
  },
  labelWidth: '120px',
  colConfig: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
};

export { searchFormConfig };
