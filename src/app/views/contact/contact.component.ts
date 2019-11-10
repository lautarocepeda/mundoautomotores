import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';


declare var jQuery: any;


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


    @ViewChild('notification', {static: false}) alertNotification: ElementRef;


    contactForm: FormGroup;
    contact: any;




    constructor(private cf: FormBuilder, private apiService: ApiService) { }




    ngOnInit() 
    {

        this.contactForm = this.cf.group(
            {
                name: ['', Validators.required],
                email: '',
                phone: ['', Validators.required],
                message: ''
            }
        )

    }



    onSubmit() 
    {
        this.contact = this.saveContact();

        this.sendMail(this.contact);

    }



    sendMail(form)
    {
        this.apiService.sendEmail(form).subscribe( (response: any) => {
            this.showHtmlNotification(response.status, response.message);
        });
    }



    showHtmlNotification(status: number, message: string)
    {
        const element = this.alertNotification.nativeElement;


        switch(status)
        {
            case 200:
                element.className = "alert mt-3 alert-success";
                break;
            default:
                element.className = "alert mt-3 alert-danger";
                break;
        }

        element.innerHTML = message;
    }



    saveContact() 
    {

        const saveContact = 
        {
            name: this.contactForm.get('name').value,
            email: this.contactForm.get('email').value,
            phone: this.contactForm.get('phone').value,
            message: this.contactForm.get('message').value
        };

        return saveContact;

    }



}