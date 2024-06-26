import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent {

  Tvshow = [
    {
      "id": 1,
      "title": 'Tvshow 1',
      "image": '/assets/tv1.jpeg',
      "location": 'Location X',
      "video": '/assets/big_buck_bunny_720p_20mb.mp4'
    },
    {
      "id": 2,
      "title": 'Tvshow 2',
      "image": '/assets/tv2.jpeg',
      "location": 'Location X',
      "video": '/assets/big_buck_bunny_720p_20mb.mp4'
    },
    {
      "id": 3,
      "title": 'Tvshow 3',
      "image": '/assets/tv3.jpeg',
      "location": 'Location X',
      "video": '/assets/big_buck_bunny_720p_20mb.mp4'
    },
    {
      "id": 4,
      "title": 'Tvshow 4',
      "image": '/assets/tv4.jpeg',
      "location": 'Location X',
      "video": '/assets/big_buck_bunny_720p_20mb.mp4'
    },
    {
      "id": 5,
      "title": 'Tvshow 5',
      "image": '/assets/tv5.jpeg',
      "location": 'Location X',
      "video": '/assets/big_buck_bunny_720p_20mb.mp4'
    },
    {
      "id": 6,
      "title": 'Tvshow 6',
      "image": '/assets/tv6.jpeg',
      "location": 'Location X',
      "video": '/assets/big_buck_bunny_720p_20mb.mp4'
    },
    {
      "id": 7,
      "title": 'Tvshow 7',
      "image": '/assets/tv7.jpeg',
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
