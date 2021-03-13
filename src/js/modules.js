import {movePrev, moveNext, showAndHideButtons} from './buttons';
import makeIndicators from './indicators';
import addZoomEffect from './movies';

function runApp(){
    var buttonsPrev = document.querySelectorAll('#carousel-cont__button--prev');
    var buttonsNext = document.querySelectorAll('#carousel-cont__button--next');
    var lists = document.querySelectorAll('#list');
    // var allMovies = document.querySelectorAll('#movie');

    // var carousels = document.querySelectorAll('#carousel');

    // Pasa de dom objects -> arreglos
    buttonsPrev = [].slice.call(buttonsPrev);
    buttonsNext = [].slice.call(buttonsNext);
    lists = [].slice.call(lists);
    // allMovies = [].slice.call(allMovies);

    // Agrega eventos para mover las listas
    buttonsPrev.forEach( prev =>{
        prev.addEventListener('click', () => movePrev(prev))
    });
    buttonsNext.forEach( next =>{
        next.addEventListener('click', () => moveNext(next))
    });

    makeIndicators(lists);      //Agrega indicadores para cada lista
    addZoomEffect(lists);       //Agrega efecto zoom a los posters
    showAndHideButtons(lists);  //Agrega efectos para mostrar y esconder los botones
}

export default runApp