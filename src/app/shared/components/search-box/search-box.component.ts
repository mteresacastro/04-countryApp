import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: 'search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>(); //Subject es un observable de rxjs
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
      this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500) // Esto hace que continue solo si pasa 0.5 seg
      )
      .subscribe( value =>{
        this.onDebounce.emit(value);
      })
  }

  ngOnDestroy(): void {
    //Destruye el componente cuando sale de el.
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress( searchTerm: string): void {
    this.debouncer.next(searchTerm);}

}
