import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { ApiService } from '../services/api.service';
import { Brand } from '../models/Brand';

@Component({
    selector: 'app-s2-include',
    templateUrl: './s2-include.component.html',
    styleUrls: ['./s2-include.component.css']
})
export class S2IncludeComponent implements OnInit {


    brands: Brand[] = [];


    cars: Car[] = [];




    constructor(private apiService: ApiService) 
    {
        this.getCarsByBrand('renault');

        
    }



    getCarsByBrand(brand) 
    {
        this.apiService.getCarsByBrand(brand).subscribe(response => 
            {
            for (const key in response) {
                this.cars.push(response[key]);
            }
        });
    }



    getBrands() 
	{
		this.apiService.getBrands().subscribe(response => {
            this.brands.push(response);
            
            console.log(response);
		})
	}




    ngOnInit() 
    {

        this.getBrands();

    }

}
