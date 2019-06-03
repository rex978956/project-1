function rb_click() {
    var element, name, arr, index;
    arr = document.getElementsByTagName("iframe");

    for (var element in arr) {
        console.log(element);
        if (arr[element].className == "active") {
            arr[element].className = "unactive";
            break;
        }
    }
    console.log(index);
    // name = "active";
    // arr[index + 1].className = name;
    // console.log(arr[index + 1].className);

    // if (arr.indexOf(name) == -1) {
    //     element.className = name;
    // }
}

function lb_click() {
    var Today = new Date();
    alert("今天日期是 " + Today.getFullYear() + " 年 " + (Today.getMonth() + 1) + " 月 " + Today.getDate() + " 日");
}