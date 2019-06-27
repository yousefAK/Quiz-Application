import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../api.services';

@Component({
  selector: 'app-quizcomp',
  templateUrl: './quizcomp.component.html',
  styleUrls: ['../app.component.css']
})
export class QuizcompComponent implements OnInit {

  quizzes;

  constructor(private api: ApiServices) {
  }

  ngOnInit() {
    this.api.GetQuizzes().subscribe(res => {
      console.log("GET Quizzes - ngOnInit:");
      console.log(res);
      this.quizzes = res;
    });
  }

}
