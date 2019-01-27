import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../services/service.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photosResult;

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getPhotos().subscribe((r)=>{
      this.photosResult = r;
      console.log(this.photosResult);
    });
  }

}
