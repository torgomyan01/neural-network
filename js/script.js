const { none, show, active, hidden, opacity25, disabled } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25',
    disabled: 'disabled'
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



const presets = $('.box-col2 .box-content-footer .images .image');


presets.on('click', function (){
    presets.removeClass(active);
    $(this).addClass(active);
    $('.def-btn.pink').removeClass(disabled).removeAttr('disabled');

    $('.box-col2 .box-content').css('padding', '0 5rem');
    $('#upload-block').removeClass(none);
    $('#video').addClass(none);
    $('#video source').attr('src', `assets/videos/${this.dataset.videourl}`);
    $('.box-content-heading').text('File Uploaded')

})

$('.def-btn.pink').on('click', function (){
    $('.box-col2 .box-content').css('padding', '0');
    $('#upload-block').addClass(none);
    $('#video').removeClass(none);
    document.getElementById('video').load();
    document.getElementById('video').play();
    $('#video source').attr('src', this.dataset.videourl);
    $('.box-content-heading').text('Upload a video that has people walking. Format: mpg, mpeg, mp4')
})