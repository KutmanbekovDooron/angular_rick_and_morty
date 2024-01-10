import { RequestService } from 'src/app/services/request.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Result } from 'src/app/models/charactor';

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.scss'],
})
export class SavePageComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private requestService: RequestService
  ) {}

  loading = true;
  errorMessage = '';
  character?: Result[];

  ngOnInit(): void {
    var list = this.localStorageService.getItems();
    this.requestService
      .getAllSaved(list)
      .pipe(catchError(this.errorHandler))
      .subscribe((character) => {
        if (typeof character == 'string') {
          this.errorMessage += character;
        } else {
          this.character = character;
        }
        this.loading = false;
      });
  }

  errorHandler = (error: HttpErrorResponse) => {
    return error.error.error as string;
  };
}
