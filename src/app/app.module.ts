import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { SIncludeComponent } from './s-include/s-include.component';
import { S2IncludeComponent } from './s2-include/s2-include.component';
import { S3IncludeComponent } from './s3-include/s3-include.component';
import { S4IncludeComponent } from './s4-include/s4-include.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './views/home/home.component';


// Http Client
import { HttpClientModule } from '@angular/common/http';

// Form
import { ReactiveFormsModule } from '@angular/forms';
import { CarsComponent } from './views/cars/cars.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    SIncludeComponent,
    S2IncludeComponent,
    S3IncludeComponent,
    S4IncludeComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
