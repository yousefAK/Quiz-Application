import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';

@Injectable()
export class AuthServices {

    constructor(private http: HttpClient, private router: Router) {

    }

    get IsAuthenticated() {
        // here we will get the token not true or false if the token is found or not
        // return localStorage.getItem('token');

        // by adding ! it will give us true if it is not exist
        // by adding another ! it will give us true if it is exits
        return !!localStorage.getItem('token');
    }

    register(credentials) {
        return this.http.post<any>('http://localhost:60623/api/Account', credentials).subscribe(res => {
            // localStorage.setItem('token', res);
            this.authenticate(res);
        });
    }

    login(credentials) {
        return this.http.post<any>('http://localhost:60623/api/Account/login', credentials).subscribe(res => {
            // localStorage.setItem('token', res);
            this.authenticate(res);
        });
    }

    authenticate(res) {
        localStorage.setItem('token', res);
        this.router.navigate(['/']);
    }

    logout() {
        localStorage.removeItem('token');
    }
}
