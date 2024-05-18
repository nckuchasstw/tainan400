gsap.registerPlugin(ScrollTrigger);
gsap.to(".navbar",{

    scrollTrigger:{
        markers:false,
        start:"top -4%",
        
        trigger:".carousel",
        toggleClass:{ targets:".navbar",className:"navbar-active" },
    }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1700: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  },
});


  


  let tl = gsap.timeline({});

  tl.fromTo(".slo",{y:40,opacity:0,duration:0.1},{y:0,ease:"sine.out",opacity:1,duration:3});

  tl.fromTo(".nav-item",{stagger:{from: "random", 
  amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
  amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2},'-=2.5');

  tl.fromTo(".nav-item2",{stagger:{from: "random", 
  amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
  amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2},'-=2.5');

  

  tl.fromTo(".cloudleft",{repeat:-1,y:160,x:200,opacity:0.6,duration:20},{repeat:-1,y:20,x:60,ease:"sine.out",opacity:0,duration:20},'-=20');
  

  tl.fromTo(".cloudright",{repeat:-1,x:-150,y:120,opacity:0.7,duration:20},{repeat:-1,x:-300,y:30,ease:"sine.out",opacity:0,duration:20},'-=30');


  tl.fromTo(".slogan",{x:-100,opacity:0,duration:0.1},{x:20,ease:"sine.ot",opacity:1,duration:4},'+=6');


  AOS.init();
  
  	// 當用戶滾動超過20px時，顯示按鈕
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
  } else {
      topBtn.style.display = "none";
  }
}

// 當用戶點擊按鈕時，回到頁面頂部
function topFunction() {
  document.body.scrollTop = 0; // 對於Safari
  document.documentElement.scrollTop = 0; // 對於Chrome, Firefox, IE 和 Opera
}

  



   
  