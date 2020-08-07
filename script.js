function quote(text, author) {
    this.text = text
    this.author = author
}

let q1 = new quote("Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.", "Albert Einstein")
let q2 = new quote("If you tell the truth, you don't have to remember anything.", "Mark Twain")
let q3 = new quote("Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde")
let q4 = new quote("Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi")
let q5 = new quote("If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "James Cameron")

var Quotes = [q1, q2, q3, q4, q5]

var btn = document.getElementsByClassName('generate-btn')[0]

btn.onclick = function() {
    var randomQuote = Math.floor(Math.random() * Quotes.length)
    
    document.getElementsByClassName('quote')[0].innerHTML = Quotes[randomQuote].text
    document.getElementsByClassName('author')[0].innerHTML = Quotes[randomQuote].author
}