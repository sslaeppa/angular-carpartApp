import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from 'app/app-routing,module';
import {AboutComponent} from 'app/about.component';
import {SharedModule} from "./shared/shared.module";
import {CarPartModule} from "./car-part/car-part.module";
import {RacesModule} from "./races/races.module";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CarPartModule,
    RacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
