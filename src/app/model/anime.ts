export interface Anime {
    name: string,
    status: 'ongoing' | 'aborted' | 'on_pause_maybe' | 'watch_new_season' | 'completed'
}