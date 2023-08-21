import { CalendarNativeDateFormatter, DateFormatterParams } from "angular-calendar";

export class CustomDateFormatter extends CalendarNativeDateFormatter {
    public override dayViewHour({ date, locale }: DateFormatterParams): string {
        return new Intl.DateTimeFormat('ca', {
            hour: 'numeric',
            minute: 'numeric'
        }).format(date);
    }
}