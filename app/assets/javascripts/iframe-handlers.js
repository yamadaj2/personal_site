// Soundcloud
var scIframeElement = document.querySelector('#sc-player1');
var scTrack = SC.Widget(scIframeElement);

// YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var YTvideo1;
var YTvideo2;

function onYouTubeIframeAPIReady() {
    YTvideo1 = new YT.Player('YTvideo1', {
        videoId: 'fIoKG9-ZnJw',
        events: {
            'onStateChange': onPlayerStateChange
        }
    }),

        YTvideo2 = new YT.Player('YTvideo2', {
            videoId: 'ql5sYzq7xds',
            events: {
                'onStateChange': onPlayerStateChange
            }
        })
}


function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        pauseVideo(event.target.a.id);
    }
}

function pauseVideo(player_id) {
    switch(player_id){
        case 'YTvideo1':
            YTvideo2.pauseVideo();
            scTrack.pause();
            break;
        case 'YTvideo2':
            YTvideo1.pauseVideo();
            scTrack.pause();
            break;
        default:
            console.log('Error pausing media content.');
    }
}

function pauseAllOtherIframes(){
    YTvideo1.pauseVideo();
    YTvideo2.pauseVideo();
}

scTrack.bind('play', pauseAllOtherIframes);