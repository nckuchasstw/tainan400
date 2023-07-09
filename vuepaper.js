const app = Vue.createApp({
    data(){
      return{
      text:"這是測試vue",
      isLoading:false,
    
      search: '',
      postList: [
    
          {title:'台南400專案辦公室揭牌　市府盼與各界詮釋台南400',url:'https://www.taiwanhot.net/news/1024143/%E5%8F%B0%E5%8D%97400%E5%B0%88%E6%A1%88%E8%BE%A6%E5%85%AC%E5%AE%A4%E6%8F%AD%E7%89%8C+%E5%B8%82%E5%BA%9C%E7%9B%BC%E8%88%87%E5%90%84%E7%95%8C%E8%A9%AE%E9%87%8B%E5%8F%B0%E5%8D%97400',author:'記者莊漢昌／台南報導',img:'https://www.taiwanhot.net/cache/1068916/lg/medias-20230224-63f879d85cdf2.jpeg',describe:"2024年將迎來台南400的里程碑，為了回顧過去及展望未來，台南市政府成立的「台南400專案辦公室」24日由市長黃偉哲親自揭牌，並表示從1624年到2024年，台南經歷了時代更迭，不變的是這塊土地，居住在此的不同族群隨著時代更加緊密交織，市府盼與文化、學術及藝術界共同協力，官方民間一同來詮釋大家的台南400......",data:"2023.02.24"},
    
          {title:'李濠仲專欄：「熱蘭遮城」差點不在安平　在曼哈頓',url:'https://www.upmedia.mg/news_info.php?Type=2&SerialNo=46469',author:'李濠仲',img:'https://www.upmedia.mg/upload/article/20180818083427216900.jpg',describe:"紐約曼哈頓的多彩多姿無庸置疑，讓人目眩神迷的，卻不只是當下炫麗的七彩霓虹，這裡連個「街角」，幾乎都可以說出各樣的故事。奧黛麗·赫本在經典之作《蒂凡內早餐》裡的一幕，取景就是在第五大道和57街街口的Tiffany珠寶店門外；「刺蔣案」的事發地點則在第五大道和59街交會處的廣場飯店前......",data:"2018.8.21"},
         
          {title:'迎接台南建城400年 黃偉哲視察大員市鎮調查研究成果',url:'https://www.tainan.gov.tw/news_content.aspx?n=13370&s=7625615',author:'南市府新聞及國際關係處',img:'https://w3fs.tainan.gov.tw/001/Upload/1/relpic/9748/7625615/2075c6d9-b13a-4f9d-9716-e2d167d0b072@710x470.jpg',describe:"台南即將在2024年歡慶建城400週年，市府特別成立紀念活動籌備委員會，由市長黃偉哲領軍，一起為四年後即將到來的日子精心策劃。市府並與國立成功大學合作，辦理熱蘭遮城與大員市鎮的調查研究與教育推廣計畫，黃偉哲市長與成大蘇慧貞校長今(5)日一同前往石門國小的大員市鎮考古發掘現場進行視察，為「台南400年」紀念系列活動拉開序幕。市議員李啟維也到場關心。.....",data:"2020.2.5"}

          
        
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
    },
   

      
    })
    
    
    
    app.mount("#app")

    var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})