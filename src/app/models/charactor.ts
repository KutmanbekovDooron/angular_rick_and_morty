import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ICharacter {
  info: Info;
  results: Result[];
}

interface Info {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export type statusType = 'Alive' | 'Dead' | 'Unknown' | 'status';
export type genderType =
  | 'Female'
  | 'Male'
  | 'Genderless'
  | 'Unknown'
  | 'gender';

export interface Result {
  id: number;
  name: string;
  status: statusType;
  species: string;
  type: string;
  gender: genderType;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
@Injectable({
  providedIn: 'root',
})
export class FilterDialogService {
  isVisivle$ = new BehaviorSubject<boolean>(false);

  close() {
    this.isVisivle$.next(false);
  }

  open() {
    this.isVisivle$.next(true);
  }

  toggle() {
    this.isVisivle$.next(!this.isVisivle$.getValue());
  }
}
