export class ApiToken {

  public static setData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public static removeData(key: string): void {
    localStorage.removeItem(key);
  }

}
