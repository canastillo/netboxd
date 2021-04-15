import {showAndHideButtons, addClickEventOnButtons} from './buttons';
import makePositionIndicators from './indicators';
import addZoomEffect from './movies';

function runApp(){
    var lists = document.querySelectorAll('#list');
    lists = [].slice.call(lists);

    makePositionIndicators(lists);
    showAndHideButtons(lists);
    addClickEventOnButtons(lists);
    addZoomEffect(lists);
}

export default runApp