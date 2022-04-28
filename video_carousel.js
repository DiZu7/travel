function videoUrl (url, id) {
    var previousActiveElements = document.getElementsByClassName('videos_navigation_list_bg');

    [].forEach.call(previousActiveElements, function(el) {
        el.classList.remove("videos_navigation_list_bg");
    });

    document.getElementById("videos_slider").src = url;
    let liBgColor = document.getElementById(id);
    liBgColor.classList.add("videos_navigation_list_bg");
}