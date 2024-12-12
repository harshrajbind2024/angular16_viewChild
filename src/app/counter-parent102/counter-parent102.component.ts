import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-counter-parent102',
  templateUrl: './counter-parent102.component.html',
  styleUrls: ['./counter-parent102.component.scss']
})
export class CounterParent102Component implements OnInit {
  @ViewChild(ChangecolorDirective) vChangecolorDirective!:ChangecolorDirective;
  changeColor(color:string){
    this.vChangecolorDirective.change1('color')
  }
  constructor(){}
  

  ngOnInit(): void {
    
  }


}
