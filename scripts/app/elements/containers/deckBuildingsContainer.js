define(['pixi', 'utils/randomCards', 'cards/buildingCard'], function (PIXI, randomCards, building) {
    var container = new PIXI.Container();
    container.position.x = 790;
    container.position.y = 220;
    container.name = "buildingsDeck";

    var cards = randomCards.randomCardsList2(6);

    for (var i = 0; i < cards.length; i++) {
        var cardSprite;
        
        if (i != cards.length - 1) {
            cardSprite = building.create(cards[i], ["take", "resize"]);
            cardSprite.position.x = i * 153;
            cardSprite.card.index = i;
        }
        else {
            cardSprite = building.create(cards[i]);
            cardSprite.position.x = 795;
        }

        container.addChild(cardSprite);
    }

    return container;
});