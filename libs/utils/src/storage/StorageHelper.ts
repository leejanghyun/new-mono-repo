export const enum StorageType {
  SESSION = "sessionStorage",
  LOCAL = "localStorage",
}

export default class StorageHelper {
  public getItem(
    key: string,
    storageType: StorageType = StorageType.LOCAL
  ): object | undefined {
    const targetStorage =
      storageType === StorageType.SESSION ? sessionStorage : localStorage;
    const storedData = targetStorage.getItem(key);

    if (storedData !== null) {
      return JSON.parse(storedData);
    }

    return undefined;
  }

  public setItem(
    key: string,
    userData: any,
    storageType: StorageType = StorageType.LOCAL
  ): void {
    const targetStorage =
      storageType === StorageType.SESSION ? sessionStorage : localStorage;

    try {
      targetStorage.setItem(key, JSON.stringify(userData));
    } catch (error) {
      throw new Error("데이터 저장에 실패하였습니다.");
    }
  }

  public removeItem(key: string, storageType: StorageType): void {
    const targetStorage =
      storageType === StorageType.SESSION ? sessionStorage : localStorage;

    targetStorage.removeItem(key);
  }
}
