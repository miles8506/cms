const tablePageConfig = {
  tableProps: [
    {
      prop: 'id',
      label: 'id',
      align: 'center'
    },
    {
      prop: 'name',
      label: '名稱',
      align: 'center'
    },
    {
      prop: 'intro',
      label: '管理權限',
      align: 'center'
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
  headerTitle: '角色管理',
  showIndexColumn: true,
  showSelectColumn: true
};

export { tablePageConfig };
