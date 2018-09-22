import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { ResultService } from '../../result.service';
import { UserResult, QuizResult, QuestionsAttempted } from '../../UserResult';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  userId : number;
  domain : string;



  constructor(private router : Router, private activatedRoute:ActivatedRoute, private resultService : ResultService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      let UserId = parseInt(params.get('userId'));
      let Domain = params.get('domain');
      this.userId = UserId;
      this.domain = Domain;
    });

  }

  seeResult(){
    this.router.navigate(['/result',this.userId,this.domain]);
  }

}
