import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/charactor';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() product: Result;

  constructor(private localStorageService: LocalStorageService) {}

  onSave() {
    this.localStorageService.addItem(this.product.id);
  }

  unSave() {
    this.localStorageService.removeItem(this.product.id);
  }

  isSave(): boolean {
    return this.localStorageService.isSave(this.product.id);
  }

  getStatus() {
    let color;

    if (this.product.status == 'Alive') {
      color = 'status_green';
    } else if (this.product.status == 'Dead') {
      color = 'status_red';
    } else {
      color = 'status_gray';
    }

    return color;
  }
}
