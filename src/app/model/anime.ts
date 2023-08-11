export interface Anime {
    name: string,
    status: 'wait_new_sep' | 'watching' | 'aborted' | 'on_pause_maybe' | 'watch_new_season' | 'completed'
}