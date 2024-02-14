import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { VideoService } from '../services/videos.service';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrl: './video-component.component.css'
})
export class VideoComponentComponent implements OnInit {
videos: Video[] | undefined;
constructor(private videoService: VideoService) {
}

ngOnInit(): void {
  //Only here until I subscribe to the DB to handle video uploads
  this.videos = this.videoService.videos
}



}
