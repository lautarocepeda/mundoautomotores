import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../models/Car';
import { Brand } from '../models/Brand';

@Injectable({
    providedIn: 'root'
})
export class ApiService {


    localUrl = 'https://www.mundoviviendamza.com/api/cars.php';
    emailUrl = 'https://www.mundoviviendamza.com/api/mail.php';


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    };


    constructor(private http: HttpClient) { }



    getCarsByBrand(brand): Observable<Car>
    {
        return this.http.get<Car>(this.localUrl + '?brand=' + brand);
    }

    


    getBrands(): Observable<Brand>
    {
        return this.http.get<Brand>(this.localUrl);
    }



    sendEmail(form: any)
    {
        const newform = JSON.stringify(form);

        console.log('Sending mail...');

        return this.http.post(this.emailUrl, newform);

    }



}
