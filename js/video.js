var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML=video.volume*100 + '%'
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add('oldSchool');

 });

 document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to Normal");
	video.classList.remove('oldSchool');
 });

 document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);

 });

 document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
 });

 document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	var slider = this.value;
	video.volume = slider/100
	document.querySelector('#volume').innerHTML=video.volume*100 + '%'
 });

 document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime < 15) {
		video.currentTime = 0;
	}
	else  {
		video.currentTime = video.currentTime + 15;
	}
	  
	 console.log(video.currentTime)

 });


 document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute")
		video.muted = false;
		document.querySelector('#mute').innerHTML='Mute'
		
	}
		
	else {
		console.log("Mute")
		video.muted = true; 
		document.querySelector('#mute').innerHTML='Unmute'
		
	}
	
 });


 



