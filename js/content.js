window.onload = function() {
    var doc = document,
        isSubmit = false;

    window.addEventListener('beforeunload', function (e) {
        // 输入框focus
        // 可提交issue
        // 可提交评论
        var target = e.target,
            isFocused = doc.querySelector('#write_bucket_').classList.contains('focused'),
            isSubmit = !doc.querySelector('.button.primary:disabled'),
            idSubmitComment = doc.querySelector('.js-comment-and-button'),
            isSth = !!doc.querySelector('#issue_body').value;

        // 点击的是提交按钮时就不弹窗
        if (isFocused || isSubmit || idSubmitComment || isSth) {
            return '您正在编辑的 issue 还没有提交，确定要离开？';
        }
    });
};