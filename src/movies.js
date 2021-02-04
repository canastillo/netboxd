function addZoomEffect(movies){
    movies.forEach(movie => {
        movie.addEventListener('mouseenter', (e) => {
            const element = e.currentTarget;
            
            setTimeout(() => {
                allMovies.forEach(pelicula => pelicula.classList.remove('hover'));
                element.classList.add('hover');
            }, 200)
        })
    })
}

module.exports={addZoomEffect}