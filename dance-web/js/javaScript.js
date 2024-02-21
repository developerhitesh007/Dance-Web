$(document).ready(function (){
    $('.menu-toggel').on('click', function (){
        $('ul').toggleClass('show');
    })
})
$(document).ready(function (){
    $('ul').on('click', function (){
        $('ul').toggleClass('show');
    })
})


window.addEventListener("scroll", function () {
    var sticky = document.querySelector("header");
    sticky.classList.toggle("sticky", window.scrollY > 0);
})