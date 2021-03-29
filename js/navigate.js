$(function () {
    var navs = $('.common-navigate-list>span')
    onTabsHeightLight(1);

    navs.click(function () {
        onTabsHeightLight($(this).attr('data-tab'));
    })

    function onTabsHeightLight(index) {
        navs.removeClass('active-tab')
        var curNav = $('.common-navigate-list>span' + ':nth-child(' + index + ')')
        curNav.addClass('active-tab')

        var modules = $('.components>.navitage_component');
        modules.hide();
        var curModule = $('.components>.navitage_component' + ':nth-child(' + index + ')')
        curModule.show();
    }
})