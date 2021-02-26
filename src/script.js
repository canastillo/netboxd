import makeIndicators from './indicators';
import {movePrev, moveNext, showAndHideButtons} from './buttons';
import addZoomEffect from './movies';
import './style.css'

var buttonsPrev = document.querySelectorAll('.btn-prev');
var buttonsNext = document.querySelectorAll('.btn-next');
var lists = document.querySelectorAll('.lista');
var allMovies = document.querySelectorAll('.pelicula');

// Pasa de dom objects -> arreglos
buttonsPrev = [].slice.call(buttonsPrev);
buttonsNext = [].slice.call(buttonsNext);
lists = [].slice.call(lists);
allMovies = [].slice.call(allMovies);

// Agrega eventos para mover las listas
buttonsPrev.forEach( prev =>{
    // prev.setAttribute('onclick', 'movePrev(this)')
    prev.addEventListener('click', () => movePrev(prev))
});
buttonsNext.forEach( next =>{
    // next.setAttribute('onclick', 'moveNext(this)')
    next.addEventListener('click', () => moveNext(next))
});

showAndHideButtons(lists);
makeIndicators(lists);      //Agrega indicadores para cada lista
addZoomEffect(allMovies);   //Agrega efecto zoom a los posters