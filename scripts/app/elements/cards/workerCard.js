define(['pixi', 'utils/mouseOver','utils/buttons'], function (PIXI, mouseOvers, buttonsElement) {
    
    var cardSprite;
    var card = {
        create: function (id, buttonsPlacementType) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + ".jpg");
            cardSprite = new PIXI.Sprite(cardTexture);

            cardSprite.interactive = true;
            cardSprite.card = {};
            cardSprite.card.id = id;
            cardSprite.card.type = "worker";
            cardSprite.card.placement = "deck";

            buttonsElement.add(buttonsPlacementType, cardSprite);

            cardSprite.dragging
            mouseOvers.add(cardSprite);
                
            if(buttonsPlacementType === "hand")
            {
                cardSprite.buttonMode = true;
                cardSprite.mousedown = cardSprite.touchstart = function(data)
                {
                    this.data = data;
                    this.alpha = 0.9;
                    this.dragging = true;
                    this.sx = this.data.data.getLocalPosition(this).x * cardSprite.scale.x;
                    this.sy = this.data.data.getLocalPosition(this).y * cardSprite.scale.x;		
                };
                
                cardSprite.mouseup = cardSprite.mouseupoutside = cardSprite.touchend = cardSprite.touchendoutside = function(data)
                {
                    this.alpha = 1
                    this.dragging = false;
                    this.data = null;
                };
                
                cardSprite.mousemove = cardSprite.touchmove = function(data)
                {
                    if(this.dragging)
                    {
                        var newPosition = this.data.data.getLocalPosition(this.parent);
                        this.position.x = newPosition.x - this.sx;
                        this.position.y = newPosition.y - this.sy;
                    }
                }
            }
            
            return cardSprite;
        },
        changeTexture: function (card, newId) {
            card.texture = PIXI.Texture.fromImage("Resources/workers/" + newId + ".jpg");
        }
    };
    
    return card;
});