import { Video } from '../models/video.model';

export class VideoService {
    videos: Video[] = [
        {
            id: 1,
            source:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            title: 'test video',
            description: 'this is the best video',
            length: 256,
            views: 124027,
            favorite: true,
        },
        {
            id: 2,
            source:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            title: 'test second',
            description: 'this is the worst',
            length: 326,
            views: 123664,
            favorite: false,
        },
        {
            id: 3, // Unique ID
            source:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            title: 'test video',
            description: 'this is the best video',
            length: 256,
            views: 124027,
            favorite: true,
        },
        {
            id: 4, // Unique ID
            source:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            title: 'test second',
            description: 'this is the worst',
            length: 326,
            views: 123664,
            favorite: false,
        },
        {
            id: 5, // Unique ID
            source:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            title: 'test video',
            description: 'this is the best video',
            length: 256,
            views: 124027,
            favorite: true,
        },
        {
            id: 6, // Unique ID
            source:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            title: 'test second',
            description: 'this is the worst',
            length: 326,
            views: 123664,
            favorite: false,
        },
    ];
}
