import {Component} from '@angular/core';
import {AuthServices} from './auth.services';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-nav',
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: `
        <mat-toolbar>
            <button mat-stroked-button class="mybtnMargin" routerLink="/">My Quiz</button>
            <button mat-stroked-button color="primary" routerLink="/play">Play</button>
            <span style="flex: 1 1 auto;"></span>
            <button mat-stroked-button class="mybtnMargin" color="primary" *ngIf="!auth.IsAuthenticated" routerLink="/register">Register
            </button>
            <button mat-stroked-button color="primary" *ngIf="!auth.IsAuthenticated" routerLink="/login">Login</button>
            <button mat-stroked-button color="warn" *ngIf="auth.IsAuthenticated" (click)="auth.logout()">Logout</button>
        </mat-toolbar>
    `,
})


export class NavComponent {

    constructor(private auth: AuthServices) {
    }

}
