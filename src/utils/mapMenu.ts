import { RouteRecordRaw } from 'vue-router';

// user menu動態獲取
export function mapMenu(userMenu: any[]): RouteRecordRaw[] {
  // 先聲明一個空陣列，主要利用該陣列來return
  const router: RouteRecordRaw[] = [];

  // 將router>main資料夾底下的export路徑獲取出來，並放入allPath該陣列當中
  const allRouter: RouteRecordRaw[] = [];
  const allPath = require.context('../router/main/', true, /\.ts/);
  allPath.keys().forEach((key) => {
    const route = require('@/router/main' + key.replace('.', ''));
    allRouter.push(route.default);
  });

  // 使用遞歸的方式將menu.type為2時，再與存入loacl中的user_menu的url來做比對
  function recursionRoute(userMenu: any[]) {
    for (const menu of userMenu) {
      if (menu.type === 2) {
        const res = allRouter.find((item) => item.path === menu.url);
        if (res) router.push(res);
      } else {
        recursionRoute(menu.children);
      }
    }
  }

  recursionRoute(userMenu);
  return router;
}

// refresh時，記住index
export function mapToPath(userMenus: any, currentIndex: string) {
  for (const menu of userMenus) {
    if (menu.type == 1) {
      const res: any[] = mapToPath(menu.children ?? [], currentIndex);
      const findRes = res.find((item) => item.url === currentIndex);
      if (findRes) return findRes.id + '';
    } else if (menu.type == 2) {
      return userMenus;
    }
  }
}
