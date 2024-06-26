import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { OriginalsComponent } from './originals/originals.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'tvshow', component: TvshowComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'originals', component: OriginalsComponent },
  { path: 'recently-added', component: RecentlyAddedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
