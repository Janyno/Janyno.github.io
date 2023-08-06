import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'not_began':
        return 'Not Began';
      case 'in_progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      default:
        return value;
    }
  }
}