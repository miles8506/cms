import { useStore } from '@/store';
export function permissionControl(pathName: string, control: string) {
  const store = useStore();
  const permission = store.state.loginModule.userPermission;
  const verifyPermission = `system:${pathName}:${control}`;
  return !!permission.find((item) => item === verifyPermission);
}
