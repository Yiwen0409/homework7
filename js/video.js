var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

window.onload=function(){
	var video=document.querySelector("#player1");
	var currentspeed=1;
	var mutestatus=false;
	var currentvolumn=100;
	var playVid=document.getElementById("play");
	var pauseVid=document.getElementById("pause");
	var slowVid=document.getElementById("slower");
	var speedVid=document.getElementById("faster");
        var skipAhead=document.getElementById("skip");
	var muting=document.getElementById("mute");
	var sliding=document.getElementById("slider");
	var oldschool=document.getElementById("vintage");
	var original=document.getElementById("orig");

	playVid.addEventListener("click", function(){
		video.play();
		console.log("Play Video");
		document.querySelector("#volumn").innerHTML=currentvolume + "%";
	});

	pauseVid.addEventListener("click",function(){
		video.pause();
		console.log("Pause Video");
	});

	slowVid.addEventListener("click",function(){
		currentspeed = currentspeed * 0.95;
		video.playbackRate = currentspeed;
		console.log("New speed is " + currentspeed);
	});

	speedVid.addEventListener("click",function(){
		currentspeed = currentspeed / 0.95;
		video.playbackRate = currentspeed;
		console.log("New speed is " + currentspeed);
	});

	skipAhead.addEventListener("click",function(){
		console.log("Original location "+video.currentTime);
		let newtime = video.currentTime + 15;
		if(newtime > video.duration){
			newtime = 0;
			video.currentTime = 0;
			console.log("Going back to beginning");
			console.log("New location 0");
		}
		else{
			video.currentTime = newtime;	
			console.log("New location " + newtime);
		}
	});

	muting.addEventListener("click",function(){
		if(mutestatus == true){
			mutestatus = false;
			video.muted = false;
			muting.innerHTML = "Mute";
			// console.log("Unmuted");
		}
		else{
			mutestatus = true;
			video.muted = true;
			muting.innerHTML = "Unmute";
			// console.log("Muted");
		}
	});

	sliding.addEventListener("input",function(){
		currentvolume = document.getElementById("slider").value;
		video.volume = currentvolume/100;
		document.getElementById("volume").innerHTML = currentvolume + "%";
		console.log(video.volume);
	
	});

	oldschool.addEventListener("click",function(){
		video.classList.add("oldSchool");

	});

	original.addEventListener("click",function(){
		video.classList.remove("oldSchool");
	});
};
