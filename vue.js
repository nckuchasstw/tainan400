const app = Vue.createApp({
    data(){
      return{
      text:"這是測試vue",
      isLoading:false,
    
      search: '',
      postList: [
    
          {title:'「一首歌，一個時代」音樂會',url:'activity01.html',author:'蔡明叡、古意唸歌團',img:'https://chass.ncku.edu.tw/var/file/11/1011/img/897854735.svg',data:"2023.4.19"},
    
          {title:'「回首與前瞻臺灣鐵路百年時路」專題演講',url:'activity02.html',author:'蘇昭旭',img:'bg01_工作區域 1.jpg',data:"2023.9.19"},
         
          {title:'「從牛車到五分車—來蔗走走」走讀',url:'activity03.html',author:'陳文松',img:'bg01_工作區域 1.jpg',data:"2023.9.20"},

          {title:'「重塑被被消音的歷史—臺語電影的發展史」專題演講',url:'activity04.html',author:'蘇致亨',img:'bg01_工作區域 1.jpg',data:"2023.10.4"},
          {title:'「府城飲食文化的趣味」專題演講',url:'activity05.html',author:'魚夫',img:'bg01_工作區域 1.jpg',data:"2023.10.19"},
          {title:'「臺南400」音樂會',url:'activity11.html',author:'謝銘祐、大支、阿雞、韓森',img:'bg01_工作區域 1.jpg',data:"2023.11.08"},
          {title:'「步入臺南街屋的時間隧道：探訪城市中的歷史與人文寶藏」專題演講',url:'activity07.html',author:'王茗禾、家永實',img:'bg01_工作區域 1.jpg',data:"2023.11.24"},
          {title:'「步入臺南街屋的時間隧道：探訪城市中的歷史與人文寶藏」走讀',url:'activity07.html',author:'王茗禾、家永實',img:'bg01_工作區域 1.jpg',data:"2023.11.24"},
          {title:'「行走臺南四百年：在一座歷史城市裡的感知、考現與書寫」專題演講',url:'activity06.html',author:'蘇峯楠',img:'bg01_工作區域 1.jpg',data:"2023.11.27"},
          {title:'「發現醫學臺南」專題演講',url:'activity08.html',author:'待定',img:'bg01_工作區域 1.jpg',data:"2023.12.1"},
          {title:'「發現醫學臺南」走讀',url:'activity08.html',author:'待定',img:'bg01_工作區域 1.jpg',data:"2023.12.1"},
          {title:'「廟宇信仰與府城四百年」專題演講',url:'activity09.html',author:'待定',img:'bg01_工作區域 1.jpg',data:"2023.12.15"},
          {title:'「府城廟宇散策」走讀',url:'activity10.html',author:'待定',img:'bg01_工作區域 1.jpg',data:"2023.12.15"}
          
          
        
      ]
    
      }
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())||
          post.author.toLowerCase().includes(this.search.toLowerCase());
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