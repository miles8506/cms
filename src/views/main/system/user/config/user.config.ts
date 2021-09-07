import { IformType } from '@/base-ui/searchForm';

interface IsearchFormConfig {
  formData: IformType[];
  itemStyle?: any;
  labelWidth?: string;
  colConfig?: any;
}

const searchFormConfig: IsearchFormConfig = {
  formData: [
    {
      type: 'input',
      label: '帳號',
      placeholder: '請輸入查詢帳號'
    },
    {
      type: 'password',
      label: '密碼',
      placeholder: '請輸入查詢密碼'
    },
    {
      type: 'select',
      label: '嗜好',
      placeholder: '請選擇嗜好',
      options: [
        {
          label: '籃球',
          value: 'baseketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ]
    },
    {
      type: 'datepicker',
      label: '日期',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '開始日期',
        endPlaceholder: '結束日期'
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