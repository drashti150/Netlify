import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
 
    Movies = [
      {
        "id": 1,
        "title": 'Movie 1',
        "image": '/assets/movies1.jpeg',
        "location": 'Location X',
        "video": '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        "id": 2,
        "title": 'Movie 2',
        "image": '/assets/movies2.jpg',
        "location": 'Location X',
        "video": '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        "id": 3,
        "title": 'Movie 3',
        "image": '/assets/movies3.jpeg',
        "location": 'Location X',
        "video": '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        "id": 4,
        "title": 'Movie 4',
        "image": '/assets/movies4.jpg',
        "location": 'Location X',
        "video": '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        "id": 5,
        "title": 'Movie 5',
        "image": '/assets/movies5.jpg',
        "location": 'Location X',
        "video": '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        "id": 6,
        "title": 'Movie 6',
        "image": '/assets/movies6.jpeg',
        "location": 'Location X',
        "video": '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        "id": 7,
        "title": 'Movie 7',
        "image": '/assets/movies7.jpeg',
        "location": 'Location X',
        "video": '/assets/big_buck_bunny_720p_20mb.mp4'
      }
    ];
  
    isVideoModalOpen = false;
    currentVideo: string | null = null;
  
    showVideo(videoUrl: string) {
      this.currentVideo = videoUrl;
      this.isVideoModalOpen = true;
    }
  
    closeVideoModal() {
      this.isVideoModalOpen = false;
      this.currentVideo = null;
    }
  }
  