import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterDialogService {
  isVisivle$ = new BehaviorSubject<boolean>(true);

  toggle() {
    this.isVisivle$.next(!this.isVisivle$.getValue());
  }
}
