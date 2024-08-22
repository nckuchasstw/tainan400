const app = Vue.createApp({
    data() {
     
      return {
        text:'文字',
        activityList2025: [    
          {unit:'國立成功大學法律學系副教授',url:'https://www.law.ncku.edu.tw/team_detail.asp?nid=12',name:'王毓正',ename:'Yu-Cheng Wang',img:'王毓正.png',field:'環境法、行政法、科技法、公共任務私化、歐盟法',cv1:'德國符茲堡大學法學博士',cv2:'主持人Moderator'},
  
          {unit:'國立東華大學族群關係與文化學系教授',url:'https://sys.ndhu.edu.tw/RD/TeacherTreasury/tlist.aspx?tcher=10221',name:'謝若蘭',ename:'Jolan Hsieh ',img:'謝若蘭.png',field:'司法正義學、國際人權論述、法律與社會、性別/族群/階級',cv1:'國亞歷桑納州立大學司法正義學、哲學博士 ',cv2:'發表人Presenter'},
  
          {unit:'中央研究院社會學研究所研究員兼副所長',url:'https://www.ios.sinica.edu.tw/fellow/horngluenwang',name:'汪宏倫',ename:'Horng-Luen Wang',img:'汪宏倫.png',field:'民族國家、民族主義',cv1:'	美國芝加哥大學社會學博士 ',cv2:'發表人Presenter'},

          {unit:'國立暨南國際大學東南亞學系教授',url:'https://dseas.ncnu.edu.tw/p/406-1030-3646,r234.php?Lang=zh-tw',name:'李美賢',ename:'Mei-Hsien Lee',img:'李美賢.png',field:'後殖民東南亞研究、國際遷徙（台灣與東南亞）、婦女與性別研究（東南亞區域）、多元文化教育',cv1:'美國西維吉尼亞大學政治學系博士',cv2:'發表人Presenter'},
  
        //   {unit:'國立成功大學經濟系教授兼人文社會科學中心主任',url:'https://www.econ.ncku.edu.tw/faculty_detail.asp?ID=90',name:'蔡群立',ename:'Chun-Li Tsai',img:'蔡群立.png',field:'財務經濟學、貨幣經濟學',cv1:'美國德州農工大學經濟學博士',cv2:'主持人Moderator'},
  
        //   {unit:'國立成功大學歷史系教授兼副校長',url:'https://radb.ncku.edu.tw/Personal_Report/profile.php?s=ODUwODA1NCA7YWxsOzsxO3BlcnNvbmFsX3JlcG9ydF9jc3NfMQ==',name:'陳玉女',ename:'Yuh-Neu Chen',img:'陳玉女.png',field:'明代社會史、明代佛教史、中國佛教史',cv1:'日本國立九州大學東洋史學博士',cv2:'主持人Moderator'},

  
          {unit:'加拿大渥太華大學社會學暨人類學專業學院教授',url:'https://www.uottawa.ca/research-innovation/hrrec/people/simon-scott',name:'史國良',ename:'Scott E. Simon',img:'史國良.png',field:'臺灣原住民族（太魯閣族、賽德克族，達悟族）社會、自治與主權、原住民族的人權、原住民與國家的關係、關係性 (relationality)',cv1:'Ph.D., Anthropologie (Université McGill, Montréal)',cv2:'發表人Presenter'},
  
          {unit:'國立成功大學體育健康與休閒研究所教授',url:'https://pe-acad.ncku.edu.tw/p/404-1045-85805.php?Lang=zh-tw',name:'徐珊惠',ename:'Tiffany Hsu',img:'徐珊惠.png',field:'桌球、游泳、羽球、課程設計、質化研究、性別研究',cv1:'美國喬治亞大學人體運動學研究哲學博士',cv2:'主持人Moderator'},   
    
  
          {unit:'國立屏東科技大學社會工作系教授',url:'https://socialwork.npust.edu.tw/teacher/kui-kasirisir%E8%A8%B1%E4%BF%8A%E6%89%8D/',name:'許俊才',ename:'Kui Kasirisir',img:'許俊才.png',field:'部落/社區營造、原住民族社會福利政策、原住民族社會工作、健康與社會照顧',cv1:'英國布萊頓大學健康與社會政策博士',cv2:'發表人Presenter'},


          {unit:'"國立高雄師範大學英語學系教授"',url:'https://english.nknu.edu.tw/tw/staff_ii.html?nID=8',name:'楊乃女',ename:'Nainu Yang',img:'楊乃女.png',field:'烏托邦文學, 英美科幻小說, 後人類論述, 華文科幻小說, 影視科幻作品',cv1:'國立臺灣大學外國語文學系博士',cv2:'發表人Presenter'},
  
          {unit:'國立陽明交通大學電控工程研究所教授',url:'https://adaptable-canna-htxzrd.mystrikingly.com/?fbclid=IwZXh0bgNhZW0CMTAAAR2tdzYmPEJq6e5_gN8RcrB8pXoPbv-dWX-apEZRIl2I6t5ZYiqH5wHcnzA_aem_Acm0Gkjp_PbT2GdZiFuTMwGukabHklRiVgynLyjlIkYP7JSQT8spaMGoTf8PC-2SJ4FdkktjF5BmCadTT6pnoDbr',name:'楊谷洋',ename:'Kuu-Young Young',img:'楊谷洋.png',field:'機器人學習控制與力控制、機器人路徑規劃與校正、VR/機器人整合、生物控制系統',cv1:'美國西北大學電機計算機博士',cv2:'發表人Presenter'},
  
          {unit:'國立中正大學哲學系教授',url:'https://deptphi.ccu.edu.tw/p/406-1062-7568,r3322.php?Lang=zh-tw',name:'陳瑞麟',ename:'Ruey-Lin Chen',img:'陳瑞麟.png',field:'科學哲學、自然哲學、西方科學史、科技與社會',cv1:'國立臺灣大學哲學博士',cv2:'發表人Presenter'},
  
          {unit:'國立成功大學政治學系教授',url:'https://www.polsci.ncku.edu.tw/team_detail.asp?nid=9',name:'洪敬富',ename:'Chin-Fu Hung',img:'洪敬富.png',field:'比較政治、中國政府與政治、網路政治、亞太區域研究、政治經濟學、GIS',cv1:'英國華威大學政治與國際研究學博士',cv2:'主持人Moderator'},
  
  
          {unit:'法國里昂大學政治學院政治學系副教授',url:'https://www.asiatheque.com/en/contributor/stephane-corcuff',name:'高格孚',ename:'Stéphane Corcuff',img:'高格孚.png',field:'臺灣認同政治、臺灣史以及兩岸地緣政治、台海關係',cv1:'法國巴黎政治學院政治學博士',cv2:'發表人Presenter'},
  
          {unit:'中央研究院臺灣史研究所副研究員',url:'https://www.ith.sinica.edu.tw/members_faculty_look.php?l=c&no=3&id=76&page=1&ps=30',name:'吳叡人',ename:'Rwei-ren Wu',img:'吳叡人.png',field:'比較政治、政治理論、亞洲民族主義研究、臺灣政治史、臺灣政治思想史、日本近現代政治史、日本近現代政治思想史',cv1:'美國芝加哥大學政治學博士',cv2:'發表人Presenter'},
  
          {unit:'國立中興大學國際政治研究所特聘教授',url:'https://gioip.nchu.edu.tw/Front/Faculty/Full-Time/Members.aspx?id=IXkBZ6GdMlI=&PID=0000000005',name:'蔡東杰',ename:'Tung-Chieh Tsai ',img:'蔡東杰.png',field:'近代國際關係史、當前中國外交政策、東亞區域結構變遷發展、第三世界發展問題研究、兩岸關係問題研究',cv1:'國立政治大學政治研究所博士',cv2:'發表人Presenter'},
  
        
  
         
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