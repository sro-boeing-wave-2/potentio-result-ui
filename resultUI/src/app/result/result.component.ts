import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { ResultService } from '../../result.service';
import { UserResult, QuizResult, QuestionsAttempted } from '../../UserResult';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  userId : number;
  domain : string;

  _result : UserResult;
  quizResult : QuizResult;
  questionList : QuestionsAttempted[];
  question = [];
  _questions : QuestionsAttempted[];
  tags = [];
  length : number;

  constructor(private router : Router, private activatedRoute:ActivatedRoute, private resultService : ResultService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      let UserId = parseInt(params.get('userId'));
      let Domain = params.get('domain');
      this.userId = UserId;
      this.domain = Domain;
    });

    this.resultService.getUserResult(this.userId,this.domain).subscribe(data => {
      this._result = data.json();
      const questionsListArray = this._result.quizResults[this._result.quizResults.length-1].questionsAttempted
      this.question.push(...questionsListArray);
      //this._result = data.json();
      console.log(this._result.quizResults.length);
      this.length = this._result.quizResults.length-1;
      console.log(this.question[0]);
      // Added
      const tagList  = this._result.quizResults[this.length].tagWiseResults;
      this.tags.push(...tagList);
      this._questions = this._result.quizResults[this.length].questionsAttempted;
    });
  }
}
