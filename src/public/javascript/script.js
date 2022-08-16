let abrir = document.getElementById('btn-comprar');


abrir.addEventListener('click', function(event) {
    const abrirPopup = document.getElementById('popup');

    event.preventDefault();

    if(event.target){
        abrirPopup.style.display = 'flex'
    }        
}) 