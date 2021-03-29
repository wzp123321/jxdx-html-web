$(function () {
    $('.employ-item>.detail').click(function () {
        $.getScript('/js/dialog.js',function(){
            show();
        })
    })
})