var slider = document.getElementsByClassName('item');
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
var i = 0;
var change = 1;
var sliderLength = slider.length;
slider[0].__proto__.addClass = function(items){
if(this.className.indexOf(items) == -1){
    this.className = this.className+' '+items;
  }
  else{
    return 0;
  }
}

slider[0].__proto__.removeClass = function(items){
  // var strs = this.className;
  if(this.className.indexOf(items) != -1){
  this.className = this.className.replace(' '+items,'');
  }
  // this.className = str;
}
slider[1].addClass('left');
slider[0].addClass('left');

slider[0].addClass('animation');
slider[1].addClass('animation');
slider[2].addClass('animation');
setTimeout(ss,0);
function ss(){
    slider[2].addClass('right');
    slider[1].removeClass('left');
    slider[1].addClass('middle');
    setTimeout(ss1,1200);
}
function ss1(){
    slider[1].removeClass('middle');
    slider[1].addClass('right');
    slider[0].removeClass('left');
    slider[0].addClass('middle');
    slider[2].removeClass('animation');
    slider[2].removeClass('right');
    slider[2].addClass('left');
    setTimeout(ss2,1200);
}

function ss2(){
    slider[2].addClass('animation');
    slider[2].removeClass('left')
    slider[2].addClass('middle');
    slider[0].removeClass('middle');
    slider[0].addClass('right');
    slider[1].removeClass('animation');
    slider[1].removeClass('right');
    slider[1].addClass('left');
    setTimeout(ss3,1200);
}

function ss3(){
    slider[1].addClass('animation');
    slider[1].removeClass('left')
    slider[1].addClass('middle');
    slider[2].removeClass('middle');
    slider[2].addClass('right');
    slider[0].removeClass('animation');
    slider[0].removeClass('right');
    slider[0].addClass('left');
    setTimeout(ss4,1200);
}
function ss4(){
    slider[0].addClass('animation');
    slider[0].removeClass('left')
    slider[0].addClass('middle');
    slider[1].removeClass('middle');
    slider[1].addClass('right');
    slider[2].removeClass('animation');
    slider[2].removeClass('right');
    slider[2].addClass('left');
    setTimeout(ss2,1200);
}
// function ss5(){
//     slider[2].addClass('animation');
//     slider[2].removeClass('left')
//     slider[2].addClass('middle');
//     slider[0].removeClass('middle');
//     slider[0].addClass('right');
//     slider[1].removeClass('animation');
//     slider[1].removeClass('right');
//     slider[1].addClass('left');
// }
// left.onclick = function(){
//   setTimeout(ss,0);
//   function ss(){
//    console.log(i);
//    if(i == 0){
//      return 0;
//    }
//    slider[i].addClass('animation');
//    slider[i].removeClass('middle');
//    slider[i].addClass('left');
//    slider[i-1].addClass('animation');
//    slider[i-1].removeClass('right');
//    slider[i-1].addClass('middle');
//    i = i - 1;
//   }
// } 
// right.onclick = function(){
//     setTimeout(ss,0);
//     function ss(){
//       console.log(i);
//       if(i == sliderLength-1){
//         return 0;
//       }
//       slider[i].addClass('animation');
//       slider[i].removeClass('left');
//       slider[i].removeClass('middle');
//       slider[i].addClass('right');
//       slider[i+1].removeClass('left');
//       slider[i+1].addClass('animation');
//       slider[i+1].addClass('middle');
//       i = i+1;
//     }
// } 


