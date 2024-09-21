var quote = document.getElementById("quote");
var all_quotes = document.getElementById("all_quotes");
var quoteBank = [
    '“Quote 1"',
    '"Quote 2"',
    '"Quote 3"',
    '"Quote 4"',
    '"Quote 5"',
    '"Quote 6"',
    '"Quote 7"',
    '"Quote 8"',
    '"Quote 9"',
    '"Quote 10"',
];
var emptyQuotes = ['""'];
var filteredQuotes = quoteBank.filter(function (item) { return !emptyQuotes.includes(item); });
function getRandomOption(quotes) {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
function generator() {
    var randomChoice = getRandomOption(filteredQuotes);
    quote.innerText = randomChoice;
}
document.addEventListener('DOMContentLoaded', function () {
    all_quotes.innerText = filteredQuotes.join('\n\n');
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        generator();
    }
});
