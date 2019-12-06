import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'quiz', component: QuestionPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
