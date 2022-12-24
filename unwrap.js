let leftPaper, rightPaper, toReveal;

leftPaper = document.querySelector(".leftPaper");
rightPaper = document.querySelector(".rightPaper");
toReveal = document.querySelector(".toReveal");

toReveal.src = new URLSearchParams(window.location.search).get('img');

//down from here is stolen code from Gigy on https://stackoverflow.com/questions/17992543/how-do-i-drag-an-image-smoothly-around-the-screen-using-pure-javascript

function startDrag(e) {
    // determine event object
    if (!e) {
        var e = window.event;
    }
    if(e.preventDefault) e.preventDefault();

    // IE uses srcElement, others use target
    targ = e.target ? e.target : e.srcElement;

    console.log(targ.classList);
    if (!~Array.from(targ.classList).indexOf('dragme')) {return};
    // calculate event X, Y coordinates
        offsetX = e.clientX;
        offsetY = e.clientY;

    // assign default values for top and left properties
    if(!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
        document.onmousemove=dragDiv;
    return false;

}
function dragDiv(e) {
    if (!drag) {return};
    if (!e) { var e= window.event};
    // var targ=e.target?e.target:e.srcElement;
    // move div element
    targ.style.left=coordX+e.clientX-offsetX+'px';
    targ.style.top=coordY+e.clientY-offsetY+'px';
    return false;
}
function stopDrag() {
    drag=false;
}
window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}