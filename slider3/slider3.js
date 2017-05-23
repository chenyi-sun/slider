
var alls = document.getElementsByClassName('item');
var length = alls.length;
var itemTag = length - 1;

function set(num,classname,time){
  var start = new Date().getTime();
  var className = alls[num].getAttribute('class');
  var newClassName = className +' '+classname;
  alls[num].setAttribute('class',newClassName);
  var end = new Date().getTime();//计算执行的时间
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
setTimeout(b,time);
//set 一个ckassName到完全可以执行需要一定的时间，如果不设置setTimeout,会发生,setArribute直接把上面一个覆盖掉，
//一开始把最后第二个div移到右边就完全没有起效

//如何判断一段代码的执行时间
// b();
