import { ICharacter } from './../../models/charactor';
import {
  FilterDialogService,
  Result,
  genderType,
  statusType,
} from 'src/app/models/charactor';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  charactor: ICharacter = {
    info: {
      count: 0,
      pages: 0,
    },
    results: [],
  };
  loading = true;
  errorMessage = '';

  statusValue: statusType = 'status';
  genderValue: genderType = 'gender';
  speciesValue: string = '';
  searchValue: string = '';

  constructor(
    private requestService: RequestService,
    public filterDialogService: FilterDialogService
  ) {}

  hundleSerch(event: any) {
    this.searchValue = event.target.value;
    this.getData();
  }

  getData(nextUrl?: string) {
    this.loading = true;
    this.errorMessage = '';

    this.requestService
      .getAll(
        this.searchValue,
        this.statusValue,
        this.genderValue,
        this.speciesValue,
        nextUrl
      )
      .pipe(catchError(this.errorHandler))
      .subscribe((character) => {
        if (typeof character == 'string') {
          this.errorMessage += character;
          this.charactor = {
            info: {
              count: 0,
              pages: 0,
            },
            results: [],
          };
        } else {
          if (nextUrl != undefined) {
            this.charactor.info = character.info;
            this.charactor.results = this.charactor.results.concat(
              character.results
            );
          } else {
            this.charactor = character;
          }
        }
        this.loading = false;
      });
  }

  ngOnInit(): void {
    this.getData();
  }

  errorHandler = (error: HttpErrorResponse) => {
    return error.error.error as string;
  };

  onChnage(event: string | statusType | genderType) {
    if (
      event == 'Alive' ||
      event == 'Dead' ||
      event == 'Unknown' ||
      event == 'status'
    ) {
      this.statusValue = event;
    } else if (
      event == 'Female' ||
      event == 'Male' ||
      event == 'Genderless' ||
      event == 'Unknown' ||
      event == 'gender'
    ) {
      this.genderValue = event;
    } else {
      this.speciesValue = event;
    }
    this.getData();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (this.isScrolledToBottom()) {
      this.loadMoreContent();
    }
  }

  private isScrolledToBottom(): boolean {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    return scrollTop + windowHeight >= scrollHeight;
  }

  private loadMoreContent(): void {
    if (this.charactor.info.next) {
      this.getData(this.charactor.info.next);
    }
  }
}
