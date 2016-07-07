import { Component } from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {VideoListComponent} from './videolist.component';
import {VideoDetailComponent} from './videodetail.component';

@Component({
    selector: 'appli',
    templateUrl: 'app/app.component.html',
    directives: [VideoListComponent, VideoDetailComponent]
})
export class AppliComponent {
    
    title = Config.TITLE_PAGE;
    videos : Video[];
    selectedVideo: Video;
    
    constructor(){
        this.videos = [
            new Video(1,"John Papa","https://www.youtube.com/embed/WAPQF_GA7Qg","Test Description"),
            new Video(2,"Dan Wahlin","https://www.youtube.com/embed/e3djIqAGqZo")
        ]
    }
    
    onSelectVideo(video){
        // console.log(JSON.stringify(video));
        this.selectedVideo = video;
    }
    
    onCloseDetailForm (event) {
        this.selectedVideo = null;
    }
    
    newVideo () {
        var v : Video = new Video(this.videos.length+1, "A new video");
        this.videos.push(v);
        this.selectedVideo = v;
    }

}