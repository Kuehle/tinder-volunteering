import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../question-service.service';
import { Question } from '../question';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  questionService:QuestionServiceService;
  questions:Question[];

  constructor(questionService:QuestionServiceService) { 
    this.questionService = questionService;
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      (data: Question[]) => {
        this.questions = data;
      }
    );
  }

}
