define(function () {
    function randomCardsList(cardsCount) {
        var allCards = [21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54, 61, 62, 63, 64, 71, 72, 73, 74,
            81, 82, 83, 84, 91, 92, 93, 94, 101, 102, 103, 104, "j1", "j2", "j3", "j4", "q1", "q2", "q3", "q4", "k1", "k2", "k3", "k4",
            "a1", "a2", "a3", "a4", "jo1", "jo2"];

        var list = [];


        for (var i = 0; i < cardsCount; i++) {
            var number = Math.floor(Math.random() * 53);
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
        var allCards = ["J1", "J2", "J3", "J4", "K1", "K2", "K3", "K4"];

        var list = [];


        for (var i = 0; i < cardsCount; i++) {
            var number = Math.floor(Math.random() * 7);
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