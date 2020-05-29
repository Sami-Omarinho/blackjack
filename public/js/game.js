arrPlayers = [];
arrDealer = [];

function init()
{
    createCards();
    dealCardPlayers();
    console.log(arrPlayers);
    console.log(arrDealer);
}

function winGame()
{

}

function loseGame()
{
    
}

function dealCardPlayers()
{
    var getCard1;
    var getCard2;
    for(y = 0; y < 2; y++)
    {
        for(x = 0; x < 2; x++)
        {
            var topdeck = deck.length - 1;
            if(x == 1)
            {
                getCard1 = deck[topdeck];
                deck.splice(-1,1);
            }else{
                getCard2 = deck[topdeck];
                deck.splice(-1,1);
            }
        }

        if(arrPlayers.length == 1)
        {
            dealer = {
                card1: getCard1,
                card2: getCard2
            }
            arrDealer.push(dealer);
        }else{
            player = {
                card1: getCard1,
                card2: getCard2
            }
            arrPlayers.push(player);
        }
    }
}

function hit()
{
    
}

function hold()
{
    
}

$( document ).ready(function() {
    init();
});