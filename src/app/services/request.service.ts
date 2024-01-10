import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, timeout } from 'rxjs';
import { ICharacter, Result } from '../models/charactor';

const base_api = 'https://rickandmortyapi.com/api/character';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private httpClient: HttpClient) {}

  getAll(name: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${base_api}/?name=${name}`);
  }

  getAllSaved(list: number[]): Observable<Result[]> {
    let api = `${base_api}/`;

    list.forEach((id) => {
      api += `${id},`;
    });
    return this.httpClient.get<Result[]>(api);
  }
}
