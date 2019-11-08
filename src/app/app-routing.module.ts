import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarsComponent } from './views/cars/cars.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars/:brand', component: CarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
