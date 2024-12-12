import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter101/counter.component';
import { CounterParentComponent } from './counter-parent101/counter-parent.component';
import { Counter102Component } from './counter102/counter102.component';
import { CounterParent102Component } from './counter-parent102/counter-parent102.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterParentComponent,
    Counter102Component,
    CounterParent102Component,
    ChangecolorDirective,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
