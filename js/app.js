// prepare a pool of quotes where our application can pick from
const allQuotes = [["The greatest glory in living lies not in never falling, but in rising every time we fall.", "-Nelson Mandela"],

["The way to get started is to quit talking and begin doing.", "-Walt Disney"],
["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "-Steve Jobs"],
["If life were predictable it would cease to be life, and be without flavor.", "-Eleanor Roosevelt"],
["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "-James Cameron"],
["Life is what happens when you're busy making other plans.", "-John Lennon"],
["When you reach the end of your rope, tie a knot in it and hang on.", "-Franklin D. Roosevelt"],
["Tell me and I forget. Teach me and I remember. Involve me and I learn.","-Benjamin Franklin"]
];

//Also prepare an array of colors to pick from
const colorCodes = ["#0099e5", "#ff4c4c", "#34bf49", "#be0027", "#371777", "#fbb034", "#ff6a00", "#004d73"];

//select all elements of interest
let btn = document.getElementById("btn");
let body = document.body;
let quoteBox = document.getElementById("quote-box");
let author = document.getElementById("author");


btn.addEventListener("click", getNewQuote);

function getNewQuote(){
    let randomNum = Math.floor(Math.random() * allQuotes.length);

    quoteBox.innerHTML = allQuotes[randomNum][0];
   
   
    author.innerHTML = allQuotes[randomNum][1];
  

    body.style.backgroundColor = colorCodes[randomNum];
    btn.style.backgroundColor = colorCodes[randomNum];
    author.style.color = colorCodes[randomNum];
}


//get a new quote every 10 seconds
setInterval(getNewQuote, 10000)
// setInterval(updateTime(getNewQuote), 1000)


