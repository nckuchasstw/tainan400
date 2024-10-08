const app = Vue.createApp({
    data() {
     
      return {
        text:'文字',
        activityList2025: [    
          {unit:'國立成功大學台灣文學系特聘教授',url:'https://mywu1965.wixsite.com/mysite',name:'吳玫瑛',ename:'Mei-Ying Wu',img:'吳玫瑛.png',field:'兒童文學、青少年文學、跨國文學與跨文化研究、圖像敘事、童年研究、性別研究',cv1:'PhD, Curriculum and Instruction , University of Idaho, USA',cv2:'主持人Moderator'},

          {unit:'美國加州大學聖地牙哥分校臺灣研究講座教授',url:'https://literature.ucsd.edu/people/faculty/pliao.html',name:'廖炳惠',ename:'Ping-Hui Liao',img:'廖炳惠.png',field:'臺灣文化史、東西方比較文學、跨藝術研究、流行文化和批判理論',cv1:'美國加州大學文學研究所博士',cv2:'專講keynote speaker'},

          {unit:'國立成功大學台灣文學系副教授',url:'https://researchoutput.ncku.edu.tw/zh/persons/nan-fang-liu',name:'劉南芳',ename:'Nan-Fang Liu',img:'劉南芳.png',field:'台灣戲曲、中國戲劇、民間文學、劇本創作',cv1:'國立清華大學中文所博士',cv2:'主持人Moderator'},

          {unit:'國立成功大學全校不分系學分學程副教授',url:'https://researchoutput.ncku.edu.tw/zh/persons/harry-yi-jui-wu',name:'吳易叡',ename:'Harry Yi-Jui Wu',img:'吳易叡.png',field:'精神醫療的跨國史、醫學人文',cv1:'英國牛津大學醫學史研究所博士',cv2:'主持人Moderator'},

          {unit:'國立成功大學人文社會科學中心主任',url:'https://psychology.ncku.edu.tw/Teacher_Detail.aspx?ID=c3a92ef1-d598-41eb-8211-b2d6b4033957',name:'楊政達',ename:'Cheng-Ta Yang',img:'楊政達.png',field:'注意力、記憶、物體辨識、情景知覺、數學心理學、心理物理學',cv1:'--',cv2:'主持人Moderator'},

          {unit:'國立成功大學副校長',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=ODUwODA1NCA7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'陳玉女',ename:'Yuh-Neu Chen',img:'陳玉女.png',field:'明代社會史、明代佛教史、中國佛教史',cv1:'日本國立九州大學東洋史學博士',cv2:'主持人Moderator'},

          {unit:'國家科學及技術委員會人文及社會科學研究發展處處長',url:'https://scholars.lib.ntu.edu.tw/entities/person/6a93cebb-b8ee-407e-a857-1b037fa26364',name:'蘇碩斌',ename:'Shuo-Bin Su',img:'蘇碩斌.png',field:'文學社會學、臺灣文學史、文化研究、媒介研究',cv1:'國立臺灣大學社會學系博士',cv2:'主持人Moderator'},


        
          {unit:'中央研究院臺灣史研究所兼任研究員',url:'https://www.ith.sinica.edu.tw/members_faculty_look.php?l=c&no=2&id=73&page=1&ps=30',name:'翁佳音',ename:'Kaim Ang',img:'翁佳音.png',field:'十七世紀（荷蘭、西班牙與明鄭時代）臺灣史',cv1:'國立臺灣大學歷史學碩士',cv2:'與談人Discussant'},

          {unit:'國立成功大學考古所特聘教授',url:'http://archaeology.ncku.edu.tw/index.php?option=module&lang=cht&task=pageinfo&id=12&index=2',name:'劉益昌',ename:'Yi-Chang Liu',img:'劉益昌.png',field:'臺灣考古學、東南亞考古學、舊社考古學、文化資產、臺灣早期歷史考古',cv1:'國立臺灣大學人類學系碩士',cv2:'主持人Moderator'},

          {unit:'立成功大學中國文學系教授',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=MTA1MDgwMDQ7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'陳家煌',ename:'Chia-Huang Chen',img:'陳家煌.png',field:'隋唐五代詩、臺灣古典文學',cv1:'國立中山大學中國文學系博士',cv2:'發表人Presenter'},

          {unit:'國立臺灣師範大學臺灣史研究所教授',url:'https://www.taih.ntnu.edu.tw/index.php/peixian/',name:'許佩賢',ename:'Pei-hsien Hsu',img:'許佩賢.png',field:'地方史、教育史',cv1:'國立臺灣大學歷史學博士',cv2:'與談人Discussant'},

          {unit:'美國聖湯瑪斯大學國際研究講座教授',url:'https://sites.google.com/site/yeh2sctw/home?authuser=0',name:'葉耀元',ename:'Yao-Yuan Yeh',img:'葉耀元.png',field:'US-Taiwan-China relations, foreign policy, international security, public opinion',cv1:'德克薩斯A&M大學政治學博士',cv2:'發表人Presenter'},

          {unit:'國立臺南大學戲劇創作與應用學系教授',url:'https://drama.nutn.edu.tw/ch/teachers_detail.asp?G0=1&Sn=16&Page=1',name:'王婉容',ename:' Wan–Jung Wang',img:'王婉容.png',field:'應用戲劇創作、展演及研究、老人劇場創作展演研究、國際劇場交流主義研究、當代文化理論與戲劇理論與批評、社區劇場創作演出研究、博物館劇場創作演出研究',cv1:'英國倫敦大學皇家霍洛威學院戲劇系研究所博士 ',cv2:'發表人Presenter'},
  
          {unit:'美國德州大學奧斯汀分校亞洲研究所博士',url:'https://www.liberalarts.utexas.edu/cts/gradstudents/st29249',name:'湯舒雯',ename:'Shu-Wen Tang ',img:'湯舒雯.png',field:'現當代華語文學與文藝思潮',cv1:'美國德州大學奧斯汀校區（UT-Austin）亞洲研究系文學博士',cv2:'發表人Presenter'},
  
          {unit:'美國西雅圖華盛頓大學歷史學系助理教授',url:'https://www.ocf.berkeley.edu/~jameslin/',name:'林于翔',ename:'James Lin',img:'林翔.png',field:'Modern Taiwan History, History of Development',cv1:'加州大學柏克萊分校歷史學博士',cv2:'發表人Presenter'},
  

          {unit:'國立成功大學人文社會科學中心博士後研究員',url:'https://tsncku.com.tw/',name:'林明發',ename:'Lim Beng Huat',img:'林明發1.png',field:'華文文學，移民工文學',cv1:'國立成功大學中國文學系博士',cv2:'發表人Presenter'},

  
          {unit:'國立臺灣大學音樂學研究所副教授',url:'https://gim.ntu.edu.tw/%E5%B0%88%E4%BB%BB%E5%B8%AB%E8%B3%87/%E6%A5%8A%E5%BB%BA%E7%AB%A0/',name:'楊建章',ename:'Chien-Chang Yang',img:'楊建章.png',field:'音樂理論史、音樂美學史、音樂史學、當代音樂學',cv1:'美國芝加哥大學音樂史與理論博士',cv2:'與談人Discussant'},
  
          {unit:'美國加州大學聖地牙哥分校教授',url:'https://music-cms.ucsd.edu/people/faculty/regular_faculty/nancy-guy/index.html',name:'Nancy Guy',img:'nancy.png',field:'Music in Taiwan, Chinese opera, ecomusicology, ethnomusicology',cv1:'',cv2:'發表人Presenter'},
          
          
          {unit:'美國加州大學聖塔芭芭拉分校東亞語言與文化研究學系教授',url:'https://howardchiang.faculty.eastasian.ucsb.edu/',name:'姜學豪',ename:'Howard Chiang',img:'姜學豪.png',field:'批判理論、文化研究、東亞研究、性別理論與研究',cv1:'美國普林斯頓大學歷史學博士',cv2:'發表人Presenter'},
    
  
          {unit:'國立陽明交通大學社會與文化研究所助理教授',url:'https://srcs.nycu.edu.tw/member_inner.aspx?fid=46&pid=11&id=70&pfid=43',name:'楊子樵',ename:'Zi-Qiao Yang',img:'楊子樵.png',field:'媒介與電影研究、批判理論、冷戰文化工業與政治宣傳、基礎設施批判研究、現代華語文學與報刊',cv1:'美國柏克萊加州大學東亞研究博士',cv2:'與談人Discussant'},


          {unit:'中央研究院民族學研究所副研究員',url:'https://www.wenliu.info/',name:'劉文',ename:'Wen Liu',img:'劉文1.png',field:'跨越社會心理學、酷兒研究、亞裔研究',cv1:'Ph.D., City University of New York, Graduate Center, New York, NY ',cv2:'與談人Discussant'},
  
          {unit:'美國加州大學聖塔芭芭拉分校東亞語言及文化研究系教授',url:'https://www.sabinefruhstuck.com/',name:'Sabine Frühstück',img:'薩賓.png',field:'Modern and contemporary Japan in its global context; history, ethnography, visual culture; militarism, gender and sexuality, childhood, emotions ',cv1:'Ph.D. Japanese Studies, History and Social Study of Science, University of Vienna ',cv2:'發表人Presenter'},


          {unit:'國立臺灣歷史博物館副研究員',url:'https://file.moc.gov.tw/001/Upload/OldFiles/AdminUploads/files/202301/b9cc5cc8-8f79-4efb-9446-f0a95e0c6caf.pdf',name:'黃裕元',ename:'Yu-Yuan Huang',img:'黃裕元.png',field:'台語歌謠',cv1:' 國立臺灣大學歷史學系 ',cv2:'發表人Presenter'},
  
       
  
          {unit:'國立成功大學考古學研究所副教授',url:'http://archaeology.ncku.edu.tw/index.php?option=module&lang=cht&task=pageinfo&id=23&index=3',name:'熊仲卿',ename:'Chung-Ching Shiung',img:'熊仲卿.png',field:'文化接觸、交換貿易、環境考古、文化資產、公眾考古、博物館學、陶瓷器研究、東南亞考古、GIS',cv1:'美國華盛頓大學人類學博士',cv2:'發表人Presenter'},
  
  
          {unit:'英國倫敦大學亞非學院臺灣研究中心副研究員',url:'https://www.soas.ac.uk/about/ming-yeh-rawnsley',name:'蔡明燁',ename:'Ming-Yeh T. Rawnsley',img:'蔡明燁.png',field:'Taiwan cinema, Taiwan media & democratization, Taiwan studies',cv1:'英國里茲大學傳播研究所博士',cv2:'主持人Moderator'},
  
          {unit:'國立成功大學歷史學系助理教授',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=MTExMDgwMTQ7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'簡宏逸',ename:'Hung-Yi Chien',img:'簡宏逸.png',field:'地名與臺灣歷史‧十七世紀臺灣與東亞',cv1:'臺灣師範大學臺灣語文學系博士',cv2:'發表人Presenter'},
  
          {unit:'國立成功大學歷史學系副教授',url:'https://rais.ncku.edu.tw/Personal_Report/profile.php?s=MTA0MDIwMTg7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ',name:'李啟彰',ename:'Chi-Chang Lee',img:'李啟彰.png',field:'日本近代史',cv1:'日本東京大學日本史學博士',cv2:'發表人Presenter'},
  
          {unit:'國立臺灣師範大學臺灣史研究所教授',url:'https://www.taih.ntnu.edu.tw/index.php/faculty/',name:'康培德',ename:'Peter Kang',img:'康培德.png',field:'早期臺灣史、原住民史、海洋史、歷史地理、區域研究',cv1:'明尼蘇達大學雙城分校地理學博士',cv2:'與談人Discussant'},
  
          {unit:'國立高雄師範大學臺灣文化與歷史語言研究所副教授',url:'https://c.nknu.edu.tw/tni/TeacherCorner.aspx?PN=41&Tid=23',name:'吳玲青',ename:'Ling-Ching Wu',img:'吳玲青.png',field:'清代與日治臺灣史研究、清代中國史研究、史料解讀、田野與文獻調查',cv1:'日本東京大學文學博士',cv2:'與談人Discussant'},
  
          {unit:'澳亞臺灣研究協會秘書長',url:'https://mail.google.com/mail/u/2?ui=2&ik=129c6711c4&attid=0.4&permmsgid=msg-f:1796455382085600332&th=18ee4aa6e80d044c&view=att&disp=inline&realattid=f_lv1qhv1r4',name:'黃鈺婷',ename:'Phyllis Yu-Ting Huang',img:'黃鈺婷.png',field:'Taiwanese Literature; Literary works by mainlander Taiwanese writers; Taiwanese immigrants ',cv1:'PhD in Chinese Studies, Monash University, Australia',cv2:'發表人Presenter'},
  
          {unit:'美國史丹佛大學歷史學系博士生',url:'https://history.stanford.edu/people/yi-ting-chung',name:'鍾宜庭',ename:'Yi-Ting Chung',img:'鍾宜庭.png',field:'日本帝國史與跨太平洋史',cv1:'美國史丹佛大學歷史系博士',cv2:'發表人Presenter'},
  
          {unit:'國立陽明交通大學社會與文化研究所博士候選人',url:'',name:'應修平',ename:'Grace Shiu-Ping Ying',img:'應修平.png',field:'台美人媒介研究、聲音研究、媒介物質史、戲劇與再現',cv1:'國立陽明交通大學社會與文化研究所博士班',cv2:'發表人Presenter'},
  
          {unit:'國立臺灣大學臺灣文學研究所副教授',url:'https://scholars.lib.ntu.edu.tw/cris/rp/rp00284',name:'張俐璇',ename:'Li-Hsuan Chang',img:'張俐璇.png',field:'戰後臺灣文學場域、臺灣文學的研究與轉譯、數位人文研究',cv1:'	國立成功大學臺灣文學系博士',cv2:'與談人Discussant'},
  
          {unit:'國立中興大學臺灣文學與跨國文化研究所副教授',url:'https://taiwan.nchu.edu.tw/about_me.php?id=02d695a0-61e0-11ea-88e9-80fa5b5fa39c',name:'詹閔旭',ename:'Min-Xu Zhan',img:'詹閔旭.png',field:'臺灣現當代文學、移民與種族研究、東南亞華語語系文學',cv1:'	國立成功大學臺灣文學系博士',cv2:'與談人Discussant'},
  
          {unit:'國立成功大學台灣文學系副教授',url:'https://twl.ncku.edu.tw/p/405-1143-114284,c10606.php?Lang=zh-tw',name:'廖淑芳',ename:'Shu-Fang Liao',img:'廖淑芳.png',field:'戰後臺灣小說、現代主義文學、當代文學理論',cv1:'國立清華大學中文系博士',cv2:'發表人Presenter'},

          {unit:'國立中正大學臺灣文學與創意應用研究所副教授',url:'https://gitlci.ccu.edu.tw/p/406-1067-2981,r555.php?Lang=zh-tw',name:'楊智景',ename:'Chih-Ching Yang',img:'楊智景.png',field:'日本近現代文學、日治時期臺灣文學、旅行文學、台日比較文學',cv1:'日本國立御茶水女子大學人間文化研究科博士',cv2:'與談人Discussant'},
  
          {unit:'國立成功大學歷史學系教授',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=OTkwMjAxNiA7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'陳文松',ename:'Wen-Sung Chen',img:'陳文松.png',field:'臺灣近代史 ‧殖民政策史 ‧區域文化史 ‧教育社會史',cv1:'日本東京大學總合文化研究科(地域文化研究專攻)博士',cv2:'發表人Presenter'},
  
  
         
  

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