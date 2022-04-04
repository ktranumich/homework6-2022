var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	var currentSpeed = video.playbackRate;
	video.playbackRate = currentSpeed - 0.05;
	console.log(currentSpeed);
});

document.querySelector("#faster").addEventListener("click", function(){
	var currentSpeed2 = video.playbackRate + 0.05;
	video.playbackRate = currentSpeed2
	console.log(currentSpeed2);
})