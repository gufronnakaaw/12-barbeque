const burger = document.querySelector('.burger');
const sidenav = document.querySelector('.sidenav');
const overlay = document.getElementById('overlay');

window.addEventListener('scroll', function(){
    const getScrollTop = Math.round(document.documentElement.scrollTop);
    const navbar = document.querySelector('.navbar');
    
    if( getScrollTop >= 20 ){
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }

});


burger.addEventListener('click', () => {
    sidenav.classList.add('sidenav-show');
    overlay.classList.add('overlay-show');
});

overlay.addEventListener('click', function(){
    sidenav.classList.remove('sidenav-show');
    this.classList.remove('overlay-show');
});