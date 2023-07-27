export interface Game {
    name: string,
    status?: 'not_began' | 'in_progress' | 'completed',
    progress?: number,
    notes?: string,
    link?: string
}