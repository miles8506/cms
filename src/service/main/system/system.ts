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

// create
export function createPageItem(url: string, newData: any) {
  return ApiRequest.post<IDataType>({
    url: url,
    data: newData
  });
}

// edit
export function editPageItem(url: string, editData: any) {
  return ApiRequest.patch<IDataType>({
    url: url,
    data: editData
  });
}
