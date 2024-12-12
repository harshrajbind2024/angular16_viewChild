import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit, AfterViewInit {
   @ViewChild('name') elName:ElementRef;
   @ViewChild('state') elState:ElementRef;

  constructor(){}
  ngOnInit(): void {
    
  }

}
