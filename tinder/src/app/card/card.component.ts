import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";

import * as animation from './animations';
import { Question } from '../question';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(animation.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(animation.swipeleft)))
    ])]
})

export class CardComponent implements OnInit {

  @Input() question:Question;  
  @Input() index:number; 

  animationState: string;
  public index = 0;

  constructor() { }

  ngOnInit() {
    this.startAnimation("swipeleft")
  }

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
    this.index++;
  }




}
