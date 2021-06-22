$(document).ready(function () {
    let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile_nav');
hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open_menu');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open_menu');
});
    AOS.init();
    var typed = new Typed('.typed2', {
        strings: [
        "Alif Hasan Shah", 
        
    ],
        typeSpeed: 30,
        backSpeed: 50,
        loop:true
      });
});