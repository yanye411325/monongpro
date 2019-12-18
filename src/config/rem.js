

const baseSize = 32
// 设置 rem 函数
function setRem () {
 // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
 const scale = document.documentElement.clientWidth / 750
 // 设置页面根节点字体大小
 document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
 setRem()
}







//禁止手机返回键    下面这段代码直接复制在index.html中，可以生效
//	$(document).ready(function() {
/*if (window.history && window.history.pushState) {
  window.addEventListener('popstate',function () {
    window.history.pushState('forward', null, '#');
    window.history.forward(1);
  })
}
window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
window.history.forward(1);*/
//	});
