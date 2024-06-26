import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { OriginalsComponent } from './originals/originals.component';
import { HeaderComponent } from './header/header.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    MoviesComponent,
    RecentlyAddedComponent,
    OriginalsComponent,
    HeaderComponent,
    TvshowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
