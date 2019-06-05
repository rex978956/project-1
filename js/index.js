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

//var s = document.getElementsByTagName("h1");
//console.log(document.getElementsByTagName("h1")[0].innerText);
