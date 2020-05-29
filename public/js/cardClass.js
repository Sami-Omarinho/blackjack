var card = {};
var deck = [];

function createCards()
{
    var suitcounter = 0;
    while(suitcounter < 4)
    {
        suitcounter++;
        for(var x = 1; x < 14; x++)
        {
            card = {
                suit: determineSuit(suitcounter),
                cardNumber: determineNumber(x),
                value: determineValue(x)
            };
            deck.push(card);
        }
    }
    shuffle();
    console.log(deck);
}

function shuffle()
{
    deck.sort(function() { return 0.5 - Math.random() });
}

function determineValue(z)
{
    var value;
    if(z > 1 && z <= 10)
    {
        value = z;
    }else if(z  > 10){
        value = 10;
    }else{
        value = 11;
    }
    return value;
}

function determineNumber(y)
{
    var number;
    if(y > 1 && y <= 10)
    {
        number = y;
    }else{
        switch(y)
        {
            case 1:
                number = "A";
                break;
            case 11:
                number = "Boer";
                break;
            case 12:
                number = "Vrouw";
                break;
            case 13:
                number = "Koning";
                break;
        }
    }
    return number;
}

function determineSuit(i) 
{
    var suit;
    switch(i)
    {
        case 1:
            suit = "schoppen";
            break;
        case 2:
            suit = "harten";
            break;
        case 3:
            suit = "ruiten";
            break;
        case 4:
            suit = "klaveren";
            break;
    }
    return suit;
}


