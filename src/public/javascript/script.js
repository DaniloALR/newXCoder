let abrir = document.getElementById('btn-comprar');
let popupbtn = document.getElementById('popup-btn-x');

let formlogin = document.getElementById('form-login')


abrir.addEventListener('click', function(event) {
    const abrirPopup = document.getElementById('popup');

    event.preventDefault();

    if(event.target){
        abrirPopup.style.display = 'flex'
    }        
}) 

popupbtn.addEventListener('click', function(event) {
    const abrirPopup = document.getElementById('popup');

    event.preventDefault();

    if(event.target){
        abrirPopup.style.display = 'none'
    }
})
