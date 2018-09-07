import { Component, OnInit } from '@angular/core';
import {UserResult,QuizResult,QuestionsAttempted} from '../../UserResult';
import {ResultService} from '../../result.service';

@Component({
  selector: 'app-overall-result',
  templateUrl: './overall-result.component.html',
  styleUrls: ['./overall-result.component.css']
})
export class OverallResultComponent implements OnInit {

  _result : UserResult;
  _questions : QuestionsAttempted[];

  constructor(private resultService : ResultService) { }

  ngOnInit() {
    this.resultService.getUserResult(1,'C').subscribe(data => {
      this._result = data.json();
      this._questions = this._result.quizResults[0].questionsAttempted;
    });
    console.log('------------');

  }


}
