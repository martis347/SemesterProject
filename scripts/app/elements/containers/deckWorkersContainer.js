define(['pixi', 'utils/randomCards', 'cards/workerCard'], function (PIXI, randomCards, worker) {
    var container = new PIXI.Container();
    container.position.x = 1050;
    container.position.y = 380;

    var cards = randomCards.randomCardsList(6);

    for (var i = 0; i < cards.length; i++) {
        if (i != cards.length - 1) {
            var cardSprite = worker.create(cards[i]);
            cardSprite.position.x = i * 110;
            cardSprite.index = i;
        }
        else {
            cardSprite.position.x = 580;
        }

        container.addChild(cardSprite);
    }

    return container;
});