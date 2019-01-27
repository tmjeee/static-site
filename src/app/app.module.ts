import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from "@angular/router";
import { PhotosComponent} from "./media/photos/photos.component";
import {AlbumsComponent} from "./media/albums/albums.component";


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      <Route>{path:'photos', component: PhotosComponent},
      <Route>{path:'albums', component: AlbumsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
