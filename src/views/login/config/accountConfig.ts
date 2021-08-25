// 帳號登入rules
export const rules_pc = {
  account: [
    {
      required: true,
      message: '帳號欄位是必填欄位',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '請輸入5~10碼英文或數字',
      tirgger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密碼欄位是必填欄位',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '請輸入5~10碼英文或數字',
      tirgger: 'blur'
    }
  ]
};

// 手機登入rules
export const rules_mb = {
  account: [
    {
      required: true,
      message: '手機號欄位是必填欄位',
      trigger: 'blur'
    },
    {
      pattern: /^09[0-9]{8}$/,
      message: '請輸入正確格式的手機號碼',
      tirgger: 'blur'
    }
  ],
  verify: [
    {
      required: true,
      message: '驗證碼位是必填欄位',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{4}$/,
      message: '請輸入4碼英文或數字',
      tirgger: 'blur'
    }
  ]
};
