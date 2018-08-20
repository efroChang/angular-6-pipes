import { Pipe, PipeTransform } from '@angular/core';

// Note: pure = faluse may cause performance issue.  It updates the list whenever data changes.
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propertyName: string): any {
    if ( value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (let item of value) {
      if (item[propertyName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
