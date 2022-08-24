//auto-change img for cool dog
let image = document.getElementById('cool-dog')
let multicooldog= [
	"img/cool-dog1.png",
	"img/cool-dog2.png",
	"img/cool-dog3.png"
]

setInterval(function(){
	let random = Math.floor(Math.random()* 3);
	image.src = multicooldog[random];
},50);

