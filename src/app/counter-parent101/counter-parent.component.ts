import { Component, OnInit, ViewChild } from '@angular/core';
import {CounterComponent} from '../counter101/counter.component'
@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.scss']
})
export class CounterParentComponent implements OnInit {
  // childCounterComponent:any;
 @ViewChild(CounterComponent) childCounterComponent! :CounterComponent;
 
 increage(){
  this.childCounterComponent.IncreageByOne();
 }
 decreage(){
  this.childCounterComponent.decreageByOne();
 }
constructor(){}

ngOnInit(): void {
  
}

}
