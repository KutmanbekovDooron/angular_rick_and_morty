import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, timeout } from 'rxjs';
import { ICharacter } from '../models/charactor';
import { ErrorService } from './error.service';

const base_api = 'https://rickandmortyapi.com/api/character';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  getAll(): Observable<ICharacter> {
    return this.httpClient
      .get<ICharacter>(base_api)
      .pipe(catchError(this.errorHandler), timeout(2000));
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
