export interface Game {
    name: string,
    status: 'not_began' | 'in_progress' | 'completed' | 'wanna_play',
    playtime : number,
    vr?: boolean,
    all_achievements?: boolean,
    includes_dlc?: boolean
}