define(['pixi', 'utils/mouseOver','utils/buttons'], function (PIXI, mouseOvers, buttonsElement) {
    
    var cardSprite;
    var card = {
        create: function (id, buttonsPlacementType) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + ".jpg");
            cardSprite = new PIXI.Sprite(cardTexture);

            cardSprite.interactive = true;
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 107, 150);
            cardSprite.card = {};
            cardSprite.card.id = id;
            cardSprite.card.type = "worker";
            cardSprite.card.inDeck = true;

            buttonsElement.add(buttonsPlacementType, cardSprite);

            mouseOvers.add(cardSprite);

            return cardSprite;
        }
    };
    
    return card;
});