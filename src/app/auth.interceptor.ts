import {Component, Injectable} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';

// import { Subject } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(req, next) {
        console.log(req);

        const token = localStorage.getItem('token');
        const authrequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(authrequest);
    }
}
