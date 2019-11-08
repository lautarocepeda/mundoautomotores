import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../models/Car';
import { Brand } from '../models/Brand';

@Injectable({
    providedIn: 'root'
})
export class ApiService {


    localUrl = 'http://localhost/Mundo%20Invertir/api/cars.php';
    emailUrl = '';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
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

        return this.http.post(this.emailUrl, newform, this.httpOptions);

        // enviar el fomrulario al php y recibir la respuesta para mostrar con un Toast al usuario y se termina el cotizar y contact form.


    }



}
