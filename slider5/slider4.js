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

// setTimeout(ss,0);
slider[0].addClass('middle');
setInterval(set, 1500);
function set(){
  if(change == 0){
    return false;
  }
  setTimeout(ss,0);
  function ss(){
  if(i-1>=0){
    slider[i-1].removeClass('animation');
    slider[i-1].removeClass('right');
    slider[i-1].addClass('left');
  }
  slider[i].removeClass('left');
  slider[i].addClass('animation');
  slider[i].removeClass('middle');
  slider[i].addClass('right');
  if(i == sliderLength-1){
    // slider[sliderLength-1].removeClass('animation');
    // slider[sliderLength-1].addClass('left');
    // slider[0].addClass('middle');
    // slider[0].addClass('middle');
    // i = 0;
    slider[0].removeClass('left');
    slider[0].addClass('middle');
    // console.log('ssss');
    // change = 0;
    return false;
    i = -1;
  } 
  if(i != -1 ){
    slider[i+1].addClass('animation');
    slider[i+1].addClass('middle');
  }
  
  
  i = i+1;
  }

}
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


