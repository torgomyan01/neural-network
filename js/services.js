
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