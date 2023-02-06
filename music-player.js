let progress = document.getelementById("progress");
let song = document.getelementById("song");
let ctrlIcon = document.getelementById("ctrIcon");

song.onloadmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("pause-outline")){
        song.pause();
        ctrlIcon.classList.remove("pause-outline");
        ctrlIcon.classList.add("play-circle-outline");
    }
    else{
        song.play();
        ctrlIcon.classList.add("pause-outline");
        ctrlIcon.classList.remove("play-circle-outline");
    }
}
