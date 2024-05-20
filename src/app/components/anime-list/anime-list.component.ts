import { Component, OnInit } from '@angular/core';
import { Anime } from '../../model/anime';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animeList: Anime[] = []
  animeListBackup: Anime[] = []
  sortingDirection: 'asc' | 'desc' = 'asc'
  availableStatuses: string[] = ['aborted', 'watching', 'wait_new_sep', 'on_pause_maybe', 'watch_new_season', 'completed'];
  selectedFilter: string | null = null;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getData().subscribe(data => {
      this.animeList = data
      this.animeListBackup = data
    })
    this.sortAnime()
  }

  statusColorMap: { [status: string]: string } = {
    aborted: 'maroon',
    watching: 'indigo',
    on_pause_maybe: 'slateblue',
    watch_new_season: 'gold',
    wait_new_sep: 'orange',
    completed: 'forestgreen'
  };

  sortAnime() {
    const sortOrder = this.sortingDirection === 'asc' ? 1 : -1;
  
    this.animeList.sort((a, b) =>
      (a.name.localeCompare(b.name) || a.status.localeCompare(b.status)) * sortOrder
    );
  }
  

  toggleSortingDirection() {
    this.sortingDirection = this.sortingDirection === 'asc' ? 'desc' : 'asc';
    this.sortAnime();
  }
  

  filterAnimeByStatus() {
    if (!this.selectedFilter) {
      this.animeList = [...this.animeListBackup];
    } else {
      this.animeList = this.animeListBackup.filter((anime) => anime.status === this.selectedFilter);
      this.selectedFilter = this.transformStatus(this.selectedFilter)
    }
    this.sortAnime();
  }

  transformStatus(value: string): string {
    switch (value) {
      case 'aborted':
        return 'Aborted';
      case 'watching':
        return 'Watching';
      case 'on_pause_maybe':
        return 'On Pause, maybe continue';
      case 'watch_new_season':
        return 'Need to watch new Season / EPs';
      case 'completed':
        return 'Completed';
      case 'wait_new_sep':
          return 'Wait for new Season / EPs';
      default:
        return value;
    }
  }

  getAmountOfStatus(status: string): number {
    let amount: number = 0

    for (let i = 0; i < this.animeListBackup.length; i++) {
      if(this.animeListBackup[i].status === status) {
        amount++
      }
    }

    return amount
  }
}
