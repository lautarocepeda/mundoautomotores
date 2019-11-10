import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Car } from 'src/app/models/Car';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


    // id to scroll website
    fragment: string;

    // brand router param
    brand;


    // cars by brand
    cars: Car[] = [];


    constructor(private apiService: ApiService, private router: ActivatedRoute) 
    {
    }


    // gets all data by brand
    getCars(brand: string) {
        this.apiService.getCarsByBrand(brand).subscribe(response => {

            this.cars.push(response);
        })
    }


    ngOnInit() 
    {

        this.getIdToScrollSite();


        this.brand = this.router.snapshot.params.brand;


        this.router.paramMap.subscribe(params => {
            
            // move website view to # in html
            this.ngAfterViewInit();

            this.cars = [];
            this.getCars(params.get('brand'));
        });

    }


    getIdToScrollSite()
    {
        this.router.fragment.subscribe(fragment => {
            this.fragment = fragment;
        });
    }


    
    ngAfterViewInit(): void 
    {
        try 
        {
            document.querySelector('#' + this.fragment).scrollIntoView();
        } 
        catch (e) 
        {

        }
    }




}
