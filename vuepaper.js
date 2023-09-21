const app = Vue.createApp({
    data(){
      return{
      text:"這是測試vue",
      isLoading:false,
      search: '',
      postList: [

      {title:'2023臺灣文博會臺南館推巨型臺南古地圖 臺北也能沉浸體驗400年前臺南',url:'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8589939',author:'台南市政府文化局',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/8589939/a4fce439-848f-4e63-bb43-c6e3e630d0b4@710x470.jpg',describe:"為迎接即將到來的臺南400，萬眾矚目的臺灣文化博覽會即將於09月22日在臺北隆重登場。今年規模更甚以往，展演範圍擴及臺北五大文化場域，而策展「空總臺灣當代文化實驗場」的臺南館，跳脫以往的傳統文化展演方式，以沈浸式體驗，讓參觀者沿著歷史的軸線，感受當時的人文色彩、滄海桑田。",data:"2023.09.13"},
    
      {title:'越南國際旅展 「臺南400」意象營造跨時旅趣亮點掀熱潮',url:'https://news.ltn.com.tw/news/life/breakingnews/4423888',author:'自由時報 記者王姝琇',img:'https://img.ltn.com.tw/Upload/news/600/2023/09/10/4423888_2_1.jpg',describe:"為拓展越南旅客到台南觀光，南市府投入參與第17屆胡志明市國際旅遊展，以「臺南400」為主題，搭配旗袍意象行銷跨時旅趣，同時展示芒果乾、鳳梨乾、柚花咖啡及柚子蔘等農特產品和文創小物，吸引逾2萬名民眾及國際買家參觀，感受台南古都風華。",data:"2023.09.10"},

      {title:'穿越400年前那片陽光沙灘 2023臺灣文博會臺南館 空總魔幻登場',url:'https://newsmedia.today/%E7%A9%BF%E8%B6%8A400%E5%B9%B4%E5%89%8D%E9%82%A3%E7%89%87%E9%99%BD%E5%85%89%E6%B2%99%E7%81%98-2023%E8%87%BA%E7%81%A3%E6%96%87%E5%8D%9A%E6%9C%83%E8%87%BA%E5%8D%97%E9%A4%A8-%E7%A9%BA%E7%B8%BD/',author:'大媒體新聞網 記者 陳揚蓁',img:'https://storage.googleapis.com/stateless-newsmedia-today/2023/09/ff987ca1-0906%E3%80%90%E7%B4%85%E7%84%B6%E3%80%911080x540px.jpg',describe:"為迎接2024臺南400到來，臺南市政府文化局搶先於2023文博會推出臺南館—「400年前那片陽光沙灘」，以古地圖打造沉浸式展場，圍繞「時空穿越」、「赤崁夕照」、「原民身世」等三大主題亮點，呈現數百年前臺江內海區域內，不同族群與自然環境的豐富互動。歡迎民眾自9月22日至10月1日止，前往空總劇場（PLAY ground）一同感受滄海變桑田的精采過程。",data:"2023.09.09"},

      {title:'王育德後代贈日本大師木版畫 黃偉哲：歡迎明年返鄉出席「台南 400」',url:'https://news.ltn.com.tw/news/politics/breakingnews/4422595',author:'自由時報 記者洪瑞琴',img:'https://img.ltn.com.tw/Upload/news/600/2023/09/08/4422595_1_1.jpg',describe:"王育德紀念館將在明（9）日迎接開幕5週年，王育德博士次女王明理專程自僑居地日本返台參加活動，今（8）日在成功大學台文系教授陳麗君、台文筆會理事長陳正雄的陪同下拜會市府，並致贈日本已故國寶級大師山高登的木版畫作品「台南駅」（台南車站），市長黃偉哲代表接受並表達感謝。",data:"2023.09.08"},

      {title:'台南熱蘭遮城模型首度公開！互動式體驗重現400年前生活',url:'https://city.gvm.com.tw/article/106010',author:'城市學編輯部',img:'https://imgs.gvm.com.tw/upload/gallery/20230907/149468.jpg',describe:"古都台南400年前是什麼樣子呢？台南市舉辦「400系列活動」，其中的序幕「熱蘭遮博物館」常設展更新預計在9月23日正式開幕。有別於以往多為圖像或照片展示，本次展覽重建17世紀荷治時期「熱蘭遮城堡壘與市鎮」縮小建築模型，結合科技動畫投影、互動裝置，以及真實生動的立體聲音效，讓民眾體會當年「大員」的生活。",data:"2023.09.08"},

      {title:'台南400前哨站 南美館舉辦「台南美術400+」論壇',url:'https://money.udn.com/money/story/5635/7426197',author:'經濟日報 張傑',img:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/09/08/2/24925397.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600&exp=3600',describe:"因應2024台南400年，台南市美術館將19日舉辦「台南美術400+」美術論壇，南美館邀集廖仁義教授、廖新田教授、蕭瓊瑞教授、盧明德教授、林欽賢院長、白適銘主任等重量級藝術專家學者與會，論壇中除回顧南美館推動台南美術發展歷程進行回顧、展望並思辨外，對於台南美術經典的形塑，及文化友善平權等各種備受廣泛關注的議題，也將是此次論壇交流所關心的焦點及範圍。",data:"2023.09.08"},


      {title:'講台南400歷史 熱蘭遮博館展出2千件出土瓷器',url:'https://udn.com/news/story/7326/7411402',author:'聯合報／ 記者吳淑玲',img:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/09/02/realtime/24712277.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1',describe:"迎接「台南400」，台南市文化局籌辦在熱蘭遮博物館展出近2年來，熱蘭遮堡及周邊區域與大員市鎮考古挖掘出土文物，約從17世紀至日治時期的2千件瓷器遺物，希望透過博物館展示，以文物講歷史，讓更多民眾看見隱藏在台南地底的豐富歷史與痕跡。",data:"2023.09.02"},

      {title:'南市府、台文館簽備忘錄 合作3年共同策劃台南400',url:'https://www.cna.com.tw/news/acul/202308300234.aspx',author:'中央社記者張榮祥',img:'https://imgcdn.cna.com.tw/www/WebPhotos/1024/20230830/1025x768_wmkn_0_C20230830000169.jpg',describe:"台南市政府文化局與國立台灣文學館今天簽署合作備忘錄，將展開為期3年、5大面向的合作，且共同策劃「台南400」、台南文學季等活動。市府文化局和台文館今天簽署合作備忘錄，將展開為期3年合作，合作5大面向包括「推動國際文化交流及文學空間多元發展」、「深化研究典藏與展示專業合作」、「整合教育推廣資源，促進城市文化參與」、「建立在地文學社群交流機制，追求共榮共好」、「其他文學相關專業事項」。",data:"2023.08.30"},

      {title:'台南400年推超優惠旅遊美食寶典 高CP值預購掀熱潮',url:'https://news.ltn.com.tw/news/life/breakingnews/4408841',author:'記者王俊忠',img:'https://img.ltn.com.tw/Upload/news/600/2023/08/27/4408841_3_1.jpg',describe:"配合2024年台南建城400年的歷史里程碑，台南市史上超優惠的旅遊美食護照，即將在近日誕生、發行。這本由台南市餐旅教育協會領軍各觀光產業公協會策劃1年多完成的餐旅寶典，合作店家超過6百家、優惠金額多達2萬5千元以上，每本售價僅999元，先前開放預購加送知名時尚手提收納箱，掀起護照搶購熱潮。",data:"2023.08.27"},

      {title:'迎接台南400 鄭成功麾下2將神像開光點眼',url:'https://www.cna.com.tw/news/acul/202308260073.aspx',author:'中央社記者張榮祥',img:'https://imgcdn.cna.com.tw/www/WebPhotos/1024/20230826/1024x768_wmky_0_C20230826000026.jpg',describe:"逾3公尺的鄭成功麾下甘輝、萬禮2將神像，今天在台南市延平郡王祠開光點眼，也為2024台南建城400年及鄭成功聖誕暖身。鄭成功1624年出生於日本九州平戶市，今年是399週年聖誕，台南市副市長葉澤山等人今天前往中西區延平郡王祠祭拜，且為甘輝、萬禮2將神像開光點眼，同時為準備雕塑的虎爺金身開斧。",data:"2023.08.26"},

      {title:'台南做16歲有看頭 乘遊艇穿越福爾摩沙、體驗400今昔',url:'https://udn.com/news/story/7326/7357252',author:'聯合報／ 記者鄭惠仁',img:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/08/09/realtime/23904224.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1',describe:"「做16歲」是台南的成年傳統習俗，市府8月20日將在安平開台天后宮舉行成年禮儀式，市長黃偉哲今在記者會表示，此儀式除肯定16歲青年的能力，也期待年輕人站出來，承擔更多社會責任，扛起國家未來。",data:"2023.08.09"},
      
      {title:'台南400視覺識別系統 公私協力展豐富創意',url:'https://news.homeplus.net.tw/single/55685',author:'中嘉新聞網楊舜淮',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7907698/59f7804d-8d8f-40c1-a824-6cda89f553c5@710x470.jpg',describe:"為了迎接明年台南400年，台南市文化局自去年起，將主視覺識別系統，開放給民間單位，應用在商品開發、空間布置等等，要讓台南400融入生活，更顯繽紛。橡皮擦、手工拖鞋、茶葉罐、椪餅，從吃的到生活用品，外觀全都換上台南400年的主視覺，台南市文化局形塑「台南400」，透過民間響應，將此紀念性議題，充滿城市氛圍。",data:"2023.08.04"},
      
      {title:'台南散步導覽員 今(3)日辦「臺南400美食與小吃」研習',url:'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8579097',author:'臺南市政府觀光局',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/8579097/e3cb0579-0604-4d63-979a-5d2d5872d916@710x470.png',describe:"繼去年《米其林指南》美食評鑑，台南多家美食、小吃及餐廳，獲得入選及必比登推薦後，今年6月公布的第一屆500碗台灣著名小吃全台小吃指南，台南更創佳績，入選多達57家，足見台南美食的魅力不容小覷。為此，觀旅局今(3)日辦理台南散步導覽員及導覽志工講習，以「臺南米其林紅色指南與500碗推薦之台南小吃」為課程主題，期望第一線旅遊服務人員，一起宣傳推廣台南的旅遊與在地美食。",data:"2023.08.03"},

      {title:'熱蘭遮會動的古地圖 呈現台南400',url:'https://tw.sports.yahoo.com/news/%E7%86%B1%E8%98%AD%E9%81%AE%E6%9C%83%E5%8B%95%E7%9A%84%E5%8F%A4%E5%9C%B0%E5%9C%96-%E5%91%88%E7%8F%BE%E5%8F%B0%E5%8D%97400-125058988.html',author:'中華日報記者林雪娟',img:'https://s.yimg.com/ny/api/res/1.2/qNlcxfuKn4O.dJtiJbAPLQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/ko/cdns.com.tw/e06ada5cb255fe81afa4a593036f48f8',describe:"迎接台南四百，但你知道，四百年前的台南，是什麼樣子？熱蘭遮博物館將於今年九月二十三日，在進入二０二四年倒數一百天時，以「從大員到台灣」為主題，透過古地圖超展開，推出大型地圖動畫，呈現台南四百年滄海如何演化成為桑田變遷；展區正積極布展中，敬請期待。",data:"2023.08.03"},

      {title:'日本前眾議員拜會市長 上野宏史：來台灣定得要造訪台南',url:'https://www.storm.mg/localarticle/4847923',author:'徐炳文',img:'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/08/03/20230803-052800_U20715_M877251_5562.jpg?itok=lG9tC0uU',describe:"日本前眾議員上野宏史今（3）日拜會台南市長黃偉哲。黃偉哲除了再次感謝七月出訪上野前議員選區群馬縣時日方的接待外，也請他與家人在台南停留期間，務必品嚐芒果、火龍果等當令水果，黃市長也推薦他們可走訪台南市內保存完好的日本時代古蹟，並邀請明年來台南參加「台南400」盛大的活動。",data:"2023.08.03"},
      
      {title:'在新加坡發現臺南400 古都形象躍國際',url:'https://money.udn.com/money/story/5635/7340455',author:'經濟日報 張傑',img:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/08/01/2/23649864.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600&exp=3600',describe:"2024年是台南400的重要里程碑，台南市政府觀光旅遊局為了讓世界認識台南，積極規劃在亞洲各國，投放台南國際形象廣告，尤其是觀光市場成熟的新加坡，自去年(111)年10月13日邊境政策鬆綁後，新加坡來台旅客人次高達9萬人次，高居全球來台旅遊國家第二名，市府透過投放台南形象廣告，誠摯邀請新加坡民眾共同迎接2024台南400，向世界展示台南魅力與熱情。",data:"2023.08.01"},

      {title:'崑大旅遊系承辦臺南觀旅局計畫培訓觀光種子大使 首日指導社群經營',url:'https://n.yam.com/Article/20230726193680',author:'中央社',img:'https://imgcdn.cna.com.tw/www/postwrite/2023/20230726/00347019.202307261401168619m.jpg',describe:"崑山科技大學旅遊事業管理系承辦臺南市政府觀光旅遊局「臺南400觀光大使推動計畫」，活動於7月6日正式啟動，19日首先登場的是「觀光種子大使培訓課程」，共有40多位來自各個高中職與大專院校的本國生與外籍生一起參加，期能展現年輕學子與在台生活外國人的多元視角，行銷臺南的魅力。",data:"2023.07.26"},

      {title:'一起臺南世界交陪！臺南400首檔特展在佳里蕭壠文化園區',url:'https://reading.udn.com/read/story/122750/7263358',author:'聯合報',img:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/06/28/realtime/22892488.jpg&x=0&y=0&sw=0&sh=0&exp=3600&w=465&nt=1',describe:"「臺南400」首檔特展「當海洋相遇」，今在佳里蕭壠文化園區展出，邀請臺灣、荷蘭6名藝術家，創作出6件藝術裝置，展期持續到明年初。這項特展由蕭壠國際藝術村與荷蘭當代藝術機構iii共同籌畫，策展人是成大創意產業設計研究所副教授陳明惠，在蕭壠文化園區A1、A2及A5館開展，展覽以「海洋、土地與類考古」、「風景與懷舊」、「空間與記憶」三個子題呈現，呼應文化局推廣「一起臺南，世界交陪」的概念，展期至明年1月7日。",data:"2023.07.25"},

      {title:'到處看得見！「臺南400」用免驚 公私共造視覺識別系統展豐富創意',url:'https://art.ltn.com.tw/article/breakingnews/4369918',author:'洪瑞琴',img:'https://img.ltn.com.tw/Upload/art/page/800/2023/07/20/4369918_1.jpg',describe:"「臺南400」視覺識別系統，自去年起開放民間單位應用，免收授權費，透過產業響應共同形塑紀念性議題的城市氛圍，並且融入生活到處看得見，南市文化局歡迎各界多元運用，打造「臺南400」的繽紛豐富，以創意靈感一同與「臺南交陪」。",data:"2023.07.20"},

      {title:'黃偉哲市長會見全國日台友好議員協議會 相約臺南400再見',url:'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8561656',author:'臺南市政府新聞及國際關係處',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/8561656/90564c93-b03d-4e21-a616-a6c8bc4630a1@710x470.jpg',describe:"由日本各地友台議員組成的全國日台友好議員協議會，為了討論今年、明年分別將在仙台、臺南舉辦的台日交流高峰會，在昨(19)日由藤田和秀會長率高橋克朋副會長等日本各地議員一行8人造訪臺南，並蒞府拜會。該團成員多與臺南熟稔，包含甫與黃偉哲市長在日本橫濱會面的橫山正人副會長、促成臺南與京都市締盟的寺田一博副會長，還有長年支持臺南與和歌山市交流的遠藤富士雄理事長、井上直樹代表理事等，為表歡迎，黃偉哲市長特率新聞及國際關係處蘇恩恩處長親自接待。",data:"2023.07.20"},

      {title:'臺南400觀光種子大使培訓 開跑',url:'https://tw.news.yahoo.com/%E8%87%BA%E5%8D%97400%E8%A7%80%E5%85%89%E7%A8%AE%E5%AD%90%E5%A4%A7%E4%BD%BF%E5%9F%B9%E8%A8%93-%E9%96%8B%E8%B7%91-131016337.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAH3o_FAEP7KLp0SXhCev3kW6g8_IkpDohW-b_XxfucLri4QCKXbPA-MCHthKiVhS92kaogX0GXjimJ8gSp3LdA_Zzqa6U8Rxdc-Ca9fj5t3s2dG2qOtk4MWR2ivke5t4XCJCwdyaqpTkIOc8bHxF6LOk1_-mqLt_D0Gq_iXuKC8e',author:'汪惠松',img:'https://s.yimg.com/ny/api/res/1.2/cslmSIXo74QSlpkrJP592g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ4OTtjZj13ZWJw/https://media.zenfs.com/ko/cdns.com.tw/1a254483f478f1caf5a7af1dde080b53',describe:"迎接二０二四年「臺南４００」盛事，臺南市府觀旅局偕同崑山科大推出觀光種子大使培訓活動，六日舉行啟動儀式，內容包括影片邀請卡創作大賽、外國人體驗臺南影片徵件，期透過學生及在台生活外國人多元創新的視角推廣臺南的魅力。",data:"2023.07.06"},

      {title:'迎臺南400 2024臺灣燈會伴手禮徵選起跑',url:'https://www.chinatimes.com/realtimenews/20230705004621-260405?chdtv',author:'中時 曹婷婷',img:'https://images.chinatimes.com/newsphoto/2023-07-05/1024/20230705004622.jpg',describe:"迎接臺南400首場國際大型觀光活動「2024臺灣燈會」，臺南市政府將選拔出百大燈會推薦伴手禮及30件指定燈會伴手禮，市長黃偉哲鼓勵優質商家踴躍報名，他說，預估相關活動商機可達數億元，希望業者能呈現最具臺南特色、最好的伴手禮被全國看見。",data:"2023.07.05"},


      {title:'作為一個槓桿去打開城市文化治理的侷限：臺南400，擱來咧？',url:'https://artouch.com/art-views/cultural-policy/content-110719.html',author:'陳思宇',img:'https://d1qlj1o6gdgqqt.cloudfront.net/wp-content/uploads/2023/06/%E6%AD%B7%E5%8F%B2%E5%A0%B4%E5%9F%9F%E8%88%87%E5%B9%B3%E5%8F%B0%E5%A0%B4%E6%AC%A11-min-1110x1065.jpg',describe:"2024年臺南400夾帶同樣大量的「展會」形式重新「復出」，但不同於高雄市政府的操作，臺南市政府在策略上拋出「文化臺南400年—行動白皮書計畫」、「400+民間參與計畫」等民間參與方法，希冀能採納各方意見形塑「大家」的臺南400。究竟後續如何在大型展會的號召下，去細緻回應民眾及各方專家學者在白皮書內提出的內容，對市府而言仍是一大考驗，也是民間需要持續監督的地方。",data:"2023.06.29"},

      {title:'臺南400首檔特展亮相！ 探索台荷之間歷史文化連結',url:'https://www.chinatimes.com/realtimenews/20230628003141-260405?chdtv',author:'中時新聞網',img:'https://images.chinatimes.com/newsphoto/2023-06-28/1024/20230628003142.jpg',describe:"明年迎來「臺南400年」的里程碑，首檔特展台荷跨海藝術交流特展《當海洋相遇》，28日在佳里區蕭壠文化園區亮相，邀請荷蘭及臺南在地共6位藝術家，創作出6組作品，藉由藝術的力量，探索臺南與荷蘭之間歷史文化的連結。",data:"2023.06.28"},

      {title:'臺南400首檔特展亮相 「當海洋相遇：臺荷跨海藝術交流」 黃偉哲：看大航海時代臺荷文化激盪',url:'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8556480',author:'臺南市政府新聞及國際關係處',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/8556480/b34086a9-3080-4cd6-b9ca-affc9f7eeb39@710x470.jpg',describe:"臺南400首檔特展「當海洋相遇：臺荷跨海藝術交流特展」正式亮相！臺南市長黃偉哲今(28)日前往蕭壠文化園區主持開展記者會，邀請國內外朋友來看展，瞭解臺灣與荷蘭在大航海時代激盪出的火花。奧古斯 H. 倫內、謝茹安、蔡咅璟、陳怡如、林書楷、陳昱榮等6位參展藝術家特別出席介紹作品。市議員方一峰、謝舒凡、蔡秋蘭、陳昆和等也到場關心臺南400計畫。特展將在蕭壠文化園區A1、A2及A5館展出。以「海洋、土地與類考古」、「風景與懷舊」、「空間與記憶」三個子題呈現，呼應「一起臺南，世界交陪」的概念。",data:"2023.06.28"},

      {title:'台北時裝週開幕大秀今晚臺南登場 傳統與現代擦出古都時尚新火花',url:'https://www.tainan.gov.tw/news_content.aspx?n=13370&s=8098269',author:'臺南市政府',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/8098269/20cfdb87-8222-4f12-8bec-b0bb53732067@710x470.jpg',describe:"2023台北時裝週AW23」開幕大秀今(22日)晚將首度移師臺南「南鯤鯓代天府」，展演的題材以在地傳統藝術與工藝跨界現代時尚美學為主軸，融合傳統文化與現代時尚展現於眾，讓廟宇化身為時尚舞台秀。臺南市長黃偉哲認為，今年的台北時裝週首度南下，選擇與有三百多年歷史的南鯤鯓代天府合作，可謂時尚服裝圈的指標性事件，這代表臺南地紡織產業早已接軌國際，在2024臺南400年前夕，在地傳統工藝美學也藉開幕大秀的契機再一次站上全球舞台。",data:"2023.03.22"},

      {title:'2024年慶祝臺南建城400年 源起於熱蘭遮城 建立其建城材料來自澎湖',url:'https://today.line.me/tw/v2/article/yzyQQO1',author:'大媒體新聞網',img:'https://obs.line-scdn.net/0hlicn_8j-M0ZeFybf5cxMEWZBPzdtcSlPfCJ_c3sfanJzO3MSa3FgJX0TZGojJXFDfnN1JX8XOCIjJnYVNw/w1200',describe:"臺南市長黃偉哲在臉書上說，睽違16年臺灣燈會將再度回歸臺南，更是臺南400年一開年的第一個國際級大型觀光活動。黃偉哲表示，市府團隊一直積極爭取2024臺灣燈會主辦權，感謝交通部觀光局與評選委員給予臺南市政府機會。明年是臺南400年，也是臺灣400年，市府團隊將會全力以赴。黃偉哲說，要讓臺南的城市國際能見度再上一層，更要讓全世界看見臺灣的美麗。",data:"2023.03.01"},

      {title:'為何定調「臺南400」？ 黃偉哲曝原因避免拘泥名詞爭議',url:'https://news.ltn.com.tw/news/life/breakingnews/4221379',author:'自由時報',img:'https://img.ltn.com.tw/Upload/news/600/2023/02/24/4221379_1_1.jpg',describe:"自1624年熱蘭遮城新築起算，臺南即將於明年2024年迎來「臺南400」系列盛大紀念活動，市長黃偉哲今（24）日主持專案辦公室揭牌，同時說明定調主題「臺南400」原因，避免拘泥在名詞爭議......",data:"2023.02.24"},
    
      {title:'臺南400專案辦公室揭牌　市府盼與各界詮釋臺南400',url:'https://www.taiwanhot.net/news/1024143/%E5%8F%B0%E5%8D%97400%E5%B0%88%E6%A1%88%E8%BE%A6%E5%85%AC%E5%AE%A4%E6%8F%AD%E7%89%8C+%E5%B8%82%E5%BA%9C%E7%9B%BC%E8%88%87%E5%90%84%E7%95%8C%E8%A9%AE%E9%87%8B%E5%8F%B0%E5%8D%97400',author:'記者莊漢昌／臺南報導',img:'https://www.taiwanhot.net/cache/1068916/lg/medias-20230224-63f879d85cdf2.jpeg',describe:"2024年將迎來臺南400的里程碑，為了回顧過去及展望未來，臺南市政府成立的「臺南400專案辦公室」24日由市長黃偉哲親自揭牌，並表示從1624年到2024年，臺南經歷了時代更迭，不變的是這塊土地，居住在此的不同族群隨著時代更加緊密交織，市府盼與文化、學術及藝術界共同協力，官方民間一同來詮釋大家的臺南400......",data:"2023.02.24"},

      {title:'迢迢織路 揭開紡織工業前世今生',url:'https://tw.news.yahoo.com/%E8%BF%A2%E8%BF%A2%E7%B9%94%E8%B7%AF-%E6%8F%AD%E9%96%8B%E7%B4%A1%E7%B9%94%E5%B7%A5%E6%A5%AD%E5%89%8D%E4%B8%96%E4%BB%8A%E7%94%9F-130945898.html',author:'中華日報',img:'https://s.yimg.com/ny/api/res/1.2/htOqrYNg7Hvw3h6mVBImSg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/ko/cdns.com.tw/fcbd90abef824472337a57c73e3ad137',describe:"臺南是紡織業重鎮，但你知道，臺南為何是紡織業的故鄉？文化局出版《迢迢織路：臺南四百年來紡織工業發展與演變》新書，揭開臺南紡織工業的前世今生。臺灣第一部動力織布機就是在臺南啟動，而臺南從日治時期開始，更逐步發展成為臺灣紡織重鎮，臺南即將邁入四百年，文化局出版新書，探究從原住民以來族織布發展史，也介紹日治時期「臺灣織布株式會社」興衰與戰後臺南成為紡織重鎮過程，回顧過去輝煌歷史，也展望新時代展業轉型的有趣故事。......",data:"2023.01.03"},

      {title:'睽違16年舉辦 交通部觀光局宣布2024臺灣燈會在臺南',url:'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=7925672',author:'臺南市政府觀光局',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7925672/7551d710-611b-4c02-8c8c-4fe352097f99@710x470.jpg',describe:"黃偉哲市長第一時間知道後開心的表示，過去臺南縣市(未合併直轄市前)曾舉辦過三次臺灣燈會(原臺南市曾連續在2005年及2006年舉辦，原臺南縣則是在2008年舉辦)，至今臺灣燈會已經十多年未在臺南舉辦。2024為臺南400年也是臺灣400年，就此重要議題，市府一直積極爭取2024臺灣燈會主辦權，感謝交通部觀光局與評選委員給臺南市政府機會，雖然燈會籌備與舉辦工作龐雜，但市府各局處將通力合作，全力以赴......",data:"2022.10.11"},

      {title:'鄉愁也需要進化，李明道Akibo如何設計出「臺南400年」主視覺？',url:'https://www.verse.com.tw/article/akibo-designer',author:'VERSE',img:'https://verse-static-1.azureedge.net/storage/app/media/uploaded-files/akibo2.jpg',describe:"要如何用設計說出臺南400年的故事？臺南，這個歷史悠久的古都，歷經荷蘭、清領時期的政治權力核心，再轉化為日治、國民政府時期的區域性中心，在每個階段都呈現不同的意涵與特色。今年臺南市政府特別以「臺南400年─文化資產場域再現計畫」，透過再造歷史現場，傳達「臺南的400年，就是臺灣的400年」精神。主視覺亦邀請臺南出身的知名設計師李明道Akibo操刀，演繹當今臺南風貌。......",data:"2022.09.19"},

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
      {title:'「一首歌，一個時代」音樂會',url:'activity01.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19",register:'活動已結束'},
      {title:'「細說臺灣鐵道百年史：火車歷史的軌跡與現況」專題演講',url:'activity02.html',author:'蘇昭旭',img:'230919.jpg',data:"2023.9.19",register:'活動已結束'},
      {title:'「臺灣荷治時期的鹿與原住民」專題演講',url:'activity12.html',author:'吳聰敏',img:'230920.jpg',data:"2023.9.20",register:'活動已結束'},
      {title:'「從牛車到五分車—來蔗走走」走讀',url:'activity03.html',author:'陳文松、許乃懿、林大偉',img:'20230923.jpg',data:"2023.9.23",register:'報名額滿'},
      {title:'「迢迢織路：臺南紡織工業 400 年」專題演講',url:'activity13.html',author:'曾繁絹、段洪坤、王子碩',img:'2023092711.jpg',data:"2023.09.27",register:'開放報名中'},
      {title:'「重塑被邊緣的歷史—全球史視角的台語影視發展史」專題演講',url:'activity04.html',author:'蘇致亨',img:'231004.jpg',data:"2023.10.4",register:'開放報名中'},
      {title:'鬥鬧熱走唱隊',url:'',author:'鬥鬧熱走唱隊',img:'mainposter.jpg',data:"2023.10.14",register:'尚未開放報名'},
      {title:'「府城飲食文化的趣味」專題演講',url:'activity05.html',author:'魚夫',img:'231019.jpg',data:"2023.10.19",register:'開放報名中'},
      {title:'2023臺南國際人權藝術節',url:'https://www.tihrf-nckumuseum.com/',author:'---',img:'mainposter.jpg',data:"2023.10~12",register:'尚未開放報名'},
      {title:'「臺南400」演唱會',url:'activity11.html',author:'謝銘祐、大支、阿雞、韓森',img:'231108.jpg',data:"2023.11.08",register:'開放報名中'},
      // {title:'「展．望」國際前瞻論壇',url:'activity14.html',author:'--',img:'1110.jpg',data:"2023.11.10",register:'尚未開放報名'},
      // {title:'國際工作坊',url:'',author:'--',img:'mainposter.jpg',data:"2023.11.11",register:'尚未開放報名'},
      {title:'「不獨具人類的歷史」國際學術研討會',url:'',author:'--',img:'mainposter.jpg',data:"2023.11.17~18",register:'尚未開放報名'},
      {title:'「文學、思想與宗教」國際學術研討會',url:'',author:'--',img:'mainposter.jpg',data:"2023.11.18~19",register:'尚未開放報名'},
  
      {title:'「行走臺南四百：在一座歷史城市裡的感知、考現與書寫」專題演講',url:'activity06.html',author:'蘇峯楠',img:'2023112701.jpg',data:"2023.11.27",register:'開放報名中'},
      {title:'「散策米街味自慢」走讀',url:'activity07.html',author:'王茗禾',img:'2312021.jpg',data:"2023.12.02",register:'尚未開放報名'},
      {title:'「府城傳奇．戰火波瀾」木偶戲',url:'activity15.html',author:'古都木偶戲劇團',img:'20231206.jpg',data:"2023.12.06",register:'尚未開放報名'},
      {title:'「發現醫學臺南」走讀',url:'activity08.html',author:'待定',img:'mainposter.jpg',data:"2023.12.09",register:'尚未開放報名'},
      {title:'「臺南奇廟對談的奇妙故事」專題演講',url:'activity09.html',author:'陳益源',img:'0231215.jpg',data:"2023.12.15",register:'開放報名中'},
      {title:'「臺南400—鎮北百年老廟巡禮」走讀',url:'activity10.html',author:'郭麗桂',img:'121502.jpg',data:"2023.12.15",register:'尚未開放報名'},
     
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

