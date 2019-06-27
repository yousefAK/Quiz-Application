import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiServices {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {

    }

    // ----------------------------------------------------------------------------- Question

    postQuestion(question) {
        this.http.post('http://localhost:60623/api/Questions', question).subscribe(res => {
            console.log('APi Service Post Question');
        });
    }

    putQuestion(question) {
        this.http.put(`http://localhost:60623/api/Questions/${question.id}`, question).subscribe(res => {
            console.log('APi Service Post Question');
        });
    }

    GetQuestions1() {
        return this.http.get('http://localhost:60623/api/Questions');
    }

    GetQuestions(quizId) {
        return this.http.get(`http://localhost:60623/api/Questions/${quizId}`);
    }

    selectQuestion(question) {
        this.selectedQuestion.next(question);

        console.log("API selectQuestion: ");
        console.log(question);
    }

    // ----------------------------------------------------------------------------- Quiz

    postQuiz(quiz) {
        this.http.post('http://localhost:60623/api/quizzes', quiz).subscribe(res => {
            console.log('APi Service Post Quiz');
            console.log(res);
        });
    }

    putQuiz(quiz) {
        this.http.put(`http://localhost:60623/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log('APi Service Put Quiz');
        });
    }

    GetQuizzes() {
        return this.http.get('http://localhost:60623/api/quizzes');
    }

    GetAllQuizzes() {
        return this.http.get('http://localhost:60623/api/quizzes/all');
    }

    selectQuiz(quiz) {
        this.selectedQuiz.next(quiz);

        console.log("API selectQuiz: ");
        console.log(quiz);
    }
}
