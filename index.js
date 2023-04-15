let cards=[]
let hasBlackJack=false
let isAlive=false
let firstcard,secondcard=0
let sum= 0;

let player={
    name:" Sumanth",
    chips:"5000"
}
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")


playerEl.textContent+= player.name+" $"+player.chips
function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber===1)
        return 11
    else if(randomNumber>10 )
        return 10
    else
        return randomNumber
}

function startGame(){
    isAlive=true

    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum=cards[0]+cards[1]   
    renderGame()
    
}
function renderGame(){
    if(sum<=20){
        message= "Do you want to pick another card?"
    }else if(sum===21){
        message= "Woohoo! You've got a BlackJack!"
        hasBlackJack=true
    }else{
        message= "You're out of the game"
        isAlive=false
        cards.length=0
    }
    sumEl.textContent="Sum: "+sum
    messageEl.textContent=message
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
        cardsEl.textContent+=cards[i]+" "
}
function newCard(){
    let card=getRandomCard()
    if(isAlive && !hasBlackJack){
        sum+=card
        cards.push(card)
        renderGame()
    }
}