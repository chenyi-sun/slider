var slider = document.getElementsByClassName('item');
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
var i = 0;
var sliderLength = slider.length;
slider[0].__proto__.classN = 
slider[0].__proto__.addClass = function(items){

  if(this.className.indexOf(items) == -1){
    this.className = this.className+' '+items;
    // 
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

left.onclick = function(){
  setTimeout(ss,0);
  function ss(){
   console.log(i);
   if(i == 0){
     return 0;
   }
   slider[i].addClass('animation');
   slider[i].removeClass('middle');
   slider[i].addClass('left');
   slider[i-1].addClass('animation');
   slider[i-1].removeClass('right');
   slider[i-1].addClass('middle');
   i = i - 1;
  }
} 
right.onclick = function(){
    setTimeout(ss,0);
    function ss(){
      console.log(i);
      if(i == sliderLength-1){
        return 0;
      }
      slider[i].addClass('animation');
      slider[i].removeClass('left');
      slider[i].removeClass('middle');
      slider[i].addClass('right');
      slider[i+1].removeClass('left');
      slider[i+1].addClass('animation');
      slider[i+1].addClass('middle');
      i = i+1;
    }
} 

// slider[0].style.right = '-100%';
