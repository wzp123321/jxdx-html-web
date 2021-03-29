var closeBtn = $('.close-btn')

function show() {
    $('.dialog').show();
}
closeBtn.click(function () {
    $('.dialog').hide();
})