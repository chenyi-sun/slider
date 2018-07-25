//https://blog.csdn.net/github_38847071/article/details/80537364
let setSlider = {
    date: { //变量
        indexNum: 0,
        initDom: GetDom('.slider-box')[0],
        setTime: 30, //图片切换的时间
        sliderWidth: 300, //图片的宽度
        sliderLength: 0, //图片的长度
        stopTime: 1200,
        timePicker: null, //setInterval时间选择器
        timeOutPicker: null, //setTimeout时间选择器
    },
    imgs: [
        './imgs/1.png',
        './imgs/2.png',
        './imgs/3.png',
        './imgs/4.png'
    ],
    init(){
        this.setImgs();
        this.setLeft(this.date.indexNum);
    },
    setImgs(){
        const self = this;
        const sliders = '<div class="inline-box"><img src="'+self.imgs.join('"/></div><div class="inline-box"><img src="')+'"/></div>';
        this.date.initDom.innerHTML = sliders;
        this.date.sliderLength = this.imgs.length;
    },
    setImgsLoop(num){ //设置前面一张图片移动到底部
        console.log(num);
    },
    setLeft(num){
        const self = this;
        let left = num*self.date.sliderWidth;
        self.date.timePicker = setInterval(function(){
            if(left < self.date.sliderWidth * (self.date.indexNum+1)){
                left = left + 1;
            }
            if(left == self.date.sliderWidth * (self.date.indexNum+1)){
                self.setImgLeft(left);
                clearInterval(self.date.timePicker);
                self.date.timePicker = null;
                self.date.timeOutPicker = setTimeout(function(){
                    if(self.date.indexNum < self.date.sliderLength-2){
                        self.date.indexNum = self.date.indexNum + 1;
                    }
                    if(num < self.date.sliderLength-2){
                        self.setLeft(self.date.indexNum);
                    }
                    clearTimeout(self.date.timeOutPicker);
                    self.date.timeOutPicker = null;
                }, self.date.stopTime);
            }
            self.setImgLeft(left);
        }, self.setTime);

    },
    setImgLeft(left){
        const self = this;
        self.date.initDom.style.left = - left + 'px';
    }
}

setSlider.init();
