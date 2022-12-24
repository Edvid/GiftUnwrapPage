let leftPaper, rightPaper, toReveal;

leftPaper = document.querySelector(".leftPaper");
rightPaper = document.querySelector(".rightPaper");
toReveal = document.querySelector(".toReveal");

toReveal.src = window.location.search.get('img');