import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<String>();

  constructor(private productServer: ProductService) {}

  handle(message: string) {
    this.error$.next(message);
  }

  replay() {
    this.error$.next('');
    this.productServer.getAll();
  }
}
