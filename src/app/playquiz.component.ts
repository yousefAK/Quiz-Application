import {Component, OnInit} from '@angular/core';
import {AuthServices} from './auth.services';
import {ApiServices} from './api.services';
import {ActivatedRoute, Router} from '@angular/router';
import {FinishedComponent} from './finished.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-playquiz',
    templateUrl: './playquiz.component.html',
    styleUrls: ['./app.component.css'],
    // template: '',
})


export class PlayquizComponent implements OnInit {

    questions;
    quizID;
    step = 0;
    selectedAnswer;

    constructor(private api: ApiServices,
                private route: ActivatedRoute,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.quizID = this.route.snapshot.paramMap.get('quizID');
        this.api.GetQuestions(this.quizID).subscribe(res => {
            this.questions = res;

            this.questions.forEach(q => {
                q.answers = [
                    q.correctAnswer,
                    q.answer1,
                    q.answer2,
                    q.answer3,
                ];
                this.shuffle(q.answers);
            });
        });
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    finish() {
        let correct = 0;
        this.questions.forEach(q => {
            if (q.selectedAnswer === q.correctAnswer) {
                correct++;
            }
        });
        console.log(correct);

        const dialogRef = this.dialog.open(FinishedComponent, {
            width: '250px',
            data: {correct, total: this.questions.length}
        });
    }
}
