import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/charactor';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() product: Result;
}
