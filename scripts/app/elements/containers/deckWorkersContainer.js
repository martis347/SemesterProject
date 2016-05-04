define(['pixi', 'utils/randomCards', 'cards/workerCard'], function (PIXI, randomCards, worker) {
    var container = new PIXI.Container();
    container.position.x = 1050;
    container.position.y = 380;
    container.name = "workersDeck";

    var cards = randomCards.randomCardsList(6);

    for (var i = 0; i < cards.length; i++) {
        var cardSprite;

        if (i != cards.length - 1) {
            cardSprite = worker.create(cards[i], "init","S");
            cardSprite.position.x = i * 110;
            cardSprite.card.index = i;
        }
        else {
            cardSprite = worker.create(cards[i], "init","S");
            cardSprite.position.x = 580;
        }

        container.addChild(cardSprite);
    }

    return container;
});