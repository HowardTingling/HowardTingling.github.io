let navMod = document.getElementById("nav-module");
let navBar = document.getElementById("nav-bar");
let navBtn = document.getElementById("nav-btn");
let aboutBtn = document.getElementById("about-btn");
let portBtn = document.getElementById("port-btn");
let dropLocation = document.getElementById("drop-location");
let eduBtn = document.getElementById("edu-btn");
let expBtn = document.getElementById("exp-btn");
let projectsBtn = document.getElementById("projects-btn");
let homeBtn = document.getElementById("home-btn");
let contactBtn = document.getElementById("contact-btn");

let placeHolder = document.getElementById("place-holder");
let contentMod = document.getElementById("content-module");
let navHidden = false;

let aboutHTML = document.getElementById("about-content").innerHTML;
let eduHTML = document.getElementById("edu-content").innerHTML;
let expHTML = document.getElementById("exp-content").innerHTML;
let contactHTML = document.getElementById("contact-content").innerHTML;

const initBtns = () => {
	navBtn.addEventListener("click", function() {
		navMod.classList.toggle("nav-hide");
		placeHolder.classList.toggle("nav-hide");
		if (navHidden) {
			navBtn.src="./resources/blue-minus.png";
		} else {
			navBtn.src="./resources/blue-plus0.png";
		}
		navHidden = !navHidden;
	});
	aboutBtn.addEventListener("click", function() {
		placeHolder.innerHTML = aboutHTML;
	});
	portBtn.addEventListener("mouseenter", function() {
		dropLocation.classList.toggle("drop-nav");
	});
	portBtn.addEventListener("click", function() {
		dropLocation.classList.toggle("drop-nav");
	});
	dropLocation.addEventListener("mouseleave", function() {
		dropLocation.classList.remove("drop-nav");
	});
	eduBtn.addEventListener("click", function() {
		placeHolder.innerHTML = eduHTML;
		dropLocation.classList.remove("drop-nav");
	});
	expBtn.addEventListener("click", function() {
		placeHolder.innerHTML = expHTML;
		dropLocation.classList.remove("drop-nav");		
	});
	homeBtn.addEventListener("click", function() {
		placeHolder.innerHTML = "";
	});
	contactBtn.addEventListener("click", function() {
		placeHolder.innerHTML = contactHTML;
	});
}

$(document).ready(function() {
	//document.body.classList.remove("noshow");
	initBtns();
});
