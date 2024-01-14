import {
  FilterDialogService,
  genderType,
  statusType,
} from 'src/app/models/charactor';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ICharacter } from 'src/app/models/charactor';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  charactor: ICharacter;
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

  getData() {
    this.loading = true;
    this.errorMessage = '';

    this.requestService
      .getAll(
        this.searchValue,
        this.statusValue,
        this.genderValue,
        this.speciesValue
      )
      .pipe(catchError(this.errorHandler))
      .subscribe((character) => {
        if (typeof character == 'string') {
          this.errorMessage += character;
        } else {
          this.charactor = character;
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
}
