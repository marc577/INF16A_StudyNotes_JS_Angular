import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: Array<any>, conditions: { [field: string]: any }): Array<any> {
    if(items == null) return null;
    return items.filter(item => {
      if(item.firstName != undefined && item.lastName !== undefined && conditions != null){
        var st = (item.firstName+" "+item.lastName).toLowerCase();
        var con = conditions.toLowerCase();
        if(st.indexOf(con) == -1){
          return false;
        }
      }
      if(item.sName != null && conditions != null){
        let st = item.sName.toLowerCase();
        let con = conditions.toLowerCase();
        if(st.indexOf(con) == -1){
          return false;
        }
      }


      for (let field in conditions) {
        if (item.name != undefined) {
          if (item.name[field].toLowerCase() !== conditions[field].toLowerCase() &&
            item.name[field].toLowerCase()) {
            return false;
          }
        }
        if (item.student != undefined && item.teacher != undefined) {
          if (item.student[field].toLowerCase() !== conditions[field].toLowerCase() &&
            item.student[field].toLowerCase() &&
            item.teacher[field].toLowerCase() !== conditions[field].toLowerCase() &&
            item.teacher[field].toLowerCase()) {
            return false;
          }
        }
      }
      return true;
    });
  }
}