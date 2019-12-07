import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../question-service.service';
import { Question } from '../question';
import { Router, RoutesRecognized, RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  questionService:QuestionServiceService;
  questions:Question[];
  questionIndex:number = 0;
  length:number;
  answers:boolean[] = new Array();
  router:Router;

  constructor(questionService:QuestionServiceService, router:Router) { 
    this.questionService = questionService;
    this.router = router;
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      (data: Question[]) => {
        this.questions = data;
        this.length = data.length;
      }
    );

  }

  nextQuestion(answer:boolean){ 
    this.answers.push(answer);
    this.questionIndex++;
    console.log(this.questionIndex);

    if(this.questionIndex === this.length){
      this.router.navigate(["/result"])
    }
    
  }

}
