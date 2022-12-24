let leftPaper, rightPaper, toReveal;

leftPaper = document.querySelector(".leftPaper");
rightPaper = document.querySelector(".rightPaper");
toReveal = document.querySelector(".toReveal");

toReveal.src = new URLSearchParams(window.location.search).get('img')