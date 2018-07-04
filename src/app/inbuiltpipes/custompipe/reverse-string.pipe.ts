import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let newString = ''
    for(let i = value.length-1; i>=0;i--){
      newString += value.charAt(i)
    }


    return newString;
  }

}
