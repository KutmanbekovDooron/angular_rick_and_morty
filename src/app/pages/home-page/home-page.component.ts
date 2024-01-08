import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.getAll().subscribe((character) => {
      this.charactor = character;
      this.loading = false;
    });
  }
}
