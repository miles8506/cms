// requestApi
import { ApiRequest } from '@/service/';

//type
import type { IaccountInfo, IloginData, IDataType } from './type';

export function loginApiFn(loginInfo: IaccountInfo) {
  return ApiRequest.post<IDataType<IloginData>>({
    url: 'login',
    data: loginInfo,
    showLoadingStatus: false
  });
}
