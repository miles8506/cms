const tablePageConfig = {
  tableProps: [
    {
      prop: 'name',
      label: '用戶名',
      align: 'center'
    },
    {
      prop: 'realname',
      label: '真實姓名',
      align: 'center'
    },
    {
      prop: 'cellphone',
      label: '手機號碼',
      align: 'center'
    },
    {
      prop: 'enable',
      label: '狀態',
      align: 'center',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '創建時間',
      align: 'center',
      slotName: 'firstTime'
    },
    {
      prop: 'updateAt',
      label: '更新時間',
      align: 'center',
      slotName: 'lastTime'
    },
    {
      prop: 'handle',
      label: '操作',
      align: 'center',
      slotName: 'control'
    }
  ],
  headerTitle: '用戶列表',
  showIndexColumn: true,
  showSelectColumn: true
};

export { tablePageConfig };
