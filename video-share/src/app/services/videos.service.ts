import { Video } from '../models/video.model';

export class VideoService {
  videos: Video[] = [
    {
      id: 1,
      source:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Big bunny gets mad at tiny creatures in the forrest',
      description: 'this is the best video',
      length: 256,
      views: 124027,
      favorite: true,
      uploadedBy: 'Jamie',
    },
    {
      id: 2,
      source:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      title: 'Not sure what this is but it is cool',
      description: 'this is the worst',
      length: 326,
      views: 123664,
      favorite: false,
      uploadedBy: 'Jamie',
    },
    {
      id: 3, // Unique ID
      source:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Big bunny gets mad at tiny creatures in the forrest',
      description: 'this is the best video',
      length: 256,
      views: 124027,
      favorite: true,
      uploadedBy: 'Jamie',
    },
    {
      id: 4, // Unique ID
      source:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      title: 'Not sure what this is but it is cool',
      description: 'this is the worst',
      length: 326,
      views: 123664,
      favorite: false,
      uploadedBy: 'Jamie',
    },
    {
      id: 5, // Unique ID
      source:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Big bunny gets mad at tiny creatures in the forrest',
      description: 'this is the best video',
      length: 256,
      views: 124027,
      favorite: true,
      uploadedBy: 'Jamie',
    },
    {
      id: 6, // Unique ID
      source:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      title: 'Not sure what this is but it is cool',
      description: 'this is the worst',
      length: 326,
      views: 123664,
      favorite: false,
      uploadedBy: 'Jamie',
    },
  ];
}
