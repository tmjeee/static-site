import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../services/service.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumsResult:any;

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getAlbums().subscribe((r)=>{
      this.albumsResult = r;
      console.log(this.albumsResult);
    })
  }

}
