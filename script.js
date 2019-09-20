var relativeEl = document.querySelector('.text');
relativeEl.style.transform = 'rotateZ(-10deg)';


var animation = anime({
    targets: '.text',
    duration: 1000,
    skewX:-35,
    rotateZ: 15,
    scaleX: .8,
    scaleY: 1,
    easing: 'linear',
    autoplay: false,
    direction: 'alternate'
})

var scrollPos;



$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    animation.seek(animation.duration * (scrollPos / 600));

});