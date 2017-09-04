import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: Array<any>, conditions: { [field: string]: any }): Array<any> {
    return items.filter(item => {
      for (let field in conditions) {
        if (item.firstName != undefined && item.lastName !== undefined) {
          if (item.firstName[field].toLowerCase() !== conditions[field].toLowerCase() &&
            item.firstName[field].toLowerCase() &&
            item.lastName[field].toLowerCase() !== conditions[field].toLowerCase() &&
            item.lastName[field].toLowerCase()) {
            return false;
          }
        }
        if (item.name != undefined) {
          if (item.name[field].toLowerCase() !== conditions[field].toLowerCase() &&
            item.name[field].toLowerCase()) {
            return false;
          }
        }
      }
      return true;
    });
  }
}