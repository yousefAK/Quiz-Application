import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../api.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-comp',
  templateUrl: './question-comp.component.html',
  styleUrls: ['../app.component.css']
})
export class QuestionCompComponent implements OnInit {

  question = {};
  quizID;

  constructor(private api: ApiServices, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // remeber to import ActivatedRoute to get the parameter in the url
    this.quizID = this.route.snapshot.paramMap.get('quizID');
    console.log(this.quizID);
    this.api.questionSelected.subscribe(question => this.question = question);
  }

  post(question) {
    question.quizId = this.quizID;
    this.api.postQuestion(question);
    console.log('Add Question: ');
    console.log(question);
  }

  put(question) {
    this.api.putQuestion(question);
    console.log('Edit Question: ' + question);
  }

}
