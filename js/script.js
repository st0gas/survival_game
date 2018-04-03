// 2. This code loads the Youtube IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var youtubePlayer;
var _youtube_id = document.getElementById('_youtube-iframe');

function onYouTubeIframeAPIReady() {				
    youtubePlayer = new YT.Player('_youtube-iframe', {
        videoId: _youtube_id.dataset.youtubeurl,
        playerVars: { // https://developers.google.com/youtube/player_parameters?playerVersion=HTML5
            cc_load_policy: 0, // closed caption
            controls: 0,
            disablekb: 0, //disable keyboard
            iv_load_policy: 3, // annotations
            playsinline: 1, // play inline on iOS
            rel: 0, // related videos
            showinfo: 0, // title
            autohide: 1,
            modestbranding: 1 // youtube logo
        },
        events: {
            'onReady': onYoutubePlayerReady,
            'onStateChange': onYoutubePlayerStateChange
        }
    });
}

function onYoutubePlayerReady(event) {
    // event.target.mute();
    event.target.setVolume(5);
    event.target.playVideo();				
}

function onYoutubePlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) { // fade out #_buffering-background
        // AnimationEvent(document.getElementById('_buffering-background'), { opacity: 0 }, 500);
    }
    
    if (event.data == YT.PlayerState.ENDED) { // loop video
        // event.target.playVideo();
    }
}

$(function(){
    $("button").hide();
    $("button").delay(3000).fadeIn(20000);
    
    $("button").click(function() {
        $('html,body').animate({
            scrollTop: $(".TESTAS1").offset().top},
            'slow');
    });

    

    //         location.href = "#TESTAS1"; 
    // event.target.pauseVideo();
});

