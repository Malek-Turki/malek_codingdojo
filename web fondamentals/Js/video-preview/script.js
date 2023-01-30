console.log("page loaded...");

var vid = document.getElementById("myVideo");

function playVid(element) {
    vid.play(element);
}

function pauseVid(element) {
    vid.pause(element);
}