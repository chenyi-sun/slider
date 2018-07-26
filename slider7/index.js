//https://blog.csdn.net/github_38847071/article/details/80537364
let setSlider = {
    date: { //变量
        indexNum: 0,
        initDom: GetDom('.slider-box')[0],
        setTime: 30, //图片切换的时间
        sliderWidth: 300, //图片的宽度
        sliderLength: 0, //图片的长度
        stopTime: 1200,//图片和图片切换之间的间隔时间
        timePicker: null, //setInterval时间选择器
        timeOutPicker: null, //setTimeout时间选择器
        isAuto: true
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
        this.date.sliderLength = self.imgs.length; 
        // self.imgs.length;
    },
    setImgsLoop(num){ //设置前面一张图片移动到底部
        const self = this;
        let newimgs = [];
        for(let item in self.imgs){
            if(item != 0){
                newimgs.push(self.imgs[item]);
            }
        }
        newimgs.push(self.imgs[0]);
        self.imgs = newimgs;
        self.setImgs();
        self.setImgLeft(0);
    },
    setLeft(num){
        const self = this;
        let left = 0;
        self.date.timePicker = setInterval(function(){
            if(left < self.date.sliderWidth){
                left = left + 1;
            }
            if(left == self.date.sliderWidth){
                self.setImgLeft(left);
                clearInterval(self.date.timePicker);
                self.date.timePicker = null;
                let setTime = setTimeout(function(){
                    self.setImgsLoop(self.date.indexNum);
                    clearTimeout(setTime);
                }, self.date.stopTime-1000);
                self.date.timeOutPicker = setTimeout(function(){
                    if(self.date.indexNum < self.date.sliderLength-2){
                        self.date.indexNum = self.date.indexNum + 1;
                    }
                    if(num == self.date.sliderLength-2 && self.date.isAuto){
                        num = 0;
                    }
                    if((num < self.date.sliderLength-2) && self.date.isAuto){
                        self.setLeft(self.date.indexNum);
                    }
                    clearTimeout(self.date.timeOutPicker);
                    self.date.timeOutPicker = null;
                }, self.date.stopTime);
                return false;
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
