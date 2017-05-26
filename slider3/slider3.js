var alls = document.getElementsByClassName('item');
var length = alls.length;
var itemTag = length - 1;//最后一个元素

function set(num,classname,time){
  var start = new Date().getTime();
  if(!hasClass(num,classname)){
  var className = alls[num].getAttribute('class');
  var newClassName = className +' '+classname;
  alls[num].setAttribute('class',newClassName);
  }
  var end = new Date().getTime();//计算执行的时间
  return(end - start);
}

function removeClass(num, classname){
  var className = alls[num].getAttribute('class');
  var reg = new RegExp('(\\s|^)' + classname + '(\\s|$)');
  var newClassName = className.replace(reg,' ');
  alls[num].setAttribute('class',newClassName);
}

function hasClass(num,classname){
  var className = alls[num].getAttribute('class');
  if(className.indexOf(classname)>-1){
    return true;
  }
  else{
    return false;
  }
}

function init(preTag,nextTag,before){
  set(preTag,'middle');
  set(nextTag,'right');
}

function move(preTag,nextTag){
  set(preTag,'move');
  set(nextTag,'middle');
};

function setright(itemTag){
    removeClass(itemTag,'middle');
    removeClass(itemTag,'move');
    set(itemTag,'right');
}

var i = itemTag;
var counts = itemTag;
function start(){
  counts = counts - 1;
  if(counts == 0){
    console.log('结束');
    return false;
  }else{
     start();
  }

  setTimeout("init(itemTag,itemTag-1,itemTag+1)",0);
  setTimeout("move(itemTag,itemTag-1)",300);
  setTimeout("setright(itemTag)",1300);
  console.log(counts+'===');

  // start();
}
start();

  // setTimeout("init(itemTag-1,itemTag-2,itemTag)",1600);
  // setTimeout("move(itemTag-1,itemTag-2)",1900);
  // setTimeout("setright(itemTag-1)",2900);
  //
  // setTimeout("init(itemTag-2,itemTag,itemTag-1)",3200);
  // setTimeout("move(itemTag-2,itemTag)",3500);
  // setTimeout("setright(itemTag-2)",4500);
  //
  // setTimeout("init(itemTag,itemTag-1,itemTag+1)",4800);
  // setTimeout("move(itemTag,itemTag-1)",5100);
  // setTimeout("setright(itemTag)",6400);

  // setTimeout("init(itemTag-1,itemTag-2,itemTag)",1600);
  // setTimeout("move(itemTag-1,itemTag-2)",1900);
  // setTimeout("setright(itemTag-1)",2900);
  // setTimeout("init(itemTag-1,itemTag-2,itemTag)",1300);
  // setTimeout("move(itemTag-1,itemTag-2)",1600);
  //
  // setTimeout("init(itemTag-1,itemTag-2,itemTag)",1300);
  // setTimeout("move(itemTag-1,itemTag-2)",1600);
