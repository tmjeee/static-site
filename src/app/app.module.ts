import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from "@angular/router";
import { PhotosComponent} from "./media/photos/photos.component";
import {AlbumsComponent} from "./media/albums/albums.component";
import {MediaModule} from "./media/media.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MediaModule,
    HttpClientModule,
    RouterModule.forRoot([
      <Route>{path:'photos', component: PhotosComponent},
      <Route>{path:'albums', component: AlbumsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }


}
