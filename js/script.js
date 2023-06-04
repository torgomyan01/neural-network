const { none, show, active, hidden, opacity25 } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25'
}
const img_widget = document.querySelectorAll('.image-widget')
const box_item = document.querySelectorAll('.box-item')

const { mobileMenu, body, imageWidget } = {
    mobileMenu: $('.mobile-menu'),
    body: $('body'),
    imageWidget: $('.image-widget'),
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

imageWidget.on('click', function (){
    imageWidget.addClass(opacity25);
    $(this).removeClass(opacity25)
})

