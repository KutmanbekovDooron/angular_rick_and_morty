import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  tap,
} from 'rxjs';

@Directive({
  selector: '[appDebounse]',
})
export class DebounseDirective {
  @Output()
  public onEvent: EventEmitter<any>;

  protected emitEvent$: Subject<any>;
  protected subscription$: Subject<void>;

  constructor() {
    this.onEvent = new EventEmitter<any>();
    this.emitEvent$ = new Subject<any>();
    this.subscription$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.emitEvent$
      .pipe(
        takeUntil(this.subscription$),
        debounceTime(800),
        distinctUntilChanged(),
        tap((value) => this.emitChange(value))
      )
      .subscribe();
  }

  public emitChange(value: any): void {
    this.onEvent.emit(value);
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  @HostListener('keyup', ['$event'])
  public onKeyUp(event: any): void {
    event.preventDefault();
    this.emitEvent$.next(event);
  }
}
