import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresListComponent } from './components/store-list/store-list.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
@NgModule({
  declarations: [
    AppComponent,
    StoresListComponent,
    AddStoreComponent,
    StoreDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
