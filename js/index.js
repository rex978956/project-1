var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
    var htmlStyles = getComputedStyle(document.documentElement);
    var init = 90;
    var menu_top = init - scroll_pos;
    var article_top = 75 + scroll_pos;
    console.log("scroll_pos = " + scroll_pos);
    console.log("fixed = " + menu_top);
    if (menu_top >= 0) {
        document.documentElement.style.setProperty('--menu-top', menu_top + "px");
    } else {
        document.documentElement.style.setProperty('--menu-top', "0px");
    }
//	if (article_top <= 150) {
//		document.documentElement.style.setProperty('--article-top', article_top + "px");
//		document.documentElement.style.setProperty('--article-position', "fixed");
//	} else {
//		document.documentElement.style.setProperty('--article-top', "150px");
//		document.documentElement.style.setProperty('--article-position', "relative");
//	}
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;
});
//----- NO JS ----