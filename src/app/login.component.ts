import {Component, OnInit} from '@angular/core';
import {ApiServices} from './api.services';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {FormBuilder} from '@angular/forms';
import {AuthServices} from './auth.services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./app.component.css'],
    // template: ''
})
export class LoginComponent implements OnInit {

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
