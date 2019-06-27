import {Component, OnInit} from '@angular/core';
import {AuthServices} from './auth.services';
import {ApiServices} from './api.services';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./app.component.css'],
    // template: '',
})


export class PlayComponent implements OnInit {

    quizzes;

    constructor(private api: ApiServices) {
    }

    ngOnInit() {
        this.api.GetAllQuizzes().subscribe(res => {
            this.quizzes = res;
        });
    }

}
