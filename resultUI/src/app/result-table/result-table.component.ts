import { Component, OnInit } from '@angular/core';
import {UserResult,QuestionsAttempted, QuizResult} from '../../UserResult';
import {ResultService} from '../../result.service';
import { MatTableDataSource } from '@angular/material';

// export interface QuizQuestions {
//   question: string;
//   num: number;
//   actual: any;
//   ideal: any;
// }

// const ELEMENT_DATA: QuizQuestions[] = [
//   {num: 1, question: 'cfrvr', actual: 1.0079, ideal: 79},
//   {num: 2, question: 'Which bla bl......', actual: 4.0026, ideal: 79},
//   {num: 3, question: 'Why .....', actual: 'this', ideal: 'that'},

// ];

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  _result : UserResult;
  quizResult : QuizResult;
  questionList : QuestionsAttempted[];
  question = []

  constructor(private resultService : ResultService) { }

  ngOnInit() {
    this.resultService.getUserResult(1).subscribe(data => {
      const questionsListArray = data.json().quizResults[0].questionsAttempted
      this.question.push(...questionsListArray);
      //this._result = data.json();
      console.log(this.question[0]);
    });

    // const questionsListArray = this._result.quizResults;
    // this.quizResult = questionsListArray[0];
    // this.questionList = this.quizResult.questionsAttempted;
  }

  displayedColumns: string[] = ['num', 'question', 'actual', 'ideal'];
  dataSource = new MatTableDataSource<QuestionsAttempted>(this.question);;
}


