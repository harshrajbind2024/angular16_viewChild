import { Directive, ElementRef,AfterViewInit, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements OnInit, AfterViewInit {

  constructor(private elref:ElementRef) { }
  ngAfterViewInit(): void {
    this.elref.nativeElement.style.color='red';
  }
  change1(changeColor:string){
    this.elref.nativeElement.stryle.color=changeColor;
  }


  ngOnInit(): void {
    
  }
}
