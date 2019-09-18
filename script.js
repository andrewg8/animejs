var animation = anime({
    targets: '.text',
    duration: 1000,
    color: "rgb(35,7,77)",
    keyframes: [
        {color: "rgb(35,7,77)"},
        {color: "#cc5333"},
        {color: "#FFF"}
    ],
    translateX: 400,
    skewX:45,
    rotateZ: 80,
    scaleX: 10,
    scaleY: 10,
    easing: 'easeInQuad',
    autoplay: false,
    direction: 'alternate'
})

var scrollPos;



$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    animation.seek(animation.duration * (scrollPos / 500));

});