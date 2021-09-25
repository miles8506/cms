import { IformType } from '@/base-ui/searchForm';

interface IsearchFormConfig {
  formData: IformType[];
  itemStyle?: any;
  labelWidth?: string;
  colConfig?: any;
  windowTitle: string;
}

const windowFormConfig: IsearchFormConfig = {
  windowTitle: '新建用戶',
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
      placeholder: '請輸入密碼',
      isHide: true
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '電話號碼',
      placeholder: '請輸入電話號碼'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '選擇部門',
      placeholder: '請選擇部門',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '選擇角色',
      placeholder: '請選擇角色',
      options: []
    }
  ],
  itemStyle: {},
  labelWidth: '80px',
  colConfig: {
    span: 24
  }
};

export { windowFormConfig };
