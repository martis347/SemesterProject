define(['utils/randomCards'], function(cards){
    return function () {
        return cards.getRandomCardsList2(6);
    }
})