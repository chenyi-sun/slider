
var alls = document.getElementsByClassName('item');
var length = alls.length;
var itemTag = length - 1;
// function a(){
  var className = alls[itemTag-1].getAttribute('class');
  var newClassName = className +' '+'right';
  alls[itemTag-1].setAttribute('class',newClassName);
// }

// function b(){
  var className2 = alls[itemTag].getAttribute('class');

  var newClassName2 = className2 +' '+'move';
  alls[itemTag].setAttribute('class',newClassName2);

  var className3 = alls[itemTag-1].getAttribute('class');
  console.log(className3);
  var newClassName3 = className3 +' '+'middle';

  alls[itemTag-1].setAttribute('class',newClassName3);
// }
a();
// setTimeout(b,100);
b();

//如何判断一段代码的执行时间
// b();
