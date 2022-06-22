canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploading();
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		alphabetkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla do alfabeto";
		console.log("alphabet key");
	else{
		otherkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla de símbolo ou outra";
		console.log("other key");
	else{
		numberkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla de número";
		console.log("number key")
	else{
		specialkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla especial";
		console.log("special key")
	else{
		arrowkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla de seta";
		console.log("arrow key")
	}
}

function alphabetkey()
{
	img_image= "alfabeto.png";
	add();

}
function numberkey()
{
	img_image= "número.png";
	add();
}
function arrowkey(){
	img_image= "direcional.png";
	add();
}
function specialkey()
{
	img_image= "especial.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}