/**
 * 自定义分页器插件
 */
(function (window) {
    /**
     * 构造函数
     * @param {*} className 
     * @param {*} options 
     */
    function Pagination(className, options) {
        var deaultOptions = {
            total: 0,
            page: 1,
            pageSize: 10,
            preText: '上一页',
            nextText: '下一页',
            maxBtnCount: 5
        };
        this.container = document.getElementsByClassName(className)[0]
        this.options = Object.assign({}, deaultOptions, options);
        this.show();
        // this.pageClick();
    }

    /**
     * 初始化
     */
    Pagination.prototype.show = function () {
        this.init();
    }

    /**
     * 初始化
     * @param {*} page 
     */
    Pagination.prototype.init = function (page) {
        this.options.page = page;
        const {
            preText,
            nextText,
            maxBtnCount
        } = this.options;
        // 获取最大页码数
        var maxPageTotal = this.getMaxPageTotal();
        // 显示最大页码按钮数
        var showBtnCount = maxPageTotal > 5 ? 5 : maxPageTotal;
        var pageInnerHtml = '';
        pageInnerHtml += '<div class="pagination-wrapper">';
        pageInnerHtml += `<span class="disabeld pre">${preText}</span>`;
        // 页码按钮开始到结束
        var start = 1;
        var end = start + maxBtnCount;
        // if (page === 1) {
        //     start = page
        // } else if (page === maxPageTotal) {
        //     if () {} else {}
        // }
        for (var i = start; i < end; i++) {
            var pageEle = `<span class="page-item">${i}</span>`
            pageInnerHtml += pageEle
        }
        pageInnerHtml += `<span class="next">${nextText}</span>`;
        pageInnerHtml += ' </div>';
        this.container.innerHTML = pageInnerHtml
    }

    /**
     * 获取最大页码
     */
    Pagination.prototype.getMaxPageTotal = function () {
        return Math.ceil(this.options.total / this.options.pageSize)
    }

    console.log(121)
    // 绑定到window
    window.Pagination = Pagination;
})(window)