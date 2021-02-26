
function identifyActive(btn){
    // contenedor de indicadores
    var pages = [].slice.call(btn.parentNode.parentNode.children[2].children);
    let activo; 

    pages.forEach( page =>{
        if (page.classList.contains('activo')) activo = page;       
    })

    return activo;
}

function moveNext(btn){
    var fila = btn.parentNode.children[1];      // cont-carousel
    fila.scrollLeft += fila.offsetWidth;    // posición + ancho
    let activo = identifyActive(btn);

    if (activo.nextSibling) {
        activo.classList.remove('activo');          // desactivamos indicador
        activo.nextSibling.classList.add('activo'); // pasamos al sig indicador
    }
}

function movePrev(btn){
    var fila = btn.parentNode.children[1];      // cont-carousel
    fila.scrollLeft -= fila.offsetWidth;    // posición - ancho
    let activo = identifyActive(btn);

    if (activo.previousSibling) {
        activo.classList.remove('activo');              // desactivamos indicador
        activo.previousSibling.classList.add('activo'); // pasamos al sig indicador
    }
}

function showAndHideButtons(lists){
    lists.forEach(list =>{
        let row = list.children[1].children[1];         // .cont-carousel

        // Esconder botones
        list.addEventListener('mouseleave', () => {
            row.parentNode.children[0].style.display = "none";
            row.parentNode.children[2].style.display = "none";
        })
        
        // Mostrar botones
        list.addEventListener('mouseenter', ()=> {            
            if (window.getComputedStyle(row.children[0], null).display === "flex"){
                row.parentNode.children[0].style.display = "block";
                row.parentNode.children[2].style.display = "block";
            }
        })
    })
}

module.exports = {moveNext, movePrev, showAndHideButtons}