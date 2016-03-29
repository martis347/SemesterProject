define(['utils/randomCards'], function(cards){
    return function () {
        return cards.getRandomCardsList(6);
    }
})