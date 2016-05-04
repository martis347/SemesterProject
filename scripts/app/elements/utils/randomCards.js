define(function () {
    function randomCardsList(cardsCount) {
        var allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
        22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];

        var list = [];


        for (var i = 0; i < cardsCount; i++) {
            var number = Math.floor(Math.random() * 42);
            if (list.indexOf(allCards[number]) === -1) {
                list.push(allCards[number]);
            }
            else {
                i--;
            }
        }

        return list;
    }

    function randomCardsList2(cardsCount) {
        var allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
        22,23,24,25,26,27,28,29,30,31,32,33,34]

        var list = [];


        for (var i = 0; i < cardsCount; i++) {
            var number = Math.floor(Math.random() * 34);
            if (list.indexOf(allCards[number]) === -1) {
                list.push(allCards[number]);
            }
            else {
                i--;
            }
        }

        return list;
    }
    
    return {
        randomCardsList,
        randomCardsList2
    }
});