import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/Car';
import { ApiService } from '../../services/api.service';
import { Brand } from '../../models/Brand';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {


    fragment;


    brands: Brand[] = [];


    cars: Car[] = [];




    constructor(private apiService: ApiService, private router: ActivatedRoute) 
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


    getIdToScrollSite()
    {
        this.router.fragment.subscribe(fragment => {
            this.fragment = fragment;
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
        this.getIdToScrollSite();
        this.getBrands();

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
