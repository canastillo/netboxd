function makeIndicators(lists){
    lists.forEach( list=>{
        let row = list.children[1].children[1];         // .cont-carousel
        let movies = row.children[0].children           // películas en esa lista
        let contPages = list.children[2];               // .indicadores
        
        movies = [].slice.call(movies);
        let mpp = (row.children[0].classList.contains('horizontal')) ? 3 : 5;   // movies per page
        let numPages = Math.ceil(movies.length/mpp);                            // cant de páginas
        
        for(let i = 0; i < numPages; i++){
            var page = document.createElement('button');           // creamos un indicador por página
            page.classList.add('indicator')                        // añadimos el estilo
            if(i === 0) page.classList.add('indicator--active');   // marcamos siempre el primer indicador
            contPages.appendChild(page);                           // agregamos el indicador
            
            page.addEventListener('click', (e) => {                 // cada que hagan click en un indicador
                var pages = [].slice.call(contPages.children);      // traemos los indicadores en su estado actual
            
                pages.forEach( p => {                               // removemos la clase 'activo' a cada indicador
                    if (p.classList.contains('indicator--active')) 
                        p.classList.remove('indicator--active')
                })
                
                e.target.classList.add('indicator--active');                   // activamos el indicador cliqueado
                row.scrollLeft = i * row.offsetWidth;               // movemos el scroll
            });
        }
    
        row.addEventListener('mouseleave', () => {
            movies.forEach(movie => movie.classList.remove('movie--hover'));
        })
    })
}

export default makeIndicators