import type { loginType } from './login/type';
import type { IsystemType } from './main/system/type';

interface IrootStore {
  offset: number;
  size: number;
  entireDepartment: any[];
  entireRole: any[];
}

interface IrootStoreWithModule {
  loginModule: loginType;
  system: IsystemType;
}

type IrootStoreMain = IrootStore & IrootStoreWithModule;

export { IrootStore, IrootStoreMain };
