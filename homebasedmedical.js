const app = Vue.createApp({
    data() {
     
      return {
        text:'文字',
        activityList2025: [    
          {unit:'國立成功大歷史學系副教授兼人文社會科學中心副主任',url:'https://researchoutput.ncku.edu.tw/zh/persons/hung-bin-hsu',name:'許宏彬',ename:'Hung Bin Hsu',img:'許宏彬.png',field:'醫療史、台灣史、科技與社會研究',cv1:'倫敦大學亞非學院歷史學博士',cv2:'主持人Moderator'},
  
          {unit:'日本宮崎大學醫學部講座教授',url:'https://www.med.pref.miyazaki.lg.jp/backnumber/yoshimura/',name:'吉村學',ename:'Yoshimura Manabu',img:'吉村學.png',field:'家庭醫學',cv1:'宮崎醫科大學博士',cv2:' 專講keynote speaker'},
  
          {unit:'奇美醫院院長',url:'http://sub.chimei.org.tw/57900/index.php/members/members1/116-category-members1-1/83-hung-jung-lin',name:'林宏榮',ename:'Hung-Jung Lin',img:'林宏榮.png',field:'急診醫學、AHA BLS & ACLS Instructor',cv1:'國立成功大學高階管理碩士 ',cv2:'發表人Presenter'},

          {unit:'在宅醫療學會理事長、台東都蘭診所所長',url:'https://www.clinicdulan.com/team01',name:'余尚儒',ename:'Sang-Ju Yu',img:'余尚儒.png',field:'在宅醫療',cv1:'高雄醫學大學醫學系博士',cv2:'發表人Presenter'},

          {unit:'國立成功大學醫學系心臟血管外科主任兼任醫學系系主任',url:'https://dseas.ncnu.edu.tw/p/406-1030-3646,r234.php?Lang=zh-tw',name:'阮俊能',ename:'Jun-Neng Roan',img:'阮俊能.png',field:'心臟衰竭、心臟移植、葉克膜、血管生理、肺高壓、動靜脈廔管',cv1:'國立成功大學臨床醫學研究所博士',cv2:'發表人Presenter'},

          {unit:'國立成功大學醫學系人文暨社會醫學科教授兼主任',url:'https://researchoutput.ncku.edu.tw/zh/persons/hsiuyun-wang',name:'王秀雲',ename:'Hsiuyun Wang',img:'王秀雲.png',field:'近代醫學史、科學史、台灣戰後醫學史、性別研究',cv1:'美國威斯康辛大學麥迪遜分校科學史系博士',cv2:'發表人Presenter'},
  
        
  
        
  
         
          ],
      };
    },
    methods: {
      openModal(index) {
        const modalId = '#lineupModal' + index;
        $(modalId).modal('show');
      }
    }
  });
  
  app.mount('#app');