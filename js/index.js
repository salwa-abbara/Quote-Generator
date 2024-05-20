var quotesContainer =[
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare, As You Like It"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "If you don't stand for something you will fall for anything.",
        author: "Gordon A. Eadie"
    },
    {
        quote: "I solemnly swear that I am up to no good.",
        author: "J.K. Rowling, Harry Potter and the Prisoner of Azkaban"
    }

];
console.log(quotesContainer.length );

function generateQuote(){
    var random = Number.parseInt(Math.random()*quotesContainer.length);
    if(localStorage.getItem('random') != null){
      
        while(localStorage.getItem('random') == random){
            random = Number.parseInt(Math.random()*quotesContainer.length);
        }
    }
    localStorage.setItem('random',random);
    document.getElementById('quoteOutput').innerHTML = `\"${quotesContainer[random].quote}\"`;
    document.getElementById('authorOutput').innerHTML = `--${quotesContainer[random].author}`;
    
}