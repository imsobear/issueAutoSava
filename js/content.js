window.onload = function() {
    var doc = document,
        content = doc.querySelector('.write-content');

    content.addEventListener('keyup', function (e) {
        var target = e.target,
            text = target.value;
        // send text to pop
        sendDatas(text);
    }, false);


    function sendDatas (datas) {
        chrome.extension.sendRequest({value: datas});
    }
    
};