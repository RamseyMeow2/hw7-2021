var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
    video.playbackRate = 1;

    document.querySelector("#play").addEventListener("click", function() {
        video.play();
        updateVolumeInfo();
    });

    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate -= 0.1;
        console.log("New video speed: " + video.playbackRate);
    });

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate += 0.1;
        console.log("New video speed: " + video.playbackRate);
    });

    document.querySelector("#skip").addEventListener("click", function() {
        video.currentTime += 10;
        if (video.currentTime > video.duration) {
            video.currentTime = 0;
        }
        console.log("Current video location: " + video.currentTime);
    });

    var muteButton = document.querySelector("#mute");
    muteButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteButton.innerText = "Mute";
        } else {
            video.muted = true;
            muteButton.innerText = "Unmute";
        }
    });

    var volumeSlider = document.getElementById("slider");
    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        updateVolumeInfo();
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

    function updateVolumeInfo() {
        var volumeInfo = document.getElementById("volume");
        volumeInfo.textContent = video.volume * 100 + "%";
    }
});