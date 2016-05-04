define(['pixi', 'utils/mouseOver','utils/buttons'], function (PIXI, mouseOvers, buttonsElement) {

    var cardSprite;
    var card = {
        create: function (id, buttonsPlacementType, cardSize, cardSide) {
            var cardTexture = PIXI.Texture.fromImage("Resources/buildings/" + id + cardSize + cardSide + ".png");
            cardSprite = new PIXI.Sprite(cardTexture);
            cardSprite.interactive = true;
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 150, 150);
            cardSprite.card = {};
            cardSprite.card.id = id;
            cardSprite.card.type = "building";
            cardSprite.card.placement = "deck";
            buttonsElement.add(buttonsPlacementType, cardSprite);

            mouseOvers.add(cardSprite);

            return cardSprite;
        },
        changeTexture: function (card, newId, cardSize, cardSide) {
            card.texture = PIXI.Texture.fromImage("Resources/buildings/" + newId + cardSize + cardSide + ".png");
        }
    };

    return card;
});