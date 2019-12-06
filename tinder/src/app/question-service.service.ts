import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Question } from './question';

import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }
  restApi = environment.API_HOST;

  questions:Question[]; 


  getQuestions(): Observable<Question[]> {
    return this.http.get<any>(this.restApi + 'questions').pipe(
      map((data)=>{
        return data.questions;
      })
    );

  }
}
