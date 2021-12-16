var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);


// image slider 
var slider_img = document.querySelector('.slider-img');
var images = ['room1.jpeg', 'room2.jpg', 'room3.jpg', 'room4.jpg', 'room5.jpg', 'room6.jpg', 'room7.jpg', 'room8.jpg', 'room9.jpg', 'room10.jpg', 'room11.jpeg', 'room12.jpg', 'room13.jpeg', 'room14.jpg', 'room15.jpg', 'room16.jpg', 'room17.jpg', 'room18.jpg', 'room19.jpg', 'room20.jpg', 'room21.jpg', 'room22.jpg', 'room23.jpg', 'room24.jpg', 'room25.jpg', 'room26.jpg', 'room27.jpg', 'room28.jpg', 'room29.jpg', 'room30.jpg', 'room31.jpg', 'room32.jpg', 'room33.jpg', 'room34.jpg', 'room35.jpg', 'room36.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}




// power button 
var myDiv = document.getElementById("myDiv");

/* document.getElementById("in").addEventListener("click", function () {
    myDiv.className = myDiv.className.replace(/fade-out/, "").trim() + " fade-in";
}, false); */

document.getElementById("out").addEventListener("click", function () {
    myDiv.className = myDiv.className.replace(/fade-in/, "").trim() + " fade-out";
}, false);


// show happy gif

var b = false;

function toggle_visibility(id) {
    var e = document.getElementById(id);
     if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    b = true;
}

function foo() {
    var e = document.getElementById('foo');
    if(!b) e.style.display = 'none';
    b=false;
}

// mouse spotlight 

function update(e){
	var x = e.clientX || e.touches[0].clientX
	var y = e.clientY || e.touches[0].clientY
  
	document.documentElement.style.setProperty('--cursorX', x + 'px')
	document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)