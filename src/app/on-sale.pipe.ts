import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log("My Pipe By Me ", value);
    if(value){
      return 'Đại hạ giá';
    }
    return '';
  }

}
