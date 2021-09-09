import type { loginType } from './login/type';
import type { IsystemType } from './main/system/type';

interface IrootStore {
  name: string;
}

interface IrootStoreWithModule {
  loginModule: loginType;
  system: IsystemType;
}

type IrootStoreMain = IrootStore & IrootStoreWithModule;

export { IrootStore, IrootStoreMain };
