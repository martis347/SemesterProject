define(['pixi', 'utils/mouseOver', 'utils/buttons', 'app/gameContainer', 'actions/actionsContainer'], function (PIXI, mouseOvers, buttonsElement, gameContainer, actions) {
    
    var cardSprite;
    var card = {
        create: function (id, size, buttonsPlacementType) {
            var cardTexture = PIXI.Texture.fromImage("Resources/workers/" + id + size + ".png");
            cardSprite = new PIXI.Sprite(cardTexture);
            cardSprite.hitArea = new PIXI.Rectangle(0, 0, 450, 450);
            cardSprite.interactive = true;
            cardSprite.card = {};
            cardSprite.card.id = id;
            cardSprite.card.type = "worker";
            cardSprite.card.placement = "deck";

            buttonsElement.add(buttonsPlacementType, cardSprite);

            mouseOvers.add(cardSprite);
                
            if(buttonsPlacementType === "hand")
            {
                var constructionInfo;
                var touches;
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
                    
                    if(touches != -1 && touches != undefined) {
                        actions.assign(this, touches);
                    }                  
                };
                
                cardSprite.mousemove = cardSprite.touchmove = function(data)
                {
                    if(this.dragging)
                    {
                        var newPosition = this.data.data.getLocalPosition(this.parent);
                        this.position.x = newPosition.x - this.sx;
                        this.position.y = newPosition.y - this.sy;
                        
                        touches = touchesBuilding(this);
                        if(touches != -1) {
                            untintAll();
                            constructionInfo.children.filter(function (card) {
                                        return card.card.id === touches;
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
        changeTexture: function (card, id, size) {
            card.texture = PIXI.Texture.fromImage("Resources/workers/" + id + size + ".png");
        }
    };
    
    return card;
});