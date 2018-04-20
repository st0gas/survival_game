

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

function listRunners (){
    let h = "";
    let x = 1;
    for (i=0;i<PEOPLE.length;i++){
        
       if(PEOPLE[i].runner == "y"){
        h = h + `
        <tr>
        <th scope="row">${[x]}</th>
        <td>${PEOPLE[i].name}</td>
        <td>${PEOPLE[i].pavarde}</td>
        <td>${PEOPLE[i].color}</td>
        <td>${PEOPLE[i].gamesNr}</td>
        <td>${PEOPLE[i].lastGamepoints}</td>
        <td>${PEOPLE[i].date}</td>
        <td>${PEOPLE[i].mileage}</td>
        `;
        x ++;
        // console.log(h);
       };
    };
    console.log(h);
    $("#TESTASMESTAS").html(h)
};


$(function(){
    $(".button_prim").hide();
    $(".button_prim").delay(3000).fadeIn(20000);
    
    $(".button_prim").click(function() {
        $('html,body').animate({
            scrollTop: $(".TESTAS1").offset().top},
            'slow');
    });


 
   
    
    

    //         location.href = "#TESTAS1"; 
    // event.target.pauseVideo();
});

