const { none, show, active, hidden } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden'
}
const img_widget = document.querySelectorAll('.image-widget')

const { mobileMenu, body } = {
    mobileMenu: $('.mobile-menu'),
    body: $('body')
}

AOS.init()

$('.mobile-menu-board').on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        mobileMenu.removeClass(active)
        thisElem.removeClass(active)
        body.removeClass(hidden)
    } else {
        mobileMenu.addClass(active)
        thisElem.addClass(active)
        body.addClass(hidden)
    }
})


function clearActive(){
    img_widget.forEach(im=>{
        im.classList.remove('active')
    })
}

img_widget.forEach(el =>{
    el.addEventListener('click', ()=>{
        clearActive()
        el.classList.add('active')
    })
})