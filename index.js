const menuBtn = $('.menu-btn');
const headerNav = $('.header-nav');

menuBtn.on('click', function(){
    headerNav.toggleClass('active');
});