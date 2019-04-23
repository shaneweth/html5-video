// Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player_slider");


// functions

function togglePlay() {

    // ternary op instead of if/else
    const method = video.paused ? "play" : "pause";
    video[method]();
}

function updateButton() {
    console.log("Update the button");
}

// event listeners



video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);


toggle.addEventListener("click", togglePlay);