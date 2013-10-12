window.onload = function() {
    var doc = document,
    layer = doc.createElement('div'),
    p = doc.createElement('p'),
    staySpan = doc.createElement('span'),
    leaveSpan = doc.createElement('span');

    p.innerHTML = '您正在编辑的 issue 还没有提交，确定要离开？';
    staySpan.setAttribute('class', 'layer-stay');
    leaveSpan.setAttribute('class', 'layer-leave');
    staySpan.innerHTML = '继续编辑';
    leaveSpan.innerHTML = '离开页面';

    layer.classList.add('leave-layer');
    layer.appendChild(p);
    layer.appendChild(leaveSpan);
    layer.appendChild(staySpan);

    doc.body.appendChild(layer);

    window.addEventListener('beforeunload', function (e) {
        // e.preventDefault();
        // layer.classList.remove('layer-hide');
        // layer.style.display = 'block';

        // 输入框focus
        // 可提交issue
        // 可提交评论
        var isFocused = doc.querySelector('#write_bucket_').classList.contains('focused'),
            isSubmit = !doc.querySelector('.button.primary:disabled'),
            idSubmitComment = doc.querySelector('.js-comment-and-button'),
            isSth = !!doc.querySelector('#issue_body').value,
            isComment = !!doc.querySelector('.js-comment-field').value;

        if (isFocused || isSubmit || idSubmitComment || isSth || isComment) {
            
            return '您正在编辑的 issue 还没有提交，确定要离开？';

        }
    });


    doc.addEventListener('click', function(e) {
        var target = e.target,
        layer = doc.getElementsByClassName('leave-layer')[0];

        if (target.classList.contains('layer-stay')) {
            //点击了继续编辑的按钮
            layer.classList.add('layer-hide');
        } else if (target.classList.contains('layer-leave')) {
            //点击了离开页面的按钮
        } else {
            return;
        }
    }, false);

};