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
    spaceBetween: 10,
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
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });

  let tl = gsap.timeline({});

  tl.fromTo(".mainlogo",{y:-70,opacity:0,duration:0.1},{y:0,ease:"sine.out",opacity:1,duration:1.5});

  tl.fromTo(".nav-item",{stagger:{from: "random", 
  amount: 1 } ,y:-70,opacity:0,duration:0.1},{stagger:{from: "random", 
  amount: 1 },y:0,ease:"back.out(1.7)",opacity:1,duration:2},'-=1.5');

  tl.fromTo(".chi",{repeat:-1,x:-10,opacity:1,duration:0.1},{repeat:-1,x:10,ease:"sine.out",opacity:0,duration:5},'-=2.5');

  tl.fromTo(".anping",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"bounce.out",opacity:1,duration:0.5},'-=5');

  tl.fromTo(".banyan",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"bounce.out",opacity:1,duration:0.5});

  tl.fromTo(".gate",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"slow(0.7, 0.7, false)",opacity:1,duration:0.1});

  tl.fromTo(".temple",{scale: 0.1,opacity:0,duration:0.1},{scale: 1,ease:"power2.out",opacity:1,duration:0.4});

  tl.fromTo(".train",{repeat:-1,y:-2,x:-2,opacity:1,duration:20},{repeat:-1,y:-20,x:-25,ease:"sine.out",opacity:1,duration:20},'-=4');

  

  tl.fromTo(".cloudleft",{repeat:-1,y:160,x:200,opacity:0.7,duration:20},{repeat:-1,y:20,x:60,ease:"sine.out",opacity:0,duration:20},'-=20');
  

  tl.fromTo(".cloudright",{repeat:-1,x:-150,y:120,opacity:0.7,duration:20},{repeat:-1,x:-300,y:30,ease:"sine.out",opacity:0,duration:20},'-=20');

  tl.fromTo(".ship",{repeat:-1,y:-300,x:-400,opacity:1,duration:20},{repeat:-1,y:80,x:190,ease:"sine.out",opacity:1,duration:20},'-=46');

  tl.fromTo(".person",{repeat:-1,y:260,x:300,opacity:1,duration:40},{repeat:-1,y:-80,x:-400,ease:"sine.out",opacity:1,duration:40},'-=22');

  tl.fromTo(".slogan",{x:-100,opacity:0,duration:0.1},{x:20,ease:"sine.out",opacity:1,duration:8},'-=10');


  AOS.init();
  
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
    
    dateNames:['今天'],
    monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNames:['日','一','二','三','四','五','六'],
    dayNamesShort:['日','一','二','三','四','五','六'],
    defaultDate: "2023-07-01", // 起始日期
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
            start: "2023-09-19T15:00:00",
            end: "2023-09-19T17:00:00",
            url:"https://tainan-400.com/activity02.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「台灣荷治時期的鹿與原住民」專題演講",
            start: "2023-09-20T10:00:00",
            end: "2023-09-20T12:00:00",
            url:"https://tainan-400.com/activity12.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「從牛車到五分車—來蔗走走」走讀",
            start: "2023-09-23T08:45:00",
            end: "2023-09-23T16:30:00",
            url:"https://tainan-400.com/activity03.html",
           
        },
        { // 事件(包含開始時間、結束時間)
          title: "「迢迢織路：臺南紡織工業 400 年」專題演講",
          start: "2023-09-27T15:00:00",
          end: "2023-09-27T17:00:00",
          url:"",
         
      },
        { // 事件(包含開始時間、結束時間)
            title: "「重塑被被消音的歷史—臺語電影的發展史」專題演講",
            start: "2023-10-04T15:00:00",
            end: "2023-10-04T17:00:00",
            url:"https://tainan-400.com/activity04.html",
           
        },
        { // 事件(包含開始時間、結束時間)
          title: "2023「臺南國際人權藝術節」記者會",
          start: "2023-10-13T10:00:00",
          end: "2023-10-13T12:00:00",
          url:"",
         
      },
      { // 事件(包含開始時間、結束時間)
        title: "「鬥鬧熱走唱隊」演出",
        start: "2023-10-14T09:00:00",
        end: "2023-10-15T17:00:00",
        url:"",
       
    },

        { // 事件(包含開始時間、結束時間)
            title: "「府城飲食文化的趣味」專題演講",
            start: "2023-10-19T15:00:00",
            end: "2023-10-19T17:00:00",
            url:"https://tainan-400.com/activity05.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「慢慢變臺南」音樂會",
            start: "2023-11-08T19:00:00",
            end: "2023-11-08T21:00:00",
            url:"https://tainan-400.com/activity11.html",
           
        },
        { // 事件(包含開始時間、結束時間)
          title: "國際工作坊",
          start: "2023-11-11T10:00:00",
          end: "2023-11-11T17:00:00",
          url:"",
         
      },
        { // 事件(包含開始時間、結束時間)
          title: "「不獨具人類的歷史」國際學術研討會",
          start: "2023-11-17T09:00:00",
          end: "2023-11-18T17:00:00",
          url:"",
         
      },
        { // 事件(包含開始時間、結束時間)
            title: "「步入臺南街屋的時間隧道：探訪城市中的歷史與人文寶藏」專題演講",
            start: "2023-11-24T15:00:00",
            end: "2023-11-24T17:00:00",
            url:"https://tainan-400.com/activity07.html",
           
        },
        { // 事件(包含開始時間、結束時間)
          title: "「展．望」論壇",
          start: "2023-11-10T09:00:00",
          end: "2023-11-10T17:00:00",
          url:"",
         
      },
        { // 事件(包含開始時間、結束時間)
            title: "「行走臺南四百年：在一座歷史城市裡的感知、考現與書寫」專題演講",
            start: "2023-11-27T15:00:00",
            end: "2023-11-27T17:00:00",
            url:"https://tainan-400.com/activity06.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「發現醫學臺南」專題演講",
            start: "2023-12-01T10:00:00",
            end: "2023-12-01T12:00:00",
            url:"https://tainan-400.com/activity08.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「發現醫學臺南」走讀",
            start: "2023-12-01T14:00:00",
            end: "2023-12-01T17:00:00",
            url:"https://tainan-400.com/activity08.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「廟宇信仰與府城四百年」專題演講",
            start: "2023-12-15T10:00:00",
            end: "2023-12-15T12:00:00",
            url:"https://tainan-400.com/activity09.html",
           
        },
        { // 事件(包含開始時間、結束時間)
            title: "「臺南400—鎮北百年老廟巡禮」走讀",
            start: "2023-12-15T14:00:00",
            end: "2023-12-15T16:00:00",
            url:"https://tainan-400.com/activity10.html",
           
        },

        
    ]
});




   
  