

  


  let tl = gsap.timeline({});

  tl.fromTo(".瞻望.svg",{y:-70,opacity:0,duration:0.1},{y:0,ease:"sine.out",opacity:1,duration:3});

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
  
  



   
  