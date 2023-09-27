import { Injectable } from '@angular/core';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animeList: Anime[] = [
    {name: 'Mushoku Tensei: Jobless Reincarnation', status: 'wait_new_sep'},
    {name: 'Demon Slayer', status: 'wait_new_sep'},
    {name: 'Jujutsu Kaisen', status: 'watching'},
    {name: 'Hell´s Paradise', status: 'wait_new_sep'},
    {name: 'Vinland Saga', status: 'wait_new_sep'},
    {name: 'Dr. STONE', status: 'wait_new_sep'},
    {name: 'Dead Mount Death Play', status: 'wait_new_sep'},
    {name: 'Baki', status: 'completed'},
    {name: 'Baki Hanma: Son of Ogre', status: 'watching'},
    {name: 'Zom 100: Bucket List of the Dead', status: 'watching'},
    {name: 'Bungo Stray Dogs', status: 'wait_new_sep'},
    {name: 'Golden Kamuy', status: 'on_pause_maybe'},
    {name: 'Black Clover', status: 'wait_new_sep'},
    {name: 'Naruto Shippuden', status: 'completed'},
    {name: 'Naruto', status: 'completed'},
    {name: 'My Hero Academia', status: 'wait_new_sep'},
    {name: 'Spy x Family', status: 'watch_new_season'},
    {name: 'That Time I Got Reincarnated as a Slime', status: 'watch_new_season'},
    {name: 'BLUELOCK', status: 'aborted'},
    {name: 'Attack on Titan', status: 'wait_new_sep'},
    {name: 'Chainsaw Man', status: 'wait_new_sep'},
    {name: 'The Rising of the Shield Hero', status: 'wait_new_sep'},
    {name: 'BORUTO', status: 'aborted'},
    {name: 'Tokyo Revengers', status: 'wait_new_sep'},
    {name: 'Fire Force', status: 'aborted'},
    {name: 'Tokyo Ghoul', status: 'completed'},
    {name: 'My Dress-Up Darling', status: 'wait_new_sep'},
    {name: 'Re:ZERO', status: 'wait_new_sep'},
    {name: 'JoJo´s Bizarre Adventure', status: 'on_pause_maybe'},
    {name: 'High School DxD', status: 'on_pause_maybe'},
    {name: 'One-Punch Man', status: 'wait_new_sep'},
    {name: 'PSYCHO-PASS', status: 'completed'},
    {name: 'The God of High School', status: 'completed'},
    {name: 'DON´T TOY WITH ME, MISS NAGATORO', status: 'wait_new_sep'},
    {name: 'Mieruko-chan', status: 'completed'},
    {name: 'ORIENT', status: 'wait_new_sep'},
    {name: 'THE PROMISED NEVERLAND', status: 'aborted'},
    {name: 'Isekai Cheat Magician', status: 'completed'},
    {name: 'Parasytem -the maxim-', status: 'completed'},
    {name: 'The Testament of Sister New Devil', status: 'completed'},
    {name: 'Tomodachi Game', status: 'wait_new_sep'},
    {name: 'TRIGUN STAMPEDE', status: 'on_pause_maybe'},
    {name: 'DECA-DENCE', status: 'on_pause_maybe'},
    {name: 'Kabaneri of the Iron Fortress', status: 'completed'},
    {name: 'SABIKUI BISCO', status: 'wait_new_sep'},
    {name: '91 Days', status: 'aborted'},
    {name: 'The Yakuza´s Guide to Babysitting', status: 'wait_new_sep'},
    {name: 'World´s End Harem', status: 'aborted'},
    {name: 'Sword Art Online', status: 'watch_new_season'},
    {name: 'The Helpful Fox Senko-san', status: 'completed'},
    {name: 'Keijo!!!!!!!', status: 'aborted'},
    {name: 'The Great Jahy Will Not Be Defeated', status: 'aborted'},
    {name: 'Highschool of the Dead', status: 'completed'},
    {name: 'Are You Lost?', status: 'completed'},
    {name: 'At Dead of Night', status: 'wait_new_sep'},
    {name: 'Dororo', status: 'aborted'},
    {name: 'Cyberpunk Edgerunners', status: 'completed'},
    {name: 'The Seven Deadly Sins', status: 'aborted'},
    {name: 'Komi Can´t Communicate', status: 'aborted'},
    {name: 'Buddy Daddy´s', status: 'watching'},
    {name: 'Kengan Ashura', status: 'aborted'},
    {name: 'Darwin´s Game', status: 'wait_new_sep'},
    {name: 'Cagaster of an Insect Cage', status: 'aborted'},
    {name: 'Fate: Stay Night', status: 'completed'},
    {name: 'Little Witch Academia', status: 'aborted'},
    {name: 'Bleach', status: 'on_pause_maybe'},
    {name: 'Konosuba', status: 'aborted'},
    {name: 'Kiss x Sis', status: 'aborted'},
    {name: 'Black Bullet', status: 'completed'},
    {name: 'Redo of Healer', status: 'completed'},
    {name: 'Seton Academy: Join the Pack!', status: 'aborted'},
    {name: 'Oshi no Ko', status: 'wait_new_sep'},
    {name: 'Akame ga Kill', status: 'completed'},
    {name: 'One Piece', status: 'on_pause_maybe'},
    {name: 'TENGOKU-DAIMAKYO', status: 'watching'}
  ]

  getAnime() {
    return this.animeList
  }

  getAnimeData() {
    return this.animeList.length
  }
}
