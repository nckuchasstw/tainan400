const app = Vue.createApp({
    data() {
     
      return {
        text:'文字',
        activityList2025: [    
          {unit:'國立成功大學台灣文學系特聘教授兼華語中心主任',url:'https://mywu1965.wixsite.com/mysite',name:'吳玫瑛',ename:'Mei-Ying WU',img:'吳玫瑛.png',field:'兒童文學、青少年文學、跨國文學與跨文化研究、圖像敘事、童年研究、性別研究',cv1:'PhD, Curriculum and Instruction , University of Idaho, USA',cv2:'主持人Moderator'},

          {unit:'國立成功大學中國文學系教授兼文學院副院長',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=MTA1MDgwMDQ7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'陳家煌',ename:'Chia-Huang Chen',img:'陳家煌.png',field:'隋唐五代詩、臺灣古典文學',cv1:'國立中山大學中國文學系博士',cv2:'發表人Presenter'},

          {unit:'美國聖湯瑪斯大學國際研究講座教授兼台灣與東亞研究計畫主任',url:'https://sites.google.com/site/yeh2sctw/home?authuser=0',name:'葉耀元',ename:'Yao-Yuan Yeh',img:'葉耀元.png',field:'US-Taiwan-China relations, foreign policy, international security, public opinion',cv1:'德克薩斯A&M大學政治學博士',cv2:'發表人Presenter'},
  
          {unit:'美國德州大學奧斯汀分校亞洲研究博士候選人',url:'https://www.liberalarts.utexas.edu/cts/gradstudents/st29249',name:'湯舒雯',ename:'Shu-wen Tang ',img:'湯舒雯.png',field:'現當代華語文學與文藝思潮',cv1:'美國德州大學奧斯汀校區（UT-Austin）亞洲研究系文學博士',cv2:'發表人Presenter'},
  
          {unit:'美國西雅圖華盛頓大學歷史學系助理教授',url:'https://www.ocf.berkeley.edu/~jameslin/',name:'林于翔',ename:'James Lin',img:'林翔.png',field:'Modern Taiwan History, History of Development',cv1:'加州大學柏克萊分校歷史學博士',cv2:'發表人Presenter'},

          {unit:'美國加州大學聖地牙哥分校台灣研究中心教授',url:'https://literature.ucsd.edu/people/faculty/pliao.html',name:'廖炳惠',ename:'Ping-hui Liao',img:'廖炳惠.png',field:'台灣文化史、東西方比較文學、跨藝術研究、流行文化和批判理論',cv1:'美國加州大學文學研究所博士',cv2:'專講keynote speaker'},
  
          {unit:'國立成功大學經濟系教授兼人文社會科學中心主任',url:'https://www.econ.ncku.edu.tw/faculty_detail.asp?ID=90',name:'蔡群立',ename:'Chun-Li Tsai',img:'蔡群立.png',field:'財務經濟學、貨幣經濟學',cv1:'美國德州農工大學經濟學博士',cv2:'主持人Moderator'},
  
          {unit:'國立成功大學歷史系教授兼副校長',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=ODUwODA1NCA7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'陳玉女',ename:'Yuh-Neu Chen',img:'陳玉女.png',field:'明代社會史、明代佛教史、中國佛教史',cv1:'日本國立九州大學東洋史學博士',cv2:'主持人Moderator'},

  
          {unit:'美國加州聖塔芭芭拉分校臺灣研究中心主任',url:'https://howardchiang.faculty.eastasian.ucsb.edu/',name:'姜學豪',ename:'HOWARD CHIANG',img:'姜學豪.png',field:'批判理論、文化研究、東亞研究、性別理論與研究',cv1:'美國普林斯頓大學歷史學博士',cv2:'發表人Presenter'},
  
          {unit:'美國加州大學聖地牙哥分校教授',url:'https://music-cms.ucsd.edu/people/faculty/regular_faculty/nancy-guy/index.html',name:'Nancy Guy',img:'nancy.png',field:'Music in Taiwan, Chinese opera, ecomusicology, ethnomusicology',cv1:'',cv2:'發表人Presenter'},   
    
  
          {unit:'陽明交通大學社會與文化研究所助理教授',url:'https://srcs.nycu.edu.tw/member_inner.aspx?fid=46&pid=11&id=70&pfid=43',name:'楊子樵',ename:'Zi-Qiao Yang',img:'楊子樵.png',field:'媒介與電影研究、批判理論、冷戰文化工業與政治宣傳、基礎設施批判研究、現代華語文學與報刊',cv1:'美國柏克萊加州大學東亞研究博士',cv2:'與談人Discussant'},


          {unit:'"中央研究院民族學研究所副研究員"',url:'https://www.wenliu.info/',name:'劉文',ename:'Wen Liu',img:'劉文1.png',field:'跨越社會心理學、酷兒研究、亞裔研究',cv1:'Ph.D., City University of New York, Graduate Center, New York, NY ',cv2:'與談人Discussant'},
  
          {unit:'美國加州大學聖塔芭芭拉分校東亞語言及文化研究系教授',url:'https://www.sabinefruhstuck.com/',name:'Sabine Frühstück',img:'薩賓.png',field:'Modern and contemporary Japan in its global context; history, ethnography, visual culture; militarism, gender and sexuality, childhood, emotions ',cv1:'Ph.D. Japanese Studies, History and Social Study of Science, University of Vienna ',cv2:'發表人Presenter'},
  
          {unit:'美國德州奧斯汀大學台灣研究中心主任',url:'https://liberalarts.utexas.edu/asianstudies/faculty/changs',name:'張誦聖',ename:'Sung-sheng Chang',img:'張誦聖.png',field:'中國電影與文學',cv1:'美國史丹佛大學亞洲語言博士',cv2:'發表人Presenter'},
  
          {unit:'國立成功大學考古學研究所副教授兼多元文化中心主任',url:'http://archaeology.ncku.edu.tw/index.php?option=module&lang=cht&task=pageinfo&id=23&index=3',name:'熊仲卿',ename:'Chung-Ching Shiung',img:'熊仲卿.png',field:'文化接觸、交換貿易、環境考古、文化資產、公眾考古、博物館學、陶瓷器研究、東南亞考古、GIS',cv1:'美國華盛頓大學人類學博士',cv2:'發表人Presenter'},
  
  
          {unit:'英國倫敦大學亞非學院台灣研究中心研究員',url:'https://www.soas.ac.uk/about/ming-yeh-rawnsley',name:'蔡明燁',ename:'Ming-yeh T. Rawnsley',img:'蔡明燁.png',field:'Taiwan cinema, Taiwan media & democratization, Taiwan studies',cv1:'英國里茲大學傳播研究所博士',cv2:'主持人Moderator'},
  
          {unit:'國立成功大學歷史學系助理教授',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=MTExMDgwMTQ7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'簡宏逸',ename:'Hung-yi Chien',img:'簡宏逸.png',field:'地名與臺灣歷史‧十七世紀台灣與東亞',cv1:'臺灣師範大學臺灣語文學系博士',cv2:'發表人Presenter'},
  
          {unit:'國立成功大學歷史學系副教授',url:'https://rais.ncku.edu.tw/Personal_Report/profile.php?s=MTA0MDIwMTg7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ',name:'李啟彰',ename:'Chi-Chang Lee',img:'李啟彰.png',field:'日本近代史',cv1:'日本東京大學日本史學博士',cv2:'發表人Presenter'},
  
          {unit:'國立台灣師範大學台灣史研究所教授兼所長',url:'https://www.taih.ntnu.edu.tw/index.php/faculty/',name:'康培德',ename:'Peter Kang',img:'康培德.png',field:'早期臺灣史、原住民史、海洋史、歷史地理、區域研究',cv1:'明尼蘇達大學雙城分校地理學博士',cv2:'與談人Discussant'},
  
          {unit:'國立高雄師範大學台灣文化與歷史語言研究所副教授兼所長',url:'https://c.nknu.edu.tw/tni/TeacherCorner.aspx?PN=41&Tid=23',name:'吳玲青',ename:'Ling-Ching Wu',img:'吳玲青.png',field:'清代與日治臺灣史研究、清代中國史研究、史料解讀、田野與文獻調查',cv1:'日本東京大學文學博士',cv2:'與談人Discussant'},
  
          {unit:'莫納許大學研究員/澳亞台灣研究學會副會長',url:'https://mail.google.com/mail/u/2?ui=2&ik=129c6711c4&attid=0.4&permmsgid=msg-f:1796455382085600332&th=18ee4aa6e80d044c&view=att&disp=inline&realattid=f_lv1qhv1r4',name:'黃鈺婷',ename:'Phyllis Yu-ting Huang',img:'黃鈺婷.png',field:'Taiwanese Literature; Literary works by mainlander Taiwanese writers; Taiwanese immigrants ',cv1:'PhD in Chinese Studies, Monash University, Australia',cv2:'發表人Presenter'},
  
          {unit:'美國史丹佛大學博士生兼NATSA會長',url:'https://history.stanford.edu/people/yi-ting-chung',name:'鍾宜庭',ename:'Yi-Ting Chung',img:'鍾宜庭.png',field:'日本帝國史與跨太平洋史',cv1:'美國史丹佛大學歷史系博士',cv2:'發表人Presenter'},
  
          {unit:'國立陽明交通大學社會與文化研究所博士生',url:'',name:'應修平',ename:'Grace Shiu-Ping Ying',img:'應修平.png',field:'北美臺灣人研究，致力於以研究為基底、劇本創作與策展為途徑，透過戲劇再現歷史',cv1:'國立陽明交通大學社會與文化研究所博士班',cv2:'發表人Presenter'},
  
          {unit:'國立台灣大學台灣文學研究所副教授',url:'https://scholars.lib.ntu.edu.tw/cris/rp/rp00284',name:'張俐璇',ename:'LI HSUAN CHANG',img:'張俐璇.png',field:'戰後臺灣文學場域、臺灣文學的研究與轉譯、數位人文研究',cv1:'	國立成功大學臺灣文學系博士',cv2:'與談人Discussant'},
  
          {unit:'國立中興大學台灣文學與 跨國文化研究所副教授',url:'https://taiwan.nchu.edu.tw/about_me.php?id=02d695a0-61e0-11ea-88e9-80fa5b5fa39c',name:'詹閔旭',ename:'Min-xu Zhan',img:'詹閔旭.png',field:'台灣現當代文學、移民與種族研究、東南亞華語語系文學',cv1:'	國立成功大學臺灣文學系博士',cv2:'與談人Discussant'},
  
        
          {unit:'國立台北教育大學台灣文化研究所教授',url:'https://taiwan.ntue.edu.tw/p/406-1029-14962,r576.php?Lang=zh-tw',name:'何義麟',ename:'I-Lin Ho　',img:'何義麟.png',field:'臺灣史、中國近現代史、日本史、東北亞史',cv1:'日本東京大學院總合文化研究科博士',cv2:'與談人Discussant'},
  
          {unit:'國立成功大學考古所特聘教授',url:'http://archaeology.ncku.edu.tw/index.php?option=module&lang=cht&task=pageinfo&id=12&index=2',name:'劉益昌',ename:'Yi-Chang Liu',img:'劉益昌.png',field:'臺灣考古學、東南亞考古學、舊社考古學、文化資產、臺灣早期歷史考古',cv1:'國立臺灣大學人類學系碩士',cv2:'主持人Moderator'},
          
         
  
          {unit:'國立成功大學台灣文學系副教授',url:'https://twl.ncku.edu.tw/p/405-1143-114284,c10606.php?Lang=zh-tw',name:'廖淑芳',ename:'Shu-Fang Liao',img:'廖淑芳.png',field:'戰後台灣小說、現代主義文學、當代文學理論',cv1:'國立清華大學中文系博士',cv2:'發表人Presenter'},
  
          {unit:'國立成功大學歷史學系教授兼任博物館副館長',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=OTkwMjAxNiA7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'陳文松',ename:'Wen-Sung Chen',img:'陳文松.png',field:'台灣近代史 ‧殖民政策史 ‧區域文化史 ‧教育社會史',cv1:'日本東京大學總合文化研究科(地域文化研究專攻)博士',cv2:'發表人Presenter'},
  
  
          // {unit:'中央研究院台灣史研究所副研究員',url:'https://www.ith.sinica.edu.tw/members_faculty_look.php?l=c&no=3&id=473&page=1&ps=30',name:'鄭維中',ename:'Cheng, Wei-Chung',img:'鄭維中.png',field:'東亞海洋史、早期臺灣史、近代早期世界史',cv1:'荷蘭萊頓大學歷史學博士',cv2:'與談人Discussant'},
  
          {unit:'國立台灣師範大學台灣史研究所教授',url:'https://www.taih.ntnu.edu.tw/index.php/peixian/',name:'許佩賢',ename:'Hsu, Pei-hsien',img:'許佩賢.png',field:'地方史、教育史',cv1:'國立臺灣大學歷史學博士',cv2:'與談人Discussant'},
  
  
          {unit:'台灣歷史博物館副研究員',url:'https://file.moc.gov.tw/001/Upload/OldFiles/AdminUploads/files/202301/b9cc5cc8-8f79-4efb-9446-f0a95e0c6caf.pdf',name:'黃裕元',ename:'Huang, Yuyuan',img:'黃裕元.png',field:'台語歌謠',cv1:' 國立臺灣大學歷史學系 ',cv2:'發表人Presenter'},
        
          {unit:'國立台南大學戲劇創作與應用學系教授',url:'https://drama.nutn.edu.tw/ch/teachers_detail.asp?G0=1&Sn=16&Page=1',name:'王婉容',ename:' Wan–Jung Wang',img:'王婉容.png',field:'多元應用戲劇創作與研究，社區劇場，博物館劇場，口述歷史劇場與戲劇教育',cv1:'英國倫敦大學皇家霍洛威學院戲劇系研究所博士 ',cv2:'發表人Presenter'},


        //   {unit:'臺灣文學館副研究員',url:'activity24.html',name:'林佩蓉',img:'0518_02.png'},

        //   {unit:'國立成功大學中文系助理教授',url:'activity24.html',name:'蔡林縉',img:'0518_01.png'},
        //   {unit:'國立成功大學不分系副教授',url:'activity24.html',name:'吳易叡',img:'0518_02.png'},
  
         
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