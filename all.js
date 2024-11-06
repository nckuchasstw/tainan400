gsap.registerPlugin(ScrollTrigger);
gsap.to(".navbar",{

    scrollTrigger:{
        markers:false,
        start:"top -4%",
        
        trigger:".carousel",
        toggleClass:{ targets:".navbar",className:"navbar-active" },
    }
})

document.addEventListener('DOMContentLoaded', function () {
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

  var swiperContainer = document.querySelector('.mySwiper');

  swiperContainer.addEventListener('mouseenter', function () {
    swiper.autoplay.stop();
  });

  swiperContainer.addEventListener('mouseleave', function () {
    swiper.autoplay.start();
  });
});


  


  let tl = gsap.timeline({});

  tl.fromTo(".瞻望.svg",{y:-70,opacity:0,duration:0.1},{y:0,ease:"sine.out",opacity:1,duration:3});

  tl.fromTo(".nav-item",{stagger:{from: "random", 
  amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
  amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2},'-=2.5');

  tl.fromTo(".nav-item2",{stagger:{from: "random", 
  amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
  amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2},'-=2.5');

  

  // tl.fromTo(".chi",{repeat:-1,x:-10,opacity:1,duration:0.1},{repeat:-1,x:10,ease:"sine.out",opacity:0,duration:5},'-=2.5');

  // tl.fromTo(".anping",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"bounce.out",opacity:1,duration:0.5},'-=5');

  // tl.fromTo(".banyan",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"bounce.out",opacity:1,duration:0.5});

  // tl.fromTo(".gate",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"slow(0.7, 0.7, false)",opacity:1,duration:0.1});

  // tl.fromTo(".temple",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"power2.out",opacity:1,duration:0.4});

  // tl.fromTo(".train",{repeat:-1,y:-2,x:-2,opacity:1,duration:20},{repeat:-1,y:-20,x:-25,ease:"sine.out",opacity:1,duration:20},'-=4');

  

  tl.fromTo(".cloudleft",{repeat:-1,y:160,x:200,opacity:0.6,duration:20},{repeat:-1,y:20,x:60,ease:"sine.out",opacity:0,duration:20},'-=20');
  

  tl.fromTo(".cloudright",{repeat:-1,x:-150,y:120,opacity:0.7,duration:20},{repeat:-1,x:-300,y:30,ease:"sine.out",opacity:0,duration:20},'-=30');

  // tl.fromTo(".ship",{repeat:-1,y:-300,x:-400,opacity:1,duration:20},{repeat:-1,y:80,x:190,ease:"sine.out",opacity:1,duration:20},'-=49');

  // tl.fromTo(".person",{repeat:-1,y:260,x:300,opacity:1,duration:40},{repeat:-1,y:-80,x:-400,ease:"sine.out",opacity:1,duration:40},'-=25');


  tl.fromTo(".slogan",{y:100,x:90,opacity:0.4,duration:0.1},{y:-100,x:40,ease:"sine.ot",opacity:1,duration:4},'+=6');

  tl.fromTo(".slogan3",{x:-90,opacity:0,duration:0.1},{x:90,ease:"sine.ot",opacity:1,duration:4},'-=5');

  

 




  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  $( "#calendar").fullCalendar({
    timeZone: 'UTC',
    // 參數設定[註1]
    header: { // 頂部排版
      right: "today prev,next ", // 左邊放置上一頁、下一頁和今天
        center: "title", // 中間放置標題
       left: "month,basicWeek,basicDay" // 右邊放置月、周、天
    },
    buttonText:{
        today:'今日',
        month:'月',
        week:'週',
        day:'日',
    },
    height: 600,
    dateNames:['今天'],
    monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNames:['週日','週一','週二','週三','週四','週五','週六'],
    dayNamesShort:['週日','週一','週二','週三','週四','週五','週六'],
    defaultDate: "2024-11-01", // 起始日期
    weekends: true, // 顯示星期六跟星期日
    // editable: true,  // 啟動拖曳調整日期
    eventBackgroundColor:'#B69664',
    eventBorderColor:'#B69664',
    
    events: [ // 事件
        { // 事件(包含開始時間、結束時間)
            title: "「一首歌，一個時代」音樂會",
            start: "2023-04-19T19:00:00",
            end: "2023-04-19T21:00:00",
            url:"https://tainan-400.com/activity01.html",
        },
        { // 事件(包含開始時間、結束時間)
            title: "「細說臺灣鐵道百年史：火車歷史的軌跡與現況」專題演講",
            start: "2023-09-19T15:10:00",
            end: "2023-09-19T17:10:00",
            url:"https://tainan-400.com/activity02.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「臺灣荷治時期的鹿與原住民」專題演講",
            start: "2023-09-20T10:10:00",
            end: "2023-09-20T12:10:00",
            url:"https://tainan-400.com/activity12.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「從牛車到五分車—來蔗走走」走讀",
            start: "2023-09-23T08:45:00",
            end: "2023-09-23T16:30:00",
            url:"https://tainan-400.com/activity03.html",
           
        },
        { // 事件(包含開始時間、結束時間)
          title: "2023「臺南國際人權藝術節」記者會",
          start: "2023-09-27T10:00:00",
          end: "2023-09-27T12:00:00",
          url:"https://www.tihrf-nckumuseum.com/",
         
      },
        { // 事件(包含開始時間、結束時間)
          title: "「迢迢織路：臺南紡織工業 400 年」專題演講",
          start: "2023-09-27T15:10:00",
          end: "2023-09-27T17:10:00",
          url:"https://tainan-400.com/activity13.html",
         
      },
        { // 事件(包含開始時間、結束時間)
            title: "「重塑被邊緣的歷史—全球史視角的台語影視發展史」專題演講",
            start: "2023-10-04T15:10:00",
            end: "2023-10-04T17:10:00",
            url:"https://tainan-400.com/activity04.html",
           
        },
      
      { // 事件(包含開始時間、結束時間)
        title: "「鬥鬧熱走唱隊」演出",
        start: "2023-10-14T13:45:00",
        end: "2023-10-14T14:15:00",
        url:"activity17.html",
      },
        { // 事件(包含開始時間、結束時間)
            title: "「府城飲食文化的趣味」專題演講",
            start: "2023-10-19T15:10:00",
            end: "2023-10-19T17:10:00",
            url:"https://tainan-400.com/activity05.html",
           
        },
        { // 事件(包含開始時間、結束時間)
          title: "詩光墨影——黃華安成大文學院之美個展",
          start: "2023-10-30T09:00:00",
          end: "2023-11-14T17:00:00",
          url:"activity18.html",
         
      },
      { // 事件(包含開始時間、結束時間)
        title: "「詩光墨影——黃華安成大文學院之美個展」開幕式",
        start: "2023-11-04T09:30:00",
        end: "2023-11-04T12:00:00",
        url:"activity18.html",
       
    },
        { // 事件(包含開始時間、結束時間)
            title: "「臺南400」演唱會",
            start: "2023-11-08T19:00:00",
            end: "2023-11-08T21:00:00",
            url:"https://tainan-400.com/activity11.html",
           
        },
      //   { // 事件(包含開始時間、結束時間)
      //     title: "國際工作坊",
      //     start: "2023-11-11T10:00:00",
      //     end: "2023-11-11T17:00:00",
      //     url:"",
         
      // },
        { // 事件(包含開始時間、結束時間)
          title: "「不獨具人類的歷史」國際學術研討會",
          start: "2023-11-17T09:00:00",
          end: "2023-11-18T17:00:00",
          url:"activity16.html",
         
      },
      { // 事件(包含開始時間、結束時間)
        title: "「文學、思想與宗教」國際學術研討會",
        start: "2023-11-18T09:00:00",
        end: "2023-11-19T17:00:00",
        url:"activity14.html",
      
      },

       
      //   { // 事件(包含開始時間、結束時間)
      //     title: "「展．望」國際前瞻論壇",
      //     start: "2023-11-10T09:00:00",
      //     end: "2023-11-10T17:00:00",
      //     url:"activity14.html",
         
      // },
      { // 事件(包含開始時間、結束時間)
        title: "「從台語授課至教學實踐研究：設計過程與教學成效」工作坊",
        start: "2023-11-27T11:10:00",
        end: "2023-11-27T12:10:00",
        url:"https://tainan-400.com/activity20.html",
       
    },
        { // 事件(包含開始時間、結束時間)
            title: "「行走臺南四百年：在一座歷史城市裡的感知、考現與書寫」專題演講",
            start: "2023-11-27T15:10:00",
            end: "2023-11-27T17:10:00",
            url:"https://tainan-400.com/activity06.html",
           
        },
       
        { // 事件(包含開始時間、結束時間)
          title: "「散策米街明治町」走讀",
          start: "2023-12-02T14:00:00",
          end: "2023-12-02T17:00:00",
          url:"https://tainan-400.com/activity07.html",
         
        },
        { // 事件(包含開始時間、結束時間)
          title: "「唸歌唬lān展現代」專題演講",
          start: "2023-12-05T13:10:00",
          end: "2023-12-05T15:10:00",
          url:"activity21.html",
        
        },
        { // 事件(包含開始時間、結束時間)
          title: "「府城傳奇．戰火波瀾」木偶戲",
          start: "2023-12-06T19:30:00",
          end: "2023-12-06T21:00:00",
          url:"activity15.html",
         
        },
        { // 事件(包含開始時間、結束時間)
          title: "Xi Jinping and the Tibet Question: Core Issues, Policies and Implications",
          start: "2023-12-08T13:10:00",
          end: "2023-12-08T15:10:00",
          url:"activity19.html",
         
        },
        { // 事件(包含開始時間、結束時間)
          title: "「從驅疾到療疫─府城醫藥地景踏查」走讀",
          start: "2023-12-10T14:00:00",
          end: "2023-12-10T17:00:00",
          url:"https://tainan-400.com/activity08.html",
        
        },
        { // 事件(包含開始時間、結束時間)
          title: "「我是án-chóaⁿ學/講台語—美國人學台語ê經驗kap臺灣人建立台語意識ê重要」專題演講",
          start: "2023-12-12T13:10:00",
          end: "2023-12-12T15:00:00",
          url:"https://tainan-400.com/activity09.html",
        
      },
          { // 事件(包含開始時間、結束時間)
              title: "「臺南奇廟對談的奇妙故事」專題演講",
              start: "2023-12-15T10:10:00",
              end: "2023-12-15T12:10:00",
              url:"https://tainan-400.com/activity09.html",
            
          },
          { // 事件(包含開始時間、結束時間)
              title: "「臺南400—鎮北百年老廟巡禮」走讀",
              start: "2023-12-15T14:00:00",
              end: "2023-12-15T17:00:00",
              url:"https://tainan-400.com/activity10.html",
            
          },
          { // 事件(包含開始時間、結束時間)
            title: "「新冷戰時代的國際經濟變動與趨勢 — 美中台的地緣政治和經貿科技競爭與合作」論壇",
            start: "2023-12-19T14:00:00",
            end: "2023-12-19T16:00:00",
            url:"https://tainan-400.com/activity23.html",
          
          },
          { // 事件(包含開始時間、結束時間)
            title: "「臺灣有哪些地方不平等」專題演講",
            start: "2024-05-08T10:10:00",
            end: "2024-05-08T12:10:00",
            url:"activity24.html",
          
          },
          { // 事件(包含開始時間、結束時間)
            title: "「居住正義？行同陌路的所得與房價」人社前瞻論壇",
            start: "2024-05-14T10:10:00",
            end: "2024-05-14T12:10:00",
            url:"activity25.html",
          
          },
          { // 事件(包含開始時間、結束時間)
            title: "古蹟誰來修：以瓦作的人間國寶傅明光司阜為例",
            start: "2024-05-27T10:00:00",
            end: "2024-05-27T12:00:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=62",
          
          },
          { // 事件(包含開始時間、結束時間)
            title: "「成大禮賢樓（藝研所）的修復報告書」專題演講",
            start: "2024-06-03T10:00:00",
            end: "2024-06-03T12:00:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=64",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "「光電產業與國土治理」人社前瞻論壇",
            start: "2024-06-04T10:10:00",
            end: "2024-05-14T12:10:00",
            url:"activity27.html",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "修復前要做什麼？從調查研究開始說起",
            start: "2024-06-17T10:00:00",
            end: "2024-06-17T12:00:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=67",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "「獵殺女巫：一個歷史問題」",
            start: "2024-09-14T10:00:00",
            end: "2024-09-14T12:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "人權運動的街頭風景",
            start: "2024-09-16T15:00:00",
            end: "2024-09-16T17:00:00",
            url:"https://activity.ncku.edu.tw/index.php?c=apply&no=14987",
          
          },

       
          { // 事件(包含開始時間、結束時間)
            title: "「成為臺灣人——島內與海外敘事」國際學術交流研討會",
            start: "2024-09-24T09:00:00",
            end: "2024-09-26T17:00:00",
            url:"https://tainan-400.com/becomingtaiwanese.html",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "「撕開黑幕的光」展暨《1977聽見台灣之音》讀劇演出",
            start: "2024-09-27T09:00:00",
            end: "2024-09-28T19:00:00",
            url:"https://forms.gle/iXs8ixYvVAHEFmSq6",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "《開在壁上的花》戲劇演出",
            start: "2024-09-30T15:00:00",
            end: "2024-09-30T17:00:00",
            url:"https://forms.gle/wHBuJx6TnEzBr7KH6",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "照護歷史學「聽說讀寫」微課程",
            start: "2024-10-06T09:00:00",
            end: "2024-10-21T17:00:00",
            url:"https://docs.google.com/forms/d/e/1FAIpQLSfyhfYxM22XvTGEn-ypX_vmohziKOhImOSdRSPSSb-BALsCYg/viewform",
          
          },



          { // 事件(包含開始時間、結束時間)
            title: "「無力者／Right Said Right」書展",
            start: "2024-10-07T09:00:00",
            end: "2024-10-31T17:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "社區營造如何介入修復現場：待喚醒的公眾意識",
            start: "2024-10-08T10:00:00",
            end: "2024-10-08T12:00:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=69",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "唸歌來相捌，愈唸愈有力",
            start: "2024-10-14T15:00:00",
            end: "2024-10-14T17:00:00",
            url:"	https://activity.ncku.edu.tw/index.php?c=apply&no=15025",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "「展．望」人社國際前瞻論壇",
            start: "2024-10-18T09:00:00",
            end: "2024-10-18T17:00:00",
            url:"envision.html",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "拆了之後怎麼保存：大崗山龍湖庵八卦藻井的移地保存",
            start: "2024-10-21T10:00:00",
            end: "2024-10-21T12:00:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=70",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "《山川壯麗》了嗎？影像創作的社會觀察與作用",
            start: "2024-10-21T15:00:00",
            end: "2024-10-21T17:00:00",
            url:"https://activity.ncku.edu.tw/index.php?c=apply&no=15024",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "轉型正義：國家機器應負的歷史責任",
            start: "2024-10-21T15:10:00",
            end: "2024-10-21T17:10:00",
            url:"https://forms.gle/2p37gSM5SyTZJDHc8",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "雙橡園的美麗與哀愁——美國大選及台美中關係",
            start: "2024-10-23T10:10:00",
            end: "2024-10-23T12:00:00",
            url:"https://forms.gle/yroF8fNxtuKuTPsn8",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "劇場的魔幻語言—以《來自清水的孩子》與「土地計畫」系列為例",
            start: "2024-10-23T15:00:00",
            end: "2024-10-23T17:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "本館修繕ing",
            start: "2024-10-28T10:00:00",
            end: "2024-10-28T12:00:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=71",
          
          },


      

          { // 事件(包含開始時間、結束時間)
            title: "《失婚紀》",
            start: "2024-11-01T14:00:00",
            end: "2024-11-01T17:00:00",
            url:"",
          
          },

       

          { // 事件(包含開始時間、結束時間)
            title: "在自己的衝突故事中找到裂縫—酷凌計畫",
            start: "2024-11-04T15:00:00",
            end: "2024-11-04T17:00:00",
            url:"	https://activity.ncku.edu.tw/index.php?c=apply&no=15127",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "彩繪修護大揭密",
            start: "2024-11-04T10:00:00",
            end: "2024-11-04T12:00:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=74",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "2024臺南四百：成功永續，臺灣未來——跨界成城，鯤聲寰宇」書展",
            start: "2024-11-06T10:00:00",
            end: "2024-11-28T17:00:00",
            url:"bsst.html",
          
          },


        

          { // 事件(包含開始時間、結束時間)
            title: "「2024 異地與在地：田調文獻與重現展示」研討會",
            start: "2024-11-12T09:00:00",
            end: "2024-11-13T17:00:00",
            url:"https://reurl.cc/yv91z6",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "百花齊放的校史──第二屆成大博物館校史書寫工作坊",
            start: "2024-11-14T09:20:00",
            end: "2024-11-14T16:30:00",
            url:"https://museum.ncku.edu.tw/index.php?inter=apply&act=detail&id=73",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "2024臺南四百：成功永續，臺灣未來——跨界成城，鯤聲寰宇」書展開幕記者會暨新書發表會",
            start: "2024-11-15T13:00:00",
            end: "2024-11-15T14:00:00",
            url:"https://forms.gle/3yCDV8ti7nujpfyL9",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "這時，為恁唱歌",
            start: "2024-11-15T19:00:00",
            end: "2024-11-15T16:30:00",
            url:"https://activity.ncku.edu.tw/index.php?c=apply&no=15126",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "「碑越台南」拓碑實作暨台越拓碑文化交流微學分課程",
            start: "2024-11-15T09:00:00",
            end: "2024-11-17T17:30:00",
            url:"https://docs.google.com/....../1FAIpQLSdN6c7X....../viewform",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "作為「通道」的澎湖難民營",
            start: "2024-11-18T15:00:00",
            end: "2024-11-18T17:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "夜未央、天未亮：談1971年陳欽生事件",
            start: "2024-11-18T14:00:00",
            end: "2024-11-18T17:00:00",
            url:"https://forms.gle/dGPNFfyYmhFR4v4N6",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "劇場中的性別培力",
            start: "2024-11-19T14:00:00",
            end: "2024-11-19T17:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "兩位白色恐怖時代受難者的生命故事",
            start: "2024-11-19T15:10:00",
            end: "2024-11-19T17:10:00",
            url:"https://forms.gle/ZQSJUYME5bW4Ais96",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "「人權路上．十二不止」歷史公演十二週年回顧展",
            start: "2024-11-21T09:00:00",
            end: "2024-12-02T17:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "誰的記憶？從白色恐怖到轉型正義的省思",
            start: "2024-11-22T15:00:00",
            end: "2024-11-22T17:00:00",
            url:"https://forms.gle/dGPNFfyYmhFR4v4N6",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "17世紀前後的臺灣與周邊：考古學的觀點（1550-1717",
            start: "2024-11-22T09:00:00",
            end: "2024-11-23T17:00:00",
            url:"https://docs.google.com/forms/d/e/1FAIpQLSco4vUkdLcwDnp6tx4ceKWngwvm_TltUG9Q-Zix4zSlRPrYhg/viewform",
          
          },

      

          { // 事件(包含開始時間、結束時間)
            title: "《紅色青春》戲劇演出",
            start: "2024-11-23T19:00:00",
            end: "2024-11-24T16:30:00",
            url:"https://forms.gle/CatPEjm3KNKRNU3N7",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "台灣原住民「還我土地」運動",
            start: "2024-11-25T15:00:00",
            end: "2024-11-25T17:00:00",
            url:"https://activity.ncku.edu.tw/index.php?c=apply&no=15172",
          
          },


          { // 事件(包含開始時間、結束時間)
            title: "咱彰化－母語的歌與鄉土紮根運動",
            start: "2024-12-02T15:00:00",
            end: "2024-12-02T17:00:00",
            url:"	https://activity.ncku.edu.tw/index.php?c=apply&no=15174",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "《戲劇之夜》戲劇演出",
            start: "2024-12-10T15:00:00",
            end: "2024-12-11T20:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "我的黑色經驗，兼談《白色綠島》",
            start: "2024-12-06T15:10:00",
            end: "2024-12-06T17:10:00",
            url:"https://forms.gle/QMaoWiMrb3Dhk6dq5",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "《巫滅》戲劇演出",
            start: "2024-12-06T09:00:00",
            end: "2024-12-07T17:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "弱勢者能不能發聲？",
            start: "2024-12-09T15:00:00",
            end: "2024-12-09T17:00:00",
            url:"https://activity.ncku.edu.tw/index.php?c=apply&no=15173",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "《傳唱愛戀的兄弟》紀錄片",
            start: "2024-12-18T15:00:00",
            end: "2024-12-18T17:00:00",
            url:"",
          
          },

          { // 事件(包含開始時間、結束時間)
            title: "回聲：N 種探索轉型正義及人權教育的視角",
            start: "2024-12-18T15:00:00",
            end: "2024-12-18T17:00:00",
            url:"https://forms.gle/UExtRi1zJo4yZSGi7",
          
          },







    ]
});

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



   
  