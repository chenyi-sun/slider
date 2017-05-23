
var alls = document.getElementsByClassName('item');
var length = alls.length;
var itemTag = length - 1;

function set(num,classname,time){
  var start = new Date().getTime();
  var className = alls[num].getAttribute('class');
  var newClassName = className +' '+classname;
  alls[num].setAttribute('class',newClassName);
  var end = new Date().getTime();
  return(end - start);
}

function b(){
  set(itemTag,'move');
  set(itemTag-1,'middle');
  // set(itemTag-1,'move');
  // set(itemTag-2,'middle');
}

var time = set(itemTag-1, 'right');
console.log(time);
setTimeout(b,time+300);

//如何判断一段代码的执行时间
// b();
