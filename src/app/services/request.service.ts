import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter, Result } from '../models/charactor';

const base_api = 'https://rickandmortyapi.com/api/character';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private httpClient: HttpClient) {}

  getAll(
    name: string,
    status: string = '',
    gender: string = '',
    species: string = '',
    nextUrl?: string
  ): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(
      `${nextUrl == undefined ? base_api : nextUrl}`,
      {
        params: new HttpParams({
          fromObject: {
            name: name,
            status: status == 'status' ? '' : status,
            gender: gender == 'gender' ? '' : gender,
            species: species,
          },
        }),
      }
    );
  }

  getAllSaved(list: number[]): Observable<Result[]> {
    let api = `${base_api}/`;

    list.forEach((id) => {
      api += `${id},`;
    });
    return this.httpClient.get<Result[]>(api);
  }
}
