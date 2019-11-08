import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

    cotizarForm: FormGroup;
    cotizar: any;

    constructor(private cf: FormBuilder) { }

    ngOnInit() 
    {

        this.cotizarForm = this.cf.group(
            {
                name: ['', Validators.required],
                email: ['', ],
                phone: ['', Validators.required],
                message: ['', ]
            }
        )


    }


    onSubmit()
    {
        this.cotizar = this.saveCotizar();
    }


    saveCotizar()
    {
        const saveCotizar = 
        {
            name: this.cotizarForm.get('name').value,
            email: this.cotizarForm.get('email').value,
            phone: this.cotizarForm.get('phone').value,
            message: this.cotizarForm.get('message').value
        };


        return saveCotizar;

    }
}
