const { none, show, active } = {
    none: "d-none",
    show: 'show',
    active: 'active'
}
const Button = $('.btn-sign')
const menu_bar = document.getElementById("menu-bar" )
const navbar = document.querySelector('.navbar')

AOS.init();

$('.change-name-user-profile').on('click', function (){
    $('.user-profile-name').addClass(none);
    $('.form-change-name-user').removeClass(none)
})

$('.save-user-info').on('click', function (){
    $('.user-profile-name').removeClass(none);
    $('.form-change-name-user').addClass(none)
})

$('.close-green-message').on('click', function (){
    $(this).parent().addClass(none)
})


$('.open-green-message').on('click', function (){
    $('.green-message').addClass(show);

    setTimeout(() => {
        $('.green-message').removeClass(show);
    }, 3000)
})

Button.on('click', function (){
    Button.removeClass(active);
    $(this).addClass(active);
})

menu_bar.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    menu_bar.classList.toggle('active');
})


$('#table-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.dots-slider-table'),
    nextArrow: '.table-next',
    prevArrow: '.table-prev'
});
