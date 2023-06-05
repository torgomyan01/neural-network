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

const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})


const moreModal = new bootstrap.Modal('#more-modal', {
    keyboard: false
})

$('.services-item button').on('click', function (){
    moreModal.show();
    const title = $(this).parent().prev().children('.services-item-title').text()
    const text = $(this).data('text');

    $('#more-modal .modal-title').text(title);
    $('#more-modal .modal-body').text(text);


})