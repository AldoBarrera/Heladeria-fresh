import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter2',
    pure: false
})
export class MyFilter2Pipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => {return item.ordd_ordn_id._id === filter.ordd_ordn_id && item.ordd_dish_id.dish_type === 'bebida'});
    }
}