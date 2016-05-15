define(['app/gameContainer', 'cards/cards'], function(gameContainer, cards) {
    function take(takenCard, newCardInfo) {
        var buildingsDeck = gameContainer.stage.children.filter(function(item) { return item.name === "buildingsDeck" })[0];

        var cardFromTop = buildingsDeck.children[5];
        var newCard = cards.building.create(newCardInfo.id, "S", "F", "init");

        cardFromTop.position.x = takenCard.index * 153;
        cardFromTop.card.index = takenCard.index;

        newCard.position.x = 795;
        newCard.card.index = 5;

        removeCard(buildingsDeck, card);

        buildingsDeck.addChild(newCard);
    }

    return take;
});