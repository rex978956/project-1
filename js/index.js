var last_known_scroll_position = 0;
var ticking = false;

function fixposition(scroll_pos) {
    var htmlStyles = getComputedStyle(document.documentElement);
    var init = 90;
    var menu_top = init - scroll_pos;
    var article_top = 75 + scroll_pos;
    var drop_top = 9.5;
    console.log("scroll_pos = " + scroll_pos);
    console.log("fixed = " + menu_top);
    if (menu_top >= 0) {
        document.documentElement.style.setProperty('--menu-top', menu_top + "px");
        document.documentElement.style.setProperty('--drop-top', drop_top + "rem");
    } else {
        document.documentElement.style.setProperty('--menu-top', "0px");
        document.documentElement.style.setProperty('--drop-top', "4rem");
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
            fixposition(last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;
});
//----- NO JS ----