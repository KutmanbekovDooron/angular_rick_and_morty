import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<String>();

  constructor() {}

  handle(message: string) {
    console.log(message);
    this.error$.next(message);
  }

  replay() {
    this.error$.next('');
  }
}
