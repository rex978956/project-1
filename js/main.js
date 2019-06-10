var last_known_scroll_position = 0;
var ticking = false;

function fixposition(scroll_pos) {
	getComputedStyle(document.documentElement);
	const init = 100;
	let menu_top = init - scroll_pos;
	const drop_top = parseInt(getComputedStyle(document.querySelector('.menu')).height);
	if (menu_top <= 0) {
		menu_top = 0;
	}
	document.documentElement.style.setProperty('--menu-top', menu_top + "px");
	document.documentElement.style.setProperty('--drop-top', menu_top + drop_top + "px");
}

window.addEventListener('scroll', function (e) {
	last_known_scroll_position = window.scrollY;
	if (!ticking) {
		window.requestAnimationFrame(function () {
			fixposition(last_known_scroll_position);
			ticking = false;
		});
	}
	ticking = true;
});


window.onload = function () {
	document.querySelector('.container').addEventListener('click', toggleMenu);

	/* ------ menu li ------ */
	document.querySelector('#menuHome>a>.icon').addEventListener('click', toggleHome);

	document.querySelector('#menuLab>a').addEventListener('click', toggleLab);

	document.querySelector('#menuAdvisor>a').addEventListener('click', toggleAdvisor);

	document.querySelector('#menuCourse>a>.icon').addEventListener('click', toggleCourse);

	document.querySelector('#menuProjects>a>.icon').addEventListener('click', toggleProjects);

	document.querySelector('#menuPublication>a>.icon').addEventListener('click', togglePublication);

	document.querySelector('#menuAwards>a>.icon').addEventListener('click', toggleAwards);

	document.querySelector('#menuAbout>a>.icon').addEventListener('click', toggleAbout);

}


function toggleHome(event) {
	event.preventDefault();
	const liItem = new Item('#nav>ul>li', '#menuHome', 'is-active');
	liItem.toggle();
}

function toggleLab(event){
	console.log("l")
	event.preventDefault();	
	const liItem = new Item('#nav>ul>li', '#menuLab', 'is-active');
	liItem.toggle();
}

function toggleAdvisor(event){
	event.preventDefault();	
	const liItem = new Item('#nav>ul>li', '#menuAdvisor', 'is-active');
	liItem.toggle();
}

function toggleCourse(event){
	event.preventDefault();	
	const liItem = new Item('#nav>ul>li', '#menuCourse', 'is-active');
	liItem.toggle();
}


function toggleProjects(event){
	event.preventDefault();	
	const liItem = new Item('#nav>ul>li', '#menuProjects', 'is-active');
	liItem.toggle();
}

function togglePublication(event){
	event.preventDefault();	
	const liItem = new Item('#nav>ul>li', '#menuPublication', 'is-active');
	liItem.toggle();
}

function toggleAwards(event){
	event.preventDefault();	
	const liItem = new Item('#nav>ul>li', '#menuAwards', 'is-active');
	liItem.toggle();
}

function toggleAbout(event){
	event.preventDefault();	
	const liItem = new Item('#nav>ul>li', '#menuAbout', 'is-active');
	liItem.toggle();
}

function toggleMenu(event) {
	event.preventDefault();

	const menuIcon1 = new Menu('#icon1', 'is-active');
	const menuIcon2 = new Menu('#icon2', 'is-active');
	const nav = new Menu('#nav', 'is-active');
	const moblieIcon = new Menu('#moblie-icon', 'is-active');

	menuIcon1.toggle();
	menuIcon2.toggle();
	nav.toggle();
	moblieIcon.toggle();

}

class Menu {
	constructor(hook, activeClassName) {
		this.DOM = document.querySelector(hook);
		this.activeClassName = activeClassName;
	}

	toggle() {
		this.DOM.classList.contains(this.activeClassName) ?
			this.DOM.classList.remove(this.activeClassName) :
			this.DOM.classList.add(this.activeClassName);
	}

	isActive() {
		return this.DOM.classList.contains(this.activeClassName);
	}
}


class Item {
	constructor(hook, liId, activeClassName) {
		this.DOMlist = document.querySelectorAll(hook);
		this.target = document.querySelector(liId);
		this.liId = liId;
		this.activeClassName = activeClassName;
	}

	toggle() {

		for (var i = 0; i < this.DOMlist.length; i++) {
			if (this.DOMlist[i].classList.contains(this.activeClassName) && this.DOMlist[i] !== this.target)
				this.DOMlist[i].classList.remove(this.activeClassName);
//			console.log(this.DOMlist[i]);
		}
//		
//		if(!this.target.classList.contains(this.activeClassName))
//			this.target.classList.add(this.activeClassName);
		
		this.target.classList.contains(this.activeClassName) ?
			this.target.classList.remove(this.activeClassName) :
			this.target.classList.add(this.activeClassName);
	}

	isActive() {
		return this.target.classList.contains(this.activeClassName);
	}
}
