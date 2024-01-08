import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/charactor';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() product: Result;

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
