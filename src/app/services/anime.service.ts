import { Injectable } from '@angular/core';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animeList: Anime[] = [
    {name: 'Mushoku Tensei: Jobless Reincarnation', status: 'ongoing'},
    {name: 'Demon Slayer', status: 'ongoing'},
    {name: 'Jujutsu Kaisen', status: 'ongoing'},
    {name: 'Hell´s Paradise', status: 'ongoing'},
    {name: 'Vinland Saga', status: 'ongoing'},
    {name: 'Dr. STONE', status: 'ongoing'},
    {name: 'Dead Mount Death Play', status: 'ongoing'},
    {name: 'Baki', status: 'completed'},
    {name: 'Baki Hanma: Son of Ogre', status: 'watch_new_season'},
    {name: 'Zom 100: Bucket List of the Dead', status: 'ongoing'},
    {name: 'Bungo Stray Dogs', status: 'ongoing'},
    {name: 'Golden Kamuy', status: 'on_pause_maybe'},
    {name: 'Black Clover', status: 'ongoing'},
    {name: 'Naruto Shippuden', status: 'completed'},
    {name: 'Naruto', status: 'completed'},
    {name: 'My Hero Academia', status: 'ongoing'},
    {name: 'Spy x Family', status: 'watch_new_season'},
    {name: 'That Time I Got Reincarnated as a Slime', status: 'watch_new_season'},
    {name: 'BLUELOCK', status: 'aborted'},
    {name: 'Attack on Titan', status: 'ongoing'},
    {name: 'Chainsaw Man', status: 'ongoing'},
    {name: 'The Rising of the Shield Hero', status: 'ongoing'},
    {name: 'BORUTO', status: 'aborted'},
    {name: 'Tokyo Revengers', status: 'ongoing'},
    {name: 'Fire Force', status: 'aborted'},
    {name: 'Tokyo Ghoul', status: 'completed'},
    {name: 'My Dress-Up Darling', status: 'ongoing'},
    {name: 'Re:ZERO', status: 'ongoing'},
    {name: 'JoJo´s Bizarre Adventure', status: 'on_pause_maybe'},
    {name: 'High School DxD', status: 'on_pause_maybe'},
    {name: 'One-Punch Man', status: 'ongoing'},
    {name: 'PSYCHO-PASS', status: 'completed'},
    {name: 'The God of High School', status: 'completed'},
    {name: 'DON´T TOY WITH ME, MISS NAGATORO', status: 'ongoing'},
    {name: 'Mieruko-chan', status: 'completed'},
    {name: 'ORIENT', status: 'ongoing'},
    {name: 'THE PROMISED NEVERLAND', status: 'aborted'},
    {name: 'Isekai Cheat Magician', status: 'completed'},
    {name: 'Parasytem -the maxim-', status: 'completed'},
    {name: 'The Testament of Sister New Devil', status: 'completed'},
    {name: 'Tomodachi Game', status: 'ongoing'},
    {name: 'TRIGUN STAMPEDE', status: 'on_pause_maybe'},
    {name: 'DECA-DENCE', status: 'on_pause_maybe'},
    {name: 'Kabaneri of the Iron Fortress', status: 'completed'},
    {name: 'SABIKUI BISCO', status: 'ongoing'},
    {name: '91 Days', status: 'aborted'},
    {name: 'The Yakuza´s Guide to Babysitting', status: 'ongoing'},
    {name: 'World´s End Harem', status: 'aborted'},
    {name: 'Sword Art Online', status: 'watch_new_season'},
    {name: 'The Helpful Fox Senko-san', status: 'completed'},
    {name: 'Keijo!!!!!!!', status: 'aborted'},
    {name: 'The Great Jahy Will Not Be Defeated', status: 'aborted'},
    {name: 'Highschool of the Dead', status: 'completed'},
    {name: 'Are You Lost?', status: 'completed'},
    {name: 'At Dead of Night', status: 'ongoing'},
    {name: 'Dororo', status: 'aborted'},
    {name: 'Cyberpunk Edgerunners', status: 'completed'},
    {name: 'The Seven Deadly Sins', status: 'aborted'},
    {name: 'Komi Can´t Communicate', status: 'aborted'},
    {name: 'Buddy Daddy´s', status: 'ongoing'},
    {name: 'Kengan Ashura', status: 'aborted'},
    {name: 'Darwin´s Game', status: 'ongoing'},
    {name: 'Cagaster of an Insect Cage', status: 'aborted'},
    {name: 'Fate: Stay Night', status: 'completed'},
    {name: 'Little Witch Academia', status: 'aborted'},
    {name: 'Bleach', status: 'on_pause_maybe'},
    {name: 'Konosuba', status: 'aborted'},
    {name: 'Kiss x Sis', status: 'aborted'},
    {name: 'Black Bullet', status: 'completed'},
    {name: 'Redo of Healer', status: 'completed'},
    {name: 'Seton Academy: Join the Pack!', status: 'aborted'}
  ]

  getAnime() {
    return this.animeList
  }

  getAnimeData() {
    return this.animeList.length
  }
}
