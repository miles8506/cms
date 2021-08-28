interface IaccountInfo {
  account: string;
  password: string;
}

interface IloginData {
  id: number;
  name: string;
  token: string;
}

interface IDataType<T> {
  code: number;
  data: T;
}

export { IaccountInfo, IloginData, IDataType };
