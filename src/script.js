var buttonsPrev = document.querySelectorAll('.btn-prev');   // todos los btn-prev
var buttonsNext = document.querySelectorAll('.btn-next');   // todos los btn-next

var allMovies = document.querySelectorAll('.pelicula');     // todas las películas
allMovies = [].slice.call(allMovies);                      

var lists = document.querySelectorAll('.lista');            // todas las listas
lists = [].slice.call(lists);                               // las vuelve arreglo

// Agregamos evento de btn-prev
buttonsPrev = [].slice.call(buttonsPrev);
buttonsPrev.forEach( prev =>{prev.setAttribute('onclick', 'movePrev(this)')} );

// Agregamos evento de btn-next
buttonsNext = [].slice.call(buttonsNext);
buttonsNext.forEach( next =>{next.setAttribute('onclick', 'moveNext(this)')} );

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

function identifyActive(btn){
    // contenedor de indicadores
    var pages = [].slice.call(btn.parentNode.parentNode.children[2].children);
    let activo; 

    pages.forEach( page =>{
        if (page.classList.contains('activo')) activo = page;       
    })

    return activo;
}

lists.forEach(list =>{
    let row = list.children[1].children[1];         // .cont-carousel
    let movies = row.children[0].children           // películas en esa lista
    let contPages = list.children[2];               // .indicadores
    
    movies = [].slice.call(movies);
    let mpp = (row.children[0].classList.contains('horizontal')) ? 3 : 5;   // movies per page
    let numPages = Math.ceil(movies.length/mpp);                            // cant de páginas
    
    for(let i = 0; i < numPages; i++){
        var page = document.createElement('button');// creamos un indicador por página
        if(i === 0) page.classList.add('activo');   // marcamos siempre el primer indicador
        contPages.appendChild(page);                // agregamos el indicador
        
        page.addEventListener('click', (e) => {                 // cada que hagan click en un indicador
            var pages = [].slice.call(contPages.children);      // traemos los indicadores en su estado actual

            pages.forEach( p => {                               // removemos la clase 'activo' a cada indicador
                if (p.classList.contains('activo')) p.classList.remove('activo')
            })

            e.target.classList.add('activo');                   // activamos el indicador cliqueado
            row.scrollLeft = i * row.offsetWidth;               // movemos el scroll
        });
    }
    
    row.addEventListener('mouseleave', () => {
        movies.forEach(movie => movie.classList.remove('hover'));
    })

    // Esconder botones
    list.addEventListener('mouseleave', () => {
        row.parentNode.children[0].style.display = "none";
        row.parentNode.children[2].style.display = "none";
    })

    // Mostrar botones
    list.addEventListener('mouseenter', ()=> {
        console.log(row.children[0].style.display);

        if (window.getComputedStyle(row.children[0], null).display === "flex"){
            row.parentNode.children[0].style.display = "block";
            row.parentNode.children[2].style.display = "block";
        }
    })
})

allMovies.forEach(movie => {
    movie.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;

        setTimeout(() => {
            allMovies.forEach(pelicula => pelicula.classList.remove('hover'));
            element.classList.add('hover');
        }, 200)
    })
})