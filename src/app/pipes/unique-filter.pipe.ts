import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueFilter'
})
export class UniqueFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
