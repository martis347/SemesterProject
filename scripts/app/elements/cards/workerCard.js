define(['pixi', 'utils/mouseOver','utils/buttons'], function (PIXI, mouseOvers, buttonsElement) {
    
    var cardSprite;
    var card = {
        create: function (id, buttonsPlacementType, cardSize) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + cardSize + ".png");
            cardSprite = new PIXI.Sprite(cardTexture);

            cardSprite.interactive = true;
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 107, 150);
            cardSprite.card = {};
            cardSprite.card.id = id;
            cardSprite.card.type = "worker";
            cardSprite.card.placement = "deck";

            buttonsElement.add(buttonsPlacementType, cardSprite);

            mouseOvers.add(cardSprite);

            return cardSprite;
        },
        changeTexture: function (card, newId, cardSize) {
            card.texture = PIXI.Texture.fromImage("Resources/workers/" + newId + cardSize + ".png");
        }
    };
    
    return card;
});