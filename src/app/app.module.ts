import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgrxRxjsComponent} from './ngrx-rxjs/ngrx-rxjs.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {mainReducer} from "./state/main.reducer";
import {MainEffects} from "./state/main.effects";

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    HomeComponent,
    NgrxRxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({dataState: mainReducer}),
    EffectsModule.forRoot([MainEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
