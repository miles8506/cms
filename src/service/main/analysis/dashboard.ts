import { ApiRequest } from '../../index';

enum dashboradUrl {
  GoodsCountUrl = '/goods/category/count',
  GoodsSaleUrl = '/goods/category/sale',
  GoodsFavorUrl = '/goods/category/favor',
  AddressGoodsUrl = '/goods/address/sale'
}

export function GoodsCountApi() {
  return ApiRequest.get({
    url: dashboradUrl.GoodsCountUrl
  });
}

export function GoodsSaleApi() {
  return ApiRequest.get({
    url: dashboradUrl.GoodsSaleUrl
  });
}

export function GoodsFavorApi() {
  return ApiRequest.get({
    url: dashboradUrl.GoodsFavorUrl
  });
}

export function AddressGoodsApi() {
  return ApiRequest.get({
    url: dashboradUrl.AddressGoodsUrl
  });
}
