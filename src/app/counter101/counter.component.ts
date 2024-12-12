import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  
  massage:string="";
   count:number=0;

   constructor(){}

  //  this both methode access in parent-- IncreageByOne and decreageByOne  
   IncreageByOne(){
    this.count=this.count+1;
    this.massage=" this.count:"+this.count;
   }
   decreageByOne(){
    this.count=this.count-1;
    this.massage=" this.count:"+this.count;
   }
  ngOnInit(): void {
    
  }

}
