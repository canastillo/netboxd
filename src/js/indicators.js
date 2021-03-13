function makeIndicators(lists){
    lists.forEach( list =>{
        let carousel = list.getElementsByClassName('carousel');
        let movies = list.getElementsByClassName('movies');
        let allMovies = list.getElementsByClassName('movie');
        let indicators = list.getElementsByClassName('list__indicators');
        
        allMovies = [].slice.call(allMovies);
        let mpp = movies[0].id === 'movies--horizontal' ? 3 : 5;        // movies per page
        let numPages = Math.ceil(allMovies.length/mpp);                 // cant de páginas
        
        for(let i = 0; i < numPages; i++){
            var page = document.createElement('button');                // creamos un indicador por página
            page.classList.add('indicator')                             // añadimos el estilo
            if(i === 0) page.classList.add('indicator--active');        // marcamos siempre el primer indicador
            indicators[0].appendChild(page)                             // agregamos el indicador
            
            page.addEventListener('click', (e) => {                     // cada que hagan click en un indicador
                var pages = [].slice.call(indicators[0].children);      // traemos los indicadores en su estado actual

                pages.forEach( p => {                                   // removemos la clase 'activo' a cada indicador
                    if (p.classList.contains('indicator--active')) 
                        p.classList.remove('indicator--active')
                })
                
                e.target.classList.add('indicator--active');            // activamos el indicador cliqueado
                carousel[0].scrollLeft = i * carousel[0].offsetWidth;   // movemos el scroll
            });
        }

        carousel[0].addEventListener('mouseleave', () => {
            allMovies.forEach(movie => movie.classList.remove('movie--hover'));
        })
    })
}

export default makeIndicators