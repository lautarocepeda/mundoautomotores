import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {


    @ViewChild('notification', { static: false }) alertNotification: ElementRef;


    cotizarForm: FormGroup;
    cotizar: any;

    constructor(private cf: FormBuilder, private apiService: ApiService) { }
    

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

        this.sendMail(this.cotizar);
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


}
