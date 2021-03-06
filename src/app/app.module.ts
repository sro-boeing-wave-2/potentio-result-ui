import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatToolbarModule,MatTableModule} from '@angular/material';
import { ResultTableComponent } from './result-table/result-table.component';
import { OverallResultComponent } from './overall-result/overall-result.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultTableComponent,
    OverallResultComponent,
    StartComponent,
    ResultComponent

  ],
  imports: [
    CdkTableModule,
    CdkTreeModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
