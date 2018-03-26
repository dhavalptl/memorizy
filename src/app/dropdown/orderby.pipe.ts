import { Pipe, PipeTransform } from '@angular/core';
import { DropdownItem } from './dropdownItem';
@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {
  transform(options: DropdownItem[], args: string): any {
    let sortingItems = options.sort((a,b) => {
      if(a[args] < b[args]){
        return -1;
      }else if(a[args] > b[args]){
        return 1;
      }else{
        return 0;
      }
    });
    return [{
      label: 'ALL',
      value: 'ALL'
    }, ...sortingItems];
  }
}
