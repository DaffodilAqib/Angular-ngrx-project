import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { changeChannelName, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.css']
})
export class CustomIncrementComponent implements OnInit {

  channelName: string | undefined;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(res=>{
      console.log("channel Name is display")
      this.channelName = res;
    })
  }
  onAdd(data: any){
    console.log(data);
    this.store.dispatch(customIncrement({value: +data}));
  }

  onchangedChannelName(){
    this.store.dispatch(changeChannelName());
  }
}
