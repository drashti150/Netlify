import { Component } from '@angular/core';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent {
 
    recentlyAddedMovies = [
      {
        id: 1,
        title: 'Movie 1',
        image: '/assets/movies1.jpeg',
        video: '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        id: 2,
        title: 'Movie 2',
        image: '/assets/movies2.jpg',
        video: '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        id: 3,
        title: 'Movie 3',
        image: '/assets/movies3.jpeg',
        video: '/assets/big_buck_bunny_720p_20mb.mp4'
      },
      {
        id: 4,
        title: 'Movie 4',
        image: '/assets/movies4.jpg',
        video: '/assets/big_buck_bunny_720p_20mb.mp4'
      }
      // Add more movies as needed
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
  