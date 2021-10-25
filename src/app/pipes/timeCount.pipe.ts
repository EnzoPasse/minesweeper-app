import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(valor: number): string {
    let min = Math.floor(valor / 60);
    let seg = valor % 60;
    return min+":"+(seg>9?seg.toString():"0"+seg);
  }

}
