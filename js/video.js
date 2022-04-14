var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop = false;
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log(video.volume);
	video.play();
	document.getElementById("#orig").innerHTML = "Meow";

});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	var currentSpeed = video.playbackRate -0.05;
	video.playbackRate = currentSpeed;
	console.log(currentSpeed);
});

document.querySelector("#faster").addEventListener("click", function(){
	var currentSpeed2 = video.playbackRate + 0.05;
	video.playbackRate = currentSpeed2
	console.log(currentSpeed2);
})

document.querySelector("#skip").addEventListener("click", function(){
	currentTime = video.currentTime;
	currentTimePlusFifteen = currentTime + 15;
	if (currentTimePlusFifteen < video.duration){
		video.currentTime = currentTimePlusFifteen;
	}
	else{
		video.currentTime = 0;
	}
	console.log(currentTime);
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log(video.muted);
	if (video.muted == false){
		video.muted = true;
	}
	else{
		video.muted = false;
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Hi");
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})