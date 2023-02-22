import { Directive } from '@angular/core';
import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';


@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {

  constructor() { }

openCLose:boolean = false


clickOpen(){
  this.openCLose = true;
}

}
