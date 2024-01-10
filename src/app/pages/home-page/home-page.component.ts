import { LocalStorageService } from './../../services/local-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { ICharacter } from 'src/app/models/charactor';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  charactor?: ICharacter;
  loading = true;
  errorMessage = '';
  private searchText$ = new BehaviorSubject<string>('');

  searchValue = '';

  constructor(private requestService: RequestService) {}

  search(packageName: string) {
    this.searchText$.next(packageName);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.searchText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => {
          this.loading = true;
          this.errorMessage = '';
          this.charactor = undefined;
          return this.requestService
            .getAll(value)
            .pipe(catchError(this.errorHandler));
        })
      )
      .subscribe((character) => {
        if (typeof character == 'string') {
          this.errorMessage += character;
        } else {
          this.charactor = character;
        }
        this.loading = false;
      });
  }

  errorHandler = (error: HttpErrorResponse) => {
    return error.error.error as string;
  };
}
