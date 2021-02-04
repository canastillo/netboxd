
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
    fila = btn.parentNode.children[1];      // cont-carousel
    fila.scrollLeft += fila.offsetWidth;    // posición + ancho
    let activo = identifyActive(btn);

    if (activo.nextSibling) {
        activo.classList.remove('activo');          // desactivamos indicador
        activo.nextSibling.classList.add('activo'); // pasamos al sig indicador
    }
}

function movePrev(btn){
    fila = btn.parentNode.children[1];      // cont-carousel
    fila.scrollLeft -= fila.offsetWidth;    // posición - ancho
    let activo = identifyActive(btn);

    if (activo.previousSibling) {
        activo.classList.remove('activo');              // desactivamos indicador
        activo.previousSibling.classList.add('activo'); // pasamos al sig indicador
    }
}

module.exports={moveNext, movePrev}