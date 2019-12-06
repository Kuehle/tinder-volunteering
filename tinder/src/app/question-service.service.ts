import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Question } from './question';


@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }
  restApi = environment.API_HOST + ":" + environment.API_PORT;

   getQuestions(): Observable<Question[]> {
    // return this.http.get<Question[]>(this.restApi + '/questions');
    return of([
      {
        id:1,
        question:"How do you like chocolate icecream?"
      },
      {
        id:2,
        question:"How do you like vanilla icecream?"
      },
      {
        id:3,
        question:"How do you like strawberry icecream?"
      }

    ]);
  }

  s
}
