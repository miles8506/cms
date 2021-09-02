import { loginType } from './login/type';

interface IrootStore {
  name: string;
}

interface IrootStoreWithModule {
  loginModule: loginType;
}

type IrootStoreMain = IrootStore & IrootStoreWithModule;

export { IrootStore, IrootStoreMain };
