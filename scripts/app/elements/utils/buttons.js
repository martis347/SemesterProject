define(['utils/icon', 'actions/actionsContainer'], function(icon, actions) {
    var card;

    function add(buttonsPlacementType, cardSprite) {
        card = cardSprite;

        switch (buttonsPlacementType.toLocaleLowerCase()) {
            case "init":
                initButtons();
                break;
            case "previewdeck":
                previewDeckButtons();
                break;
            case "previewhand":
                previewHandButtons();
                break;
            case "previewconstruction":
                previewConstructionButtons();
                break;
            case "hand":
                handButtons();
                break;
            case "construction":
                constructionButtons();
                break;
            default:
                break;
        }
    }

    function initButtons() {
        if(card.card.type == "building") {
            button("take", actions.take, 25);
            button("resize", actions.resize, 100);
        }
        else if(card.card.type == "worker") {
            button("take", actions.take, 10);
            button("resize", actions.resize, 70);
        }
    }

    function previewDeckButtons() {
        if(card.card.type == "building") {
            button("exitB", actions.close, 410, -35);
            button("takeB", actions.take, 165, 400);
            button("flipB", actions.flip, 421, 200);
        }
        else if(card.card.type == "worker") {
            button("exitB", actions.close, 270, -35);
            button("takeB", actions.take, 100, 380);
            button("flipB", actions.flip, 280, 180);
        }
        
    }
    
    function previewHandButtons() {
        if(card.card.type == "building") {
            button("exitB", actions.close, 410, -35);            
            button("buildB", actions.build, 165, 400);            
            button("flipB", actions.flip, 421, 200);
        }
        else if(card.card.type == "worker") {
            button("exitB", actions.close, 270, -35);                        
            button("flipB", actions.flip, 280, 180);
        }
    }
    
    function previewConstructionButtons() {
        if(card.card.type == "building") {
            button("exitB", actions.close, 410, -35);            
            button("flipB", actions.flip, 421, 200);
        }
        else if(card.card.type == "worker") {
            button("exitB", actions.close,270, -35);                        
            button("flipB", actions.flip, 280, 180);
        }
    }

    function handButtons() {
        button("resize", actions.resize, 0, 0);
    }
    
    function constructionButtons() {
        button("resize", actions.resize, 0, 0);
    }

    function button(name, action, x, y) {
        var sprite = new PIXI.Sprite();
        sprite = icon.createIcon(name, action);
        if (y) { sprite.position.y = y }
        if (x) { sprite.position.x = x }

        card.addChild(sprite);
    }

    return {
        add
    }
});