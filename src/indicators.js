function makeIndicators(lists){
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
}

export default makeIndicators