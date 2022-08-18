let abrir = document.getElementById('btn-comprar');
let popupbtn = document.getElementById('popup-btn-x');
let emailLogin = document.getElementById('email');
let senhaLogin = document.getElementById('senha');
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

formlogin.addEventListener('submit', function(event) {
    event.preventDefault()
})