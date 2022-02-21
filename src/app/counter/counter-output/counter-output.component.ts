import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter$ = new Observable<{counter: number}>();
  counter: number | undefined;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(res=>{
    //   this.counter = res.counter;
    
    // })
    this.store.select(getCounter)
    .subscribe(res=>{
      this.counter = res;
    });
  }

}
