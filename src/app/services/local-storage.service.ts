import { Injectable } from '@angular/core';

const LIST_KEY = 'LIST_KEY';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  private setItem(list: Array<number>): void {
    localStorage.setItem(LIST_KEY, JSON.stringify(list));
  }

  getItems(): Array<number> {
    var listIds = JSON.parse(localStorage.getItem(LIST_KEY) ?? '[]');
    return listIds;
  }

  addItem(value: number) {
    console.log('list', value);
    var list = this.getItems();
    list.push(value);
    this.setItem(list);
  }

  removeItem(value: number): void {
    var list = this.getItems();
    let index = list.indexOf(value);
    list.splice(index, 1);
    this.setItem(list);
  }

  isSave(value: number) {
    var list = this.getItems();
    const found = list.find((element) => element == value);

    return found != undefined ? true : false;
  }

  clear(): void {
    localStorage.clear();
  }
}
