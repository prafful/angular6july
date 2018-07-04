import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ctsSetbg]'
})
export class SetbgDirective {

  constructor(private el:ElementRef) {

    el.nativeElement.style.color = 'green'
    el.nativeElement.style.backgroundColor = 'pink'
    el.nativeElement.style.fontSize='44px'
   }

}
