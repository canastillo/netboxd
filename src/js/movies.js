function addZoomEffect(lists){
    lists.forEach(list => {
        let carousel = list.getElementsByClassName('carousel');
        var movies = list.getElementsByClassName('movie');
        movies = [].slice.call(movies);
        
        movies.forEach(movie => {
            movie.addEventListener('mouseenter', (e) => {
                const element = e.currentTarget;

                setTimeout(() => {
                    movies.forEach(movie => movie.classList.remove('movie--hover'));
                    element.classList.add('movie--hover');
                }, 200)
            })
        })

        carousel[0].addEventListener('mouseleave', () => {
            movies.forEach(movie => movie.classList.remove('movie--hover'));
        })
    })
}

export default addZoomEffect