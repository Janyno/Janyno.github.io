export interface GameReleaseEntry {
    start: Date,
    title: string,
    color: any
}

export interface EventEntry {
    start: Date,
    end?: Date,
    title: string,
    color: any,
    startTime: string,
    link?: string
}

export interface ScheduleEntry {
    start: Date,
    end: Date,
    title: string,
    allDay?: boolean
}

