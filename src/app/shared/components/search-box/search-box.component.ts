import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: 'search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>(); //Subject es un observable de rxjs

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
      this.debouncer
      .pipe(
        debounceTime(500) // Esto hace que continue solo si pasa 0.5 seg
      )
      .subscribe( value =>{
        this.onDebounce.emit(value);
      })
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress( searchTerm: string): void {
    this.debouncer.next(searchTerm);}
}
