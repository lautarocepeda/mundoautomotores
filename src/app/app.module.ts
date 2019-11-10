import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { IntroComponent } from './views/intro/intro.component';
import { BrandsComponent } from './views/brands/brands.component';
import { Benefits } from './views/benefits/benefits.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './views/footer/footer.component';
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
    BrandsComponent,
    Benefits,
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
