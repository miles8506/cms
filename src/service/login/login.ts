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

export function userMenuApiFn(id: number) {
  return ApiRequest.get<IDataType>({
    url: 'role/' + id + '/menu',
    showLoadingStatus: false
  });
}

export function userInfoFn(id: number) {
  return ApiRequest.get<IDataType>({
    url: 'users/' + id,
    showLoadingStatus: false
  });
}
