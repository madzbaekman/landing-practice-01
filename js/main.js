// 변수 생성
const modalClick = document.querySelectorAll('.nav-right a');
const modalBack = document.querySelectorAll('.modal-bg');
const modalClose = document.querySelectorAll('.close');
const checkBtn = document.querySelectorAll('.check-btn');

// check Btn
for (let i = 0; i < checkBtn.length; i++) {
  checkBtn[i].addEventListener('click', function(){
    alert('당장 구매하기를 클릭하셨습니다.');
  });  
}

// modal class add & remove
for (let i = 0; i < modalClick.length; i++) {
  modalClick[i].addEventListener('click', function(){
    modalBack[i].classList.add('modal-show');
  });
}

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function(){
    modalBack[i].classList.remove('modal-show');
  });
}
