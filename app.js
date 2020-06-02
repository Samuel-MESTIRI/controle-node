var express = require('express'); 
var http = require('http'); 
var app = express(); 
const fetch = require('node-fetch');

app.set('views', './')
app.set('view engine', 'pug');

let cardsImages
fetch("https://deckofcardsapi.com/api/deck/26zswqwpxrrg/draw/?count=52")
  .then(response => response.json())
  .then(response => {
    cardsImages = response.cards.map(el => {
      return el.images.png
    })
    fetch("https://deckofcardsapi.com/api/deck/26zswqwpxrrg/shuffle")
  } )
  .catch(error => console.log("Erreur : " + error));




app.get('/', function(req, res){   
  res.render('index', { title: 'Cards', cards: cardsImages});
  res.end(); 
}); 


http.createServer(app).listen(4567);