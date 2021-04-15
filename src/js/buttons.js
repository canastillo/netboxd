function addClickEventOnButtons(lists){
    lists.forEach(list => {
        let prevButton = list.getElementsByClassName('carousel-cont__button--prev');
        let nextButton = list.getElementsByClassName('carousel-cont__button--next');
        
        prevButton[0].addEventListener('click', () => movePrev(list))
        nextButton[0].addEventListener('click', () => moveNext(list))
    })
}

function movePrev(list){
    let carousel = list.getElementsByClassName('carousel');
    carousel[0].scrollLeft -= carousel[0].offsetWidth;

    let activeIndicator = identifyActiveIndicator(list);

    if (activeIndicator.previousSibling) {
        activeIndicator.classList.remove('indicator--active');
        activeIndicator.previousSibling.classList.add('indicator--active');
    }
}

function moveNext(list){
    let carousel = list.getElementsByClassName('carousel');
    carousel[0].scrollLeft += carousel[0].offsetWidth;

    let activeIndicator = identifyActiveIndicator(list);

    if (activeIndicator.nextSibling) {
        activeIndicator.classList.remove('indicator--active');
        activeIndicator.nextSibling.classList.add('indicator--active');
    }
}

function identifyActiveIndicator(list){
    let indicators = list.getElementsByClassName('indicator');
    let activeIndicator;
    
    indicators = [].slice.call(indicators); //Pasar de DOM object -> array

    indicators.forEach(indicator => {
        if (indicator.classList.contains('indicator--active')) activeIndicator = indicator;
    })

    return activeIndicator;
}

function showAndHideButtons(lists){
    lists.forEach(list => {
        let buttons = list.getElementsByClassName("carousel-cont__button");
        let movies = list.getElementsByClassName("movies");

        buttons = [].slice.call(buttons); //Pasar de DOM object -> array
        
        // Esconder botones
        list.addEventListener('mouseleave', () => {
            buttons.forEach(button =>{
                button.style.display = "none";
            })
        })
        
        // Mostrar botones
        list.addEventListener('mouseenter', () => {
            if (window.getComputedStyle(movies[0], null).display === "flex"){
                buttons.forEach(button =>{
                    button.style.display = "block";
                })
            }
        })
    })
}

module.exports = {showAndHideButtons, addClickEventOnButtons}