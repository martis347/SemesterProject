define(['pixi', 'utils/mouseOver','utils/buttons'], function (PIXI, mouseOvers, buttonsElement) {
    
    var cardSprite;
    var card = {
        create: function (id, buttonsPlacementType) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + ".png");
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
        changeTexture: function (card, newId) {
            card.texture = PIXI.Texture.fromImage("Resources/workers/" + newId + ".png");
        }
    };
    
    return card;
});