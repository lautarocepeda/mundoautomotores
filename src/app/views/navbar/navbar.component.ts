import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Brand } from '../../models/Brand';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	brands: Brand[] = [];


	socialLink = {
		facebook: 'https://www.facebook.com/mundoviviendaoficial/',
		whatsapp: 'https://wa.me/5492616655070?text=Hola, me gustaría recibir información sobre los planes!'
	}


	constructor(private apiService: ApiService) {}



	getBrands() 
	{
		this.apiService.getBrands().subscribe(response => {
			this.brands.push(response);
		})
	}


	
	ngOnInit() 
	{
		
		this.getBrands();

	}

}
