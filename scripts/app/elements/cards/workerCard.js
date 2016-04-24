define(['pixi', 'utils/mouseOver', 'utils/buttons', 'app/gameContainer'], function (PIXI, mouseOvers, buttonsElement, gameContainer) {
    
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
                var constructionInfo;
                cardSprite.buttonMode = true;
                cardSprite.mousedown = cardSprite.touchstart = function(data)
                {
                    this.data = data;
                    this.alpha = 0.9;
                    this.dragging = true;
                    this.sx = this.data.data.getLocalPosition(this).x;
                    this.sy = this.data.data.getLocalPosition(this).y;
                };
                
                cardSprite.mouseup = cardSprite.mouseupoutside = cardSprite.touchend = cardSprite.touchendoutside = function(data)
                {
                    this.alpha = 1
                    this.dragging = false;
                    this.data = null;
                    this.position.x = this.card.init.x;
                    this.position.y = this.card.init.y;
                    untintAll();                    
                };
                
                cardSprite.mousemove = cardSprite.touchmove = function(data)
                {
                    if(this.dragging)
                    {
                        var newPosition = this.data.data.getLocalPosition(this.parent);
                        this.position.x = newPosition.x - this.sx;
                        this.position.y = newPosition.y - this.sy;
                        
                        var cardId = touchesBuilding(this);
                        if(cardId != -1) {
                            untintAll();
                            constructionInfo.children.filter(function (card) {
                                        return card.card.id === cardId;
                                    })[0].tint = "0x66FF66";
                        }
                        else {
                            untintAll();
                        }
                    }
                }
                
                function touchesBuilding(card) {
                    var absoluteMousePosition = {};
                    absoluteMousePosition.x = card.position.x + card.parent.position.x + card.data.data.getLocalPosition(card).x;
                    absoluteMousePosition.y = card.position.y + card.parent.position.y + card.data.data.getLocalPosition(card).y;
                    
                    constructionInfo = gameContainer.stage.children.filter(
                        function(item) { 
                            return item.name === "construction" 
                        })[0];
                    var result = -1;
                    constructionInfo.cards.forEach(function (position) {
                        if(absoluteMousePosition.x - position.x <= gameContainer.card.buildingCard.x && absoluteMousePosition.x - position.x > 0
                            && absoluteMousePosition.y - position.y <= gameContainer.card.buildingCard.y && absoluteMousePosition.y - position.y > 0) {
                                
                            result = position.id;
                            return position.id;
                        }
                        else {
                            return -1;
                        }
                    });
                    return result; 
                }
                
                function untintAll() {
                    constructionInfo.children.forEach(function(card){
                        card.tint = "0xFFFFFF";
                    });
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