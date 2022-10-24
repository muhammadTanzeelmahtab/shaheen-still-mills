// ______about slider start________
var text_1 = document.querySelector("#text_1");
var text_2 = document.querySelector("#text_2");
var text_3 = document.querySelector("#text_3");
var textshow = document.querySelector(".text_show");
var btn_2 = document.querySelector("#btn_2");
var btn_1 = document.querySelector("#btn_1");

function text_show(){
    textshow.classList.remove("text_show");
    text_2.style.display = "none";
    text_3.style.display = "none";
    btn_2.style.display = "inline-block";
    btn_1.style.display = "none";
}

function text_off(){
    textshow.classList.add("text_show");
    text_2.style.display = "block";
    text_3.style.display = "block";
    btn_2.style.display = "none";
    btn_1.style.display = "inline-block";
     
}

var i = 0;
var images = [];
var time = 3000;

images[0] = "Images/about 7.jpg";
images[1] = "Images/about.jpg";
images[2] = "Images/about3.jpg";
images[3] = "Images/ludomil-sawicki-D87HetwE6es-unsplash.jpg";
images[4] = "Images/ant-rozetsky-io7dX_1EFCg-unsplash.jpg";
images[5] = "Images/about 1.jpg";
images[6] = "Images/chris-leboutillier-c7RWVGL8lPA-unsplash.jpg";



function changeimages(){
    document.slide.src = images[i];
    if(i < images.length -1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeimages()", time);
}
window.onload = changeimages;
// ______about slider end________

// ______client slider start________
Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="car-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="car"
        :style="cardStyle">
        <div class="car-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="car-inf">
          <slot name="hea_1"></slot>
          <slot name="cont_1"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -28;
      const tY = this.mousePY * -28;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});

const app = new Vue({
  el: '#app'
});
//_______client slider end________

//_______product slider start________
var btns = document.getElementsByClassName("btns");
var pro_r = document.getElementById("pro-r");


btns[0].onclick = function(){
    pro_r.style.transform = "translateX(0px)";
    for(var i = 0; i < 4; i++){
        btns[i].classList.remove("star");
    }
    this.classList.add("star");
}
btns[1].onclick = function(){
    pro_r.style.transform = "translateX(-800px)";
    for(var i = 0; i < 4; i++){
        btns[i].classList.remove("star");
    }
    this.classList.add("star");
}
btns[2].onclick = function(){
    pro_r.style.transform = "translateX(-1600px)";
    for(var i = 0; i < 4; i++){
        btns[i].classList.remove("star");
    }
    this.classList.add("star");
}
btns[3].onclick = function(){
    pro_r.style.transform = "translateX(-2400px)";
    for(var i = 0; i < 4; i++){
        btns[i].classList.remove("star");
    }
    this.classList.add("star");
}
// ______product slider end________

// ______client slider start________
// var apple = document.getElementById("app");
// var btnes = document.getElementsByClassName("btnes");
// var lea_1 = document.getElementById("lea_1");
// var lea_2 = document.getElementById("lea_2");

// btnes[1].onclick = function(){
//     lea_1.style.display = "none";
//     lea_2.style.display = "block";
//     for(var i = 0; i < 2; i++){
//       btnes[i].classList.remove("stars");
//     }
//     this.classList.add("stars");
//   }
//   btnes[0].onclick = function(){
//     lea_2.style.display = "none";
//     lea_1.style.display = "block";
//     for(var i = 0; i < 2; i++){
//         btnes[i].classList.remove("stars");
//     }
//     this.classList.add("stars");
//   }
// var btnes = document.getElementsByClassName("btnes");
// var apple = document.getElementById("app");

// btnes[0].onclick = function(){
//   apple.style.transform = "translateX(0px)";
//   for(var i = 0; i < 2; i++){
//       btnes[i].classList.remove("stars");
//   }
//   this.classList.add("stars");
// }
// btnes[1].onclick = function(){
//   apple.style.transform = "translateX(-1238px)";
//   for(var i = 0; i < 2; i++){
//       btnes[i].classList.remove("stars");
//   }
//   this.classList.add("stars");
// }
// var count = 1;
// setInterval(function(){
//     document.getElementById('mai1' + count).checked = true;
//     count++;
//     if(count > 2){
//         count = 1;
//     }
// }, 1000);
// ______client slider end________

// ______scroll-up slider start________
$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  })

  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
  });
});
// ______scroll-up slider end________

