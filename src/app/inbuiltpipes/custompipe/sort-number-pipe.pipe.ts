import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumberPipe'
})
export class SortNumberPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'asc') {
      return value.sort(this.sortNumber)
    }
    else if(args === 'dsc')
    {
      return value.sort(this.sortNumber).reverse()      
    }
    return value.sort(this.sortNumber)
  }

  sortNumber(n1, n2){
    return n1 - n2
  } 

}
