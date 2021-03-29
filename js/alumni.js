$(function () {
    $('.detail-btn').click(function () {
        $.getScript('/js/dialog.js', function () {
            show();
        })
    })
})