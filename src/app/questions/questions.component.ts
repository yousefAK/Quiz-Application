import {Component, OnInit} from '@angular/core';
import {ApiServices} from '../api.services';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['../app.component.css']
})
export class QuestionsComponent implements OnInit {

    questions;

    constructor(private api: ApiServices, private route: ActivatedRoute) {

    }

    ngOnInit() {
        const quizID = this.route.snapshot.paramMap.get('quizID');
        this.api.GetQuestions(quizID).subscribe(res => {
            console.log('GET Questions - ngOnInit:');
            console.log(res);
            this.questions = res;
        });
    }

}

