define(function () {
    function randomCardsList(cardsCount) {
        var allCards = ["1S","2S","3S","4S","5S","6S","7S","8S","9S","10S","11S","12S","13S","14S","15S","16S","17S",
        "18S","19S","20S","21S","22S","23S","24S","25S","26S","27S","28S","29S","30S","31S","32S","33S","34S","33S","34S",
        "35S","36S","37S","38S","39S","40S","41S","42S"];

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
        var allCards = ["1SF","2SF","3SF","4SF","5SF","6SF","7SF","8SF","9SF","10SF","11SF","12SF","13SF","14SF","15SF","16SF","17SF",
        "18SF","19SF","20SF","21SF","22SF","23SF","24SF","25SF","26SF","27SF","28SF","29SF","30SF","31SF","32SF","33SF","34SF"];

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