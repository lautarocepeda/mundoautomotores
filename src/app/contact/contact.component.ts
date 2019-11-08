import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;
    contact: any;

    constructor(private cf: FormBuilder) { }

    ngOnInit() 
    {

        this.contactForm = this.cf.group(
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
        this.contact = this.saveCotizar();
    }


    saveCotizar() {

        const saveContact = 
        {
            name: this.contactForm.get('name').value,
            email: this.contactForm.get('emaiol').value,
            phone: this.contactForm.get('phone').value,
            message: this.contactForm.get('message').value
        };


        return saveContact;

    }


}
