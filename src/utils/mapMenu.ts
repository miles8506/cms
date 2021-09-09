import { RouteRecordRaw } from 'vue-router';
import type { Ibreadcrumb } from '@/base-ui/breadcrumb/type/type';

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
export function mapToPath(
  userMenus: any,
  currentIndex: string,
  breadcrumbArr?: Ibreadcrumb[]
) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const res: any[] = mapToPath(menu.children ?? [], currentIndex);
      const findRes = res.find((item) => item.url === currentIndex);
      if (findRes) {
        breadcrumbArr?.push({ name: menu.name });
        breadcrumbArr?.push({ name: findRes.name });
        if (breadcrumbArr) return breadcrumbArr;
        return findRes.id + '';
      }
    } else if (menu.type === 2) {
      return userMenus;
    }
  }
}

// 麵包屑
export function mapBreadcrump(
  userMenus: any,
  currentPath: string,
  breadcrumbArr: Ibreadcrumb[]
) {
  // for (const menu of userMenus) {
  //   if (menu.type === 1) {
  //     const res = mapBreadcrump(menu.children, currentPath, breadcrumbArr);
  //     const resFind = res.find((item: any) => item.url === currentPath);
  //     if (resFind) {
  //       breadcrumbArr?.push({ name: menu.name });
  //       breadcrumbArr?.push({ name: resFind.name });
  //       return breadcrumbArr;
  //     }
  //   } else if (menu.type === 2) {
  //     return userMenus;
  //   }
  // }

  return mapToPath(userMenus, currentPath, breadcrumbArr);
}
