import { loginType } from './login/type';

interface IrootStore {
  name: string;
}

interface IrootStoreWithModule {
  login: loginType;
}

type IrootStoreMain = IrootStore & IrootStoreWithModule;

export { IrootStore, IrootStoreMain };
