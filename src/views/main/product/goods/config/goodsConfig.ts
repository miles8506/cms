export const tablePageConfig = {
  tableProps: [
    {
      prop: 'name',
      label: '商品名稱',
      align: 'center'
    },
    {
      prop: 'oldPrice',
      label: '原價格',
      align: 'center'
    },
    {
      prop: 'newPrice',
      label: '新價格',
      align: 'center'
    },
    {
      prop: 'imgUrl',
      label: '商品圖片',
      slotName: 'goodsImg',
      align: 'center'
    },
    {
      prop: 'status',
      label: '狀態',
      slotName: 'status',
      align: 'center'
    },
    {
      prop: 'createAt',
      label: '創建時間',
      slotName: 'firstTime',
      align: 'center'
    },
    {
      prop: 'updateAt',
      label: '更新時間',
      slotName: 'lastTime',
      align: 'center'
    },
    {
      prop: 'handle',
      label: '操作',
      align: 'center',
      slotName: 'control'
    }
  ],
  headerTitle: '商品信息列表',
  showIndexColumn: true,
  showSelectColumn: true
};
