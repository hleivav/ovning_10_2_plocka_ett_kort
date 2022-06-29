const newCard = document.getElementById("btnNewCard"); 
newCard.onclick = pickNewCard;
let cardExits = false; 

function pickNewCard(){
    fullUri = "http://deckofcardsapi.com/api/deck/new/draw/?count=1";

    fetch(fullUri)
    .then(res=>res.json())
    .then(data=>
    {
        //kod här

            const para = document.createElement("IMG");
            para.setAttribute("src", data.cards[0].image);
            cardExits = true; 
            document.getElementById("ShowResult").appendChild(para);
            console.log(para.src);


           // para.style.display = 'none';

    })
    .catch(err=>console.log(err))

}

