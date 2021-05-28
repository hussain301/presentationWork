const btnForward = document.querySelector('.btn');
const btnBackward = document.querySelector('.btn1');
const title1 = document.querySelector('.title1');
const title2 = document.querySelector('.title2');
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const slide3p = document.querySelector('.slide3p');
const slide4 = document.querySelector('.slide4');
const slide4p = document.querySelector('.slide4p')
const slide5 = document.querySelector('.slide5');
const slide6 = document.querySelector('.slide6')
const slide6p = document.querySelector('.slide6p')
const slide7 = document.querySelector('.slide7')

const MAX_SLIDE = 8;

let countSlide = 1;
const allopacity = function(){
    title1.style.opacity = 0;
    title2.style.opacity = 0;
    slide1.style.opacity = 0;
    slide2.style.opacity = 0;
    slide3.style.opacity = 0;
    slide3p.style.opacity = 0;
    slide4.style.opacity = 0;
    slide4p.style.opacity = 0;
    slide5.style.opacity = 0;
    slide6.style.opacity = 0;
    slide6p.style.opacity = 0;
    slide7.style.opacity = 0;
}
   
    const slider = function(){
    if(countSlide<=MAX_SLIDE){
    if(countSlide === 1){
        allopacity();
        title1.style.opacity = 1;
        title2.style.opacity = 1;
    
    }
     else if(countSlide===2){
         allopacity();
         slide1.style.opacity = 1;
         document.body.style.backgroundImage = 'url("resized-image-Promo.jpeg")';
        }   
        else if(countSlide===3){
            allopacity();
            slide2.style.opacity = 1;
            document.body.style.backgroundImage = 'url("resized-image-Promo2.jpeg")';
        }
        else if(countSlide===4){
            allopacity();
            slide3.style.opacity = 1;
            slide3p.style.opacity = 1;
            document.body.style.backgroundImage = 'url("2560x1440.png")';
        }
        else if(countSlide===5){
            allopacity();
            slide4.style.opacity = 1;
            slide4p.style.opacity = 1;
            document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper(5).jpg")';
        }
        else if(countSlide===6){
            allopacity();
            slide5.style.opacity = 1;
            document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper(4).jpg")';
        }
        else if(countSlide===7){
            allopacity();
            slide6.style.opacity = 1;
            slide6p.style.opacity = 1;
            document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper(2).jpg")';
        }
        else if(countSlide===8){
            allopacity();
            slide7.style.opacity = 1;
            document.body.style.backgroundImage = 'url("pexels-anni-roenkae-2318025.jpg")';
        }
        countSlide++;
    }
}

const sliderbackward = function () {
    if(countSlide>2){
        if(countSlide===9){
            allopacity();
            slide6.style.opacity = 1;
            slide6p.style.opacity = 1;
            document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper(2).jpg")';
        }
        else if(countSlide===8){
            allopacity();
            slide5.style.opacity = 1;
            document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper(4).jpg")';
        }
        else if(countSlide===7){
            allopacity();
            slide4.style.opacity = 1;
            slide4p.style.opacity = 1;
            document.body.style.backgroundImage = 'url("wallpaperflare.com_wallpaper(5).jpg")';
        } 
        else if(countSlide===6){
            allopacity();
            slide3.style.opacity = 1;
            slide3p.style.opacity = 1;
            document.body.style.backgroundImage = 'url("2560x1440.png")';
        } 
        else if(countSlide===5){
            allopacity();
            slide2.style.opacity = 1;
            document.body.style.backgroundImage = 'url("resized-image-Promo2.jpeg")';
        }
        else if(countSlide===4){
            allopacity();
            slide1.style.opacity = 1;
            document.body.style.backgroundImage = 'url("resized-image-Promo.jpeg")';
           }        
           if(countSlide === 3){
            allopacity();
            title1.style.opacity = 1;
            title2.style.opacity = 1;
        document.body.style.backgroundImage = "url('wallpaperflare.com_wallpaper(1).jpg')";
        }
        countSlide--;
    }
}
btnBackward.addEventListener('click', sliderbackward);
btnForward.addEventListener('click' , slider)
