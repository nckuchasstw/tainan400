const app = Vue.createApp({
    data(){
      return{
      text:"這是測試vue",
      isLoading:false,
      search: '',
      postList: [
      {title:'作為一個槓桿去打開城市文化治理的侷限：臺南400，擱來咧？',url:'https://artouch.com/art-views/cultural-policy/content-110719.html',author:'陳思宇',img:'https://d1qlj1o6gdgqqt.cloudfront.net/wp-content/uploads/2023/06/%E6%AD%B7%E5%8F%B2%E5%A0%B4%E5%9F%9F%E8%88%87%E5%B9%B3%E5%8F%B0%E5%A0%B4%E6%AC%A11-min-1110x1065.jpg',describe:"2024年臺南400夾帶同樣大量的「展會」形式重新「復出」，但不同於高雄市政府的操作，臺南市政府在策略上拋出「文化臺南400年—行動白皮書計畫」、「400+民間參與計畫」等民間參與方法，希冀能採納各方意見形塑「大家」的臺南400。究竟後續如何在大型展會的號召下，去細緻回應民眾及各方專家學者在白皮書內提出的內容，對市府而言仍是一大考驗，也是民間需要持續監督的地方。",data:"2023.06.29"},

      {title:'臺南400首檔特展亮相！ 探索台荷之間歷史文化連結',url:'https://www.chinatimes.com/realtimenews/20230628003141-260405?chdtv',author:'中時新聞網',img:'https://images.chinatimes.com/newsphoto/2023-06-28/1024/20230628003142.jpg',describe:"明年迎來「臺南400年」的里程碑，首檔特展台荷跨海藝術交流特展《當海洋相遇》，28日在佳里區蕭壠文化園區亮相，邀請荷蘭及臺南在地共6位藝術家，創作出6組作品，藉由藝術的力量，探索臺南與荷蘭之間歷史文化的連結。",data:"2023.06.28"},

      {title:'2024年慶祝臺南建城400年 源起於熱蘭遮城 建立其建城材料來自澎湖',url:'https://today.line.me/tw/v2/article/yzyQQO1',author:'大媒體新聞網',img:'https://obs.line-scdn.net/0hlicn_8j-M0ZeFybf5cxMEWZBPzdtcSlPfCJ_c3sfanJzO3MSa3FgJX0TZGojJXFDfnN1JX8XOCIjJnYVNw/w1200',describe:"臺南市長黃偉哲在臉書上說，睽違16年臺灣燈會將再度回歸臺南，更是臺南400年一開年的第一個國際級大型觀光活動。黃偉哲表示，市府團隊一直積極爭取2024臺灣燈會主辦權，感謝交通部觀光局與評選委員給予臺南市政府機會。明年是臺南400年，也是臺灣400年，市府團隊將會全力以赴。黃偉哲說，要讓臺南的城市國際能見度再上一層，更要讓全世界看見臺灣的美麗。",data:"2023.03.01"},

      {title:'為何定調「臺南400」？ 黃偉哲曝原因避免拘泥名詞爭議',url:'https://news.ltn.com.tw/news/life/breakingnews/4221379',author:'自由時報',img:'https://img.ltn.com.tw/Upload/news/600/2023/02/24/4221379_1_1.jpg',describe:"自1624年熱蘭遮城新築起算，臺南即將於明年2024年迎來「臺南400」系列盛大紀念活動，市長黃偉哲今（24）日主持專案辦公室揭牌，同時說明定調主題「臺南400」原因，避免拘泥在名詞爭議......",data:"2023.02.24"},
    
      {title:'臺南400專案辦公室揭牌　市府盼與各界詮釋臺南400',url:'https://www.taiwanhot.net/news/1024143/%E5%8F%B0%E5%8D%97400%E5%B0%88%E6%A1%88%E8%BE%A6%E5%85%AC%E5%AE%A4%E6%8F%AD%E7%89%8C+%E5%B8%82%E5%BA%9C%E7%9B%BC%E8%88%87%E5%90%84%E7%95%8C%E8%A9%AE%E9%87%8B%E5%8F%B0%E5%8D%97400',author:'記者莊漢昌／臺南報導',img:'https://www.taiwanhot.net/cache/1068916/lg/medias-20230224-63f879d85cdf2.jpeg',describe:"2024年將迎來臺南400的里程碑，為了回顧過去及展望未來，臺南市政府成立的「臺南400專案辦公室」24日由市長黃偉哲親自揭牌，並表示從1624年到2024年，臺南經歷了時代更迭，不變的是這塊土地，居住在此的不同族群隨著時代更加緊密交織，市府盼與文化、學術及藝術界共同協力，官方民間一同來詮釋大家的臺南400......",data:"2023.02.24"},

      {title:'「臺南400年」今發表主視覺暨主題音樂 黃偉哲盼臺南帶領臺灣自信前行邁向國際',url:'https://www.tainan.gov.tw/news_content.aspx?n=13370&s=7907698',author:'臺南市政府新聞及國際關係處',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7907698/59f7804d-8d8f-40c1-a824-6cda89f553c5@710x470.jpg',describe:"400年前的1624年，標誌著臺灣正式加入全球大航海時代的行列；400年來，各族群在這塊土地上衝突、合作、共生共榮的種種過程，不只形塑了今日的臺南，更建構了今天的臺灣，使臺灣在世界的舞台上持續閃耀。回顧過去、展望未來，1624年是「臺南與世界一起、互相交陪（Kau-puê）」的開始，2024年將是400年歷史承先啟後的展現。「臺南400年」活動，今（20）日由市長黃偉哲公布主視覺暨主題音樂，並宣布各類展現融合與榮光城市風貌的系列活動，自此暖身開跑......",data:"2022.07.20"},

      {title:'黃偉哲宣布「臺南400年」活動籌備開跑 將於2024年博覽會形式登場',url:'https://www.tainan.gov.tw/news_content.aspx?n=13370&s=7888168',author:'臺南市政府新聞及國際關係處',
      img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7888168/afb39f98-a1ca-4d9f-b544-c78e10d8d659@710x470.jpg',describe:"臺南市長黃偉哲今(25)日率領市府團隊召開「臺南400年」第一次籌備委員會，並邀請臺灣各界領袖與社會賢達共24位擔任籌備委員，由黃偉哲親自頒發聘書，希望藉由不同領域委員的專業與經驗，為臺南400年計畫激盪出更多火花。黃偉哲表示，「臺南400年」活動，將於2024年以「博覽會」形式登場，以城市發展、慶典活動、民間響應三大主軸，串連起2024年整年的計畫......",data:"2022.04.25"},

      {title:'「熱蘭遮城397－安平社區營造發表會」展演古堡400年風華 黃偉哲邀大家一起為古堡慶生',url:'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=7807685',author:'臺南市政府新聞及國際關係處',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7807685/25f5b361-1a6a-449c-9a49-f13764797a4d@710x470.jpg',describe:"為發揚安平獨特的魅力與熱情，安平區公所今（23）日在安平古堡舉辦一年一度「社造聯合成果展」。今日活動內容包含活力十足的社區表演、《戲話王城》安平古堡戲劇導覽、臺南𥴊仔店專題工作坊成果展示，邀請大小朋友共同參與，賦予安平小鎮新時代的創意魅力，並延續去年Cosplay嘉年華高熱度，共同點亮古堡，臺南市長黃偉哲也到場共襄盛舉......",data:"2021.10.23"},

      {title:'「臺南400年－文化資產場域再現計畫」開跑！ 臺南市府全力以赴',url:'https://tmach-culture.tainan.gov.tw/page.asp?mainid=C325F5E2-A614-4217-BA31-F11C6C7BDF0F',author:'臺南市文化資產管理處',img:'https://tmach-culture.tainan.gov.tw/warehouse/71900A22-B518-4BDE-93FD-0DD5F3C9A5FA/A37E4ACF-6948-4162-8A12-AFB22D592782.JPG',describe:"2024年為臺南走入世界的400年，為紀念此一重要時刻，臺南市政府以「臺南400年-文化資產場域再現計畫」向文化部文化資產局申請再造歷史現場專案計畫，近日傳來捷報，獲中央補助，核定總經費3億7543萬7仟元，相關補助計畫將於今年正式啟動執行，市府做好準備全力以赴，迎接臺南400年的到來......",data:"2021.08.23"},

      {title:'黃偉哲市長親訪力邀 故宮院長吳密察允任臺南城市400年文化展總召',url:'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=7697090',author:'臺南市政府',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7697090/b7b67a2e-c4ab-47b3-988f-a802433dfb10@710x470.jpg',describe:"臺南市長黃偉哲近日北上拜訪國立故宮博物院院長吳密察，力邀吳院長出任臺南城市400年文化展的總召集人。基於故鄉深厚情感，以及臺南是臺灣最早開發城市、臺南歷史大事就是臺灣國家大事的想法，吳院長慨然應允，將協助臺南市規劃2024年的文化大展......",data:"2020.07.19"},

      {title:'迎接臺南建城400年 黃偉哲視察大員市鎮調查研究成果',url:'https://www.tainan.gov.tw/news_content.aspx?n=13370&s=7625615',author:'南市府新聞及國際關係處',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7625615/2075c6d9-b13a-4f9d-9716-e2d167d0b072@710x470.jpg',describe:"臺南即將在2024年歡慶建城400週年，市府特別成立紀念活動籌備委員會，由市長黃偉哲領軍，一起為四年後即將到來的日子精心策劃。市府並與國立成功大學合作，辦理熱蘭遮城與大員市鎮的調查研究與教育推廣計畫，黃偉哲市長與成大蘇慧貞校長今(5)日一同前往石門國小的大員市鎮考古發掘現場進行視察，為「臺南400年」紀念系列活動拉開序幕。市議員李啟維也到場關心。.....",data:"2020.2.5"},

      {title:'成大「熱蘭遮城400年」計畫　重現精彩歷史與價值',url:'https://news-secr.ncku.edu.tw/p/404-1037-203159.php',author:'成功大學新聞中心',img:'https://news-secr.ncku.edu.tw/var/file/37/1037/img/2284/IMG_4666.jpg',describe:"舉頭三尺有神明，文化底蘊深厚的府城，掘地三尺有古蹟！在府城生根發展的成大，引領臺灣重大歷史事件研究與考古發掘，2月5日在安平發表2019年與臺南市政府合作考古荷蘭時期「原大員市」的發掘成果，展現不同於文字的歷史證據。未來成大將進一步整合海內外荷蘭時期臺南相關的研究與文獻，跨域調查、探勘與研究，重現精彩的歷史與價值，連接土地與人群的關聯......",data:"2020.02.05"},

      {title:'李濠仲專欄：「熱蘭遮城」差點不在安平　在曼哈頓',url:'https://www.upmedia.mg/news_info.php?Type=2&SerialNo=46469',author:'李濠仲',img:'https://www.upmedia.mg/upload/article/20180818083427216900.jpg',describe:"紐約曼哈頓的多彩多姿無庸置疑，讓人目眩神迷的，卻不只是當下炫麗的七彩霓虹，這裡連個「街角」，幾乎都可以說出各樣的故事。奧黛麗·赫本在經典之作《蒂凡內早餐》裡的一幕，取景就是在第五大道和57街街口的Tiffany珠寶店門外；「刺蔣案」的事發地點則在第五大道和59街交會處的廣場飯店前......",data:"2018.8.21"}   
      ],
      
      activityList: [
      {title:'「一首歌，一個時代」音樂會',url:'activity01.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
      {title:'「細說臺灣鐵道百年史：火車歷史的軌跡與現況」專題演講',url:'activity02.html',author:'蘇昭旭',img:'tainan.jpg',data:"2023.9.19"},
      {title:'「臺灣經濟四百年」專題演講',url:'activity12.html',author:'吳聰敏',img:'tainan.jpg',data:"2023.9.20"},
      {title:'「從牛車到五分車—來蔗走走」走讀',url:'activity03.html',author:'陳文松、林大偉',img:'tainan.jpg',data:"2023.9.23"},
      {title:'「迢迢織路：臺南紡織工業 400 年」專題演講',url:'',author:'曾繁絹',img:'tainan.jpg',data:"2023.09.27"},
      {title:'「重塑被被消音的歷史—臺語電影的發展史」專題演講',url:'activity04.html',author:'蘇致亨',img:'tainan.jpg',data:"2023.10.4"},
      {title:'「府城飲食文化的趣味」專題演講',url:'activity05.html',author:'魚夫',img:'tainan.jpg',data:"2023.10.19"},
      {title:'2023臺南國際人權藝術節',url:'',author:'---',img:'tainan.jpg',data:"2023.10~12"},
      {title:'「臺南400」音樂會',url:'activity11.html',author:'謝銘祐、大支、阿雞、韓森',img:'tainan.jpg',data:"2023.11.08"},
      {title:'「展．望」論壇',url:'',author:'--',img:'tainan.jpg',data:"2023.11.10"},
      {title:'國際工作坊',url:'',author:'--',img:'tainan.jpg',data:"2023.11.11"},
      {title:'「不獨具人類的歷史」國際學術研討會',url:'',author:'--',img:'tainan.jpg',data:"2023.11.17~18"},
      {title:'「步入臺南街屋的時間隧道：探訪城市中的歷史與人文寶藏」專題演講',url:'activity07.html',author:'王茗禾、家永實',img:'tainan.jpg',data:"2023.11.24"},
      {title:'「步入臺南街屋的時間隧道：探訪城市中的歷史與人文寶藏」走讀',url:'activity07.html',author:'王茗禾、家永實',img:'tainan.jpg',data:"2023.11.24"},
      {title:'「行走臺南四百年：在一座歷史城市裡的感知、考現與書寫」專題演講',url:'activity06.html',author:'蘇峯楠',img:'tainan.jpg',data:"2023.11.27"},
      {title:'「發現醫學臺南」專題演講',url:'activity08.html',author:'待定',img:'tainan.jpg',data:"2023.12.1"},
      {title:'「發現醫學臺南」走讀',url:'activity08.html',author:'待定',img:'tainan.jpg',data:"2023.12.1"},
      {title:'「廟宇信仰與府城四百年」專題演講',url:'activity09.html',author:'陳益源',img:'tainan.jpg',data:"2023.12.15"},
      {title:'「臺南400—鎮北百年老廟巡禮」走讀',url:'activity10.html',author:'郭麗桂',img:'tainan.jpg',data:"2023.12.15"},
     
      ],

      urlList:[
      {url:"https://chass.ncku.edu.tw/index.php",img:"https://chass.ncku.edu.tw/var/file/11/1011/img/logo-02.svg"},
      {url:"https://tsncku.com.tw/",img:"logo-01.png"},
      {url:"https://www.ncku.edu.tw/",img:"NCKU_Alt_GraphicSignature NL RGB_AW.png"},
      {url:"https://www.tnam.museum/",img:"art.jpeg"},
      {url:"https://culture.tainan.gov.tw/form/index?Parser=28,6,277,276",img:"tainancl.png"},
      {url:"https://creativetainan.culture.tainan.gov.tw/",img:"cr.jpg"},
      {url:"https://www.tnpl.tn.edu.tw/w5368759830002704284/index",img:"library.png"},
      ]
      }
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())||
          post.describe.toLowerCase().includes(this.search.toLowerCase());
          
        });
        
        
      }
    }
      
    })
    
    app.mount("#app")

