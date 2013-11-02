issueAutoSava
=============

在github的issue里写文章时，有时候会误操作关闭页面，写的东西也没有保存，所以就想着写个chrome的插件解决这个问题。

初始想法是利用本地存储，监听`textfield`的`input`事件将内容自动保存，后来觉得仅仅是为了解决上面的问题完全不用这么复杂，
现在的方案是在页面关闭时做一次提醒是否要关闭，核心主要是利用js的`beforeunload`事件：

```javascript
window.addEventListener('beforeunload', function (e) {
       return '您正在编辑的 issue 还没有提交，确定要离开？';
});
```

关于这个事件，也做了一点研究，具体见[JavaScript 阻止页面关闭](https://github.com/tomayday/MyBlog/issues/28)。


--over--
