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
      field: 'name',
      type: 'input',
      label: '角色名稱',
      placeholder: '請輸入角色名稱查詢'
    },
    {
      field: 'intro',
      type: 'input',
      label: '權限名稱',
      placeholder: '請輸入權限名稱查詢'
    }
    // {
    //   field: 'createTime',
    //   type: 'datepicker',
    //   label: '創建時間',
    //   otherOptions: {
    //     type: 'daterange',
    //     startPlaceholder: '開始日期',
    //     endPlaceholder: '結束日期'
    //   }
    // }
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
