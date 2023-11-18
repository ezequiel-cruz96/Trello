import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [AppComponent, CardlistComponent, CardComponent, NavbarComponent, CompanyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    ButtonModule,
    DragDropModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
