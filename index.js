// const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards){
    let message = []
    for(const name of cards) {
        message.push(`Thank you, ${name}, for the wonderful surprise gift!`)
        debugger;
    }
    return message;
};

function countDown(num) {
    for(let i=num; i >= 0; i--) {
        console.log(i);
    }
}