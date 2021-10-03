import type { loginType } from './login/type';
import type { IsystemType } from './main/system/type';
import type { IdashboardState } from './main/analysis/dashboard/type';

interface IrootStore {
  offset: number;
  size: number;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}

interface IrootStoreWithModule {
  loginModule: loginType;
  system: IsystemType;
  dashboardModule: IdashboardState;
}

type IrootStoreMain = IrootStore & IrootStoreWithModule;

export { IrootStore, IrootStoreMain };
