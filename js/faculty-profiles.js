$(function () {
    var historyInnerHtml = '';
    var historyWrapper = $('.faculty-history-content');
    var historyList = [{
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
        {
            imageUrl: './images/history-1.png',
            content: '设立电机专科（预科一年，专科三年）',
            time: '1908年',
        },
    ];
    var hollowSvg = '<svg t="1617085165867" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="660" width="16" height="16" data-spm-anchor-id="a313x.7781069.0.i5"><path d="M512 1006.34L203.038 512 512 17.66 820.962 512 512 1006.34zM320.962 512L512 817.66 703.037 512 512 206.34 320.962 512z" p-id="661" fill="#bc1c21"></path></svg>'
    var solidSvg = '<svg t="1617085724929" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1159" width="16" height="16"><path d="M762 512L512 912 262 512l250-400z" p-id="1160" fill="#bc1c21"></path></svg>'
    if (historyList && historyList.length > 0) {
        historyInnerHtml = '<div class="middle-line"></div>';
        historyInnerHtml += ' <div class="list">';
        for (var i = 0; i < historyList.length; i++) {
            var item = historyList[i];
            historyInnerHtml += '<div class="list-item d-flex flex-row">';
            historyInnerHtml += `<div class='left ${i % 2 == 0 ? 'only-content':''}'>`;
            if (i % 2 == 1) {
                historyInnerHtml += item.imageUrl ? '<img src="' + item.imageUrl + '" alt=""/>' : ''
            } else {
                historyInnerHtml += '<div class="time">' + item.time + '</div>';
                historyInnerHtml += '<div class="content">' + item.content + '</div>';
            }
            historyInnerHtml += '</div>';
            historyInnerHtml += '<div class="mid">'
            if (item.imageUrl) {
                historyInnerHtml += '<div class="top-hollow hollow">' + hollowSvg + '</div>';
                historyInnerHtml += '<div class="bottom-hollow hollow">' + hollowSvg + '</div>';

            }
            historyInnerHtml += '<div class="hollow">' + solidSvg + '</div>';;
            historyInnerHtml += '</div>'
            historyInnerHtml += `<div class='right ${i % 2 == 1 ? 'only-content':''}'>`;
            if (i % 2 == 0) {
                historyInnerHtml += item.imageUrl ? '<img src="' + item.imageUrl + '" alt=""/>' : ''
            } else {
                historyInnerHtml += '<div class="time">' + item.time + '</div>';
                historyInnerHtml += '<div class="content">' + item.content + '</div>';
            }
            historyInnerHtml += '</div>'
            historyInnerHtml += '</div>';
        }
        historyInnerHtml += '</div>';
    }
    historyWrapper.html(historyInnerHtml);
})