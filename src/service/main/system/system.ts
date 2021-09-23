import { ApiRequest } from '@/service';

// type
import type { IDataType } from './type';

export function requestSystemPage(data: any) {
  return ApiRequest.post<IDataType>({
    url: data.url,
    data: data.queryInfo
  });
}

// delete
export function deleteTableItem(url: any) {
  return ApiRequest.delete<IDataType>({
    url: url
  });
}
