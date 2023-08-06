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
      case 'aborted':
        return 'Aborted';
      case 'ongoing':
        return 'Ongoing';
      case 'on_pause_maybe':
        return 'On Pause, maybe continue';
      case 'watch_new_season':
        return 'Need to watch new Season / EPs';
      default:
        return value;
    }
  }
}