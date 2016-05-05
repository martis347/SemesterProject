define(['pixi', 'utils/mouseOver','utils/buttons'], function (PIXI, mouseOvers, buttonsElement) {

    var cardSprite;
    var card = {
        create: function (id, size, side, buttonsPlacementType) {
            var cardTexture = PIXI.Texture.fromImage("Resources/buildings/" + id + size + side + ".png");
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
        changeTexture: function (card, id, size, side) {
            card.texture = PIXI.Texture.fromImage("Resources/buildings/" + id + size + side + ".png");
        }
    };

    return card;
});