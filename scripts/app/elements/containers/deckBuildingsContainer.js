define(['pixi', 'cards/buildingCard', 'api/init/init'], function (PIXI, building, init) {
    var container = new PIXI.Container();
    container.position.x = 790;
    container.position.y = 220;
    container.name = "buildingsDeck";    
    
    var cards = init.buildings;

    for (var i = 0; i < cards.Buildings.length; i++) {
        var cardSprite;
        
        cardSprite = building.create(cards.Buildings[i], "S", "F", "init");
        cardSprite.position.x = i * 153;
        cardSprite.card.index = i;

        container.addChild(cardSprite);
    }
    
    cardSprite = building.create(cards.TopBuilding, "S", "F", "init");
    cardSprite.position.x = 795;
    cardSprite.card.index = i;
    container.addChild(cardSprite);

    return container;
});