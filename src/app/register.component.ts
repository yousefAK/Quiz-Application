import {Component, OnInit} from '@angular/core';
import {ApiServices} from './api.services';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {FormBuilder} from '@angular/forms';
import {AuthServices} from './auth.services';

// This way for validation from angular website
/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//         const isSubmitted = form && form.submitted;
//         return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//     }
// }

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./app.component.css']
    // template: '',
})
export class RegisterComponent implements OnInit {

    // emailFormControl = new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    // ]);
    // matcher = new MyErrorStateMatcher();

    form;


    constructor(private auth: AuthServices, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

}
