import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CustomIncrementComponent } from '../custom-increment/custom-increment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/counter.reducer';
import { COUNTER_STATE_NAME } from '../state/counter.selector';


@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomIncrementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    CounterRoutingModule,
    StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer)
  ]
})
export class CounterModule { }
