// Collection of Quotes
let quotes = [
    {
        quote: "Do what you can, with what you have, where you are.", 
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it’s done.", 
        author: "Nelson Mandela"
    },
    {
        quote: "Happiness depends upon ourselves.", 
        author: "Aristotle"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.", 
        author: "Albert Einstein"
    },
    {
        quote: "Fall seven times and stand up eight.", 
        author: "Japanese Proverb"
    }
]

// Function
function getRandomQuote(quotes) {
    let position = Math.floor(Math.random() * quotes.length);
    return `${quotes[position].quote} - ${quotes[position].author}`
}

// Select Objects
const quote = document.querySelector('#quote');
const generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', () => {
    quote.textContent = getRandomQuote(quotes);
});