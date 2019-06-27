import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../api.services';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['../app.component.css']
})
export class QuizComponent implements OnInit {

  quiz = {}

  constructor(private api: ApiServices) {
    
  }

  ngOnInit() {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }

}
