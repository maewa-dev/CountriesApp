import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  constructor() { }

  @Output() onEnter: EventEmitter <string> = new EventEmitter;
  @Output() onDebounce: EventEmitter <string> = new EventEmitter;
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe( value => {
      this.onDebounce.emit(value)
    });
  }

  searched: string = '';

  search() {
    this.onEnter.emit(this.searched);
  }

  pressKey() {
    this.debouncer.next( this.searched)
  }

}
