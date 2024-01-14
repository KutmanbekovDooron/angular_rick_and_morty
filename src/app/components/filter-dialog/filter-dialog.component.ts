import { FilterDialogService } from 'src/app/models/charactor';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { genderType, statusType } from 'src/app/models/charactor';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
})
export class FilterDialogComponent {
  @Input() statusValue: statusType;
  @Input() genderValue: genderType;
  @Input() speciesValue: string;

  @Output() status = new EventEmitter<statusType>();
  @Output() gender = new EventEmitter<genderType>();
  @Output() species = new EventEmitter<string>();

  constructor(public filterDialogService: FilterDialogService) {}
}
