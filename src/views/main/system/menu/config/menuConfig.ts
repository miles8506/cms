const tablePageConfig = {
  tableProps: [
    {
      prop: 'name',
      label: '菜單名稱',
      align: 'center'
    },
    {
      prop: 'type',
      label: '類型',
      align: 'center'
    },
    {
      prop: 'url',
      label: '菜單url',
      align: 'center'
    },
    {
      prop: 'icon',
      label: '菜單icon',
      align: 'center'
    },
    {
      prop: 'permission',
      label: '按鈕權限',
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
  headerTitle: '菜單列表',
  showIndexColumn: false,
  showSelectColumn: false,
  isShowPagination: false,
  propSelectChild: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  }
};

export { tablePageConfig };
