const { none, show, active } = {
    none: "d-none",
    show: 'show',
    active: 'active'
}

const { mobileMenu } = {
    mobileMenu: $('.mobile-menu')
}

$('.mobile-menu-board').on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        mobileMenu.removeClass(active)
        thisElem.removeClass(active)
    } else {
        mobileMenu.addClass(active)
        thisElem.addClass(active)
    }
})