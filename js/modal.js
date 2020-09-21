var modal =document.getElementsByClassName('modal-content')[0];
var modalBtn =document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var iframe = document.querySelector( 'iframe');

//mouse event for close button
modal.addEventListener('mouseenter' ,displayCloseBtn)
modal.addEventListener('mouseleave' ,hideCloseBtn)

//event for clicking play button to play video
modalBtn.addEventListener('click',openModal);

// event for closing video
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',clickOutside);


//opening modal
function openModal(){    
  modal.style.display='block';
  modalBtn.style.display='none';

}

//closing modal
function closeModal(){
  if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
    }
  modalBtn.style.display='block';
  modal.style.display='none';
}

// click outside for closing modal 
function clickOutside(e){
  if(e.target==modal)
  modal.style.display='none';
}

//display close Button when hover at modal
function displayCloseBtn(){
  closeBtn.style.display='block';
}

// hidding  close button when hover outside
function hideCloseBtn(){
  closeBtn.style.display='none';

}
