class localCacheClass {
  setLocalAccount(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalAccount(key: string) {
    const data = window.localStorage.getItem(key);
    if (data) return JSON.parse(data);
  }
  removeLocalAccount(key: string) {
    window.localStorage.removeItem(key);
  }
  clearLocalAccount() {
    window.localStorage.clear();
  }
}

const localCache = new localCacheClass();

export { localCache };
