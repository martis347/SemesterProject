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
            button("exit", actions.close, 7, 7);
            button("take", actions.take, 200,425);
            button("flip", actions.flip, 350, 200);
        }
        else if(card.card.type == "worker") {
            button("exit", actions.close, 7, 7);
            button("take", actions.take, 150,425);
        }
        
    }
    
    function previewHandButtons() {
        if(card.card.type == "building") {
            button("exit", actions.close, 7, 7);            
            button("build", actions.build, 200,425);            
            button("flip", actions.flip, 350, 200);
        }
        else if(card.card.type == "worker") {
            button("exit", actions.close, 7,7);                        
        }
    }
    
    function previewConstructionButtons() {
        if(card.card.type == "building") {
            button("exit", actions.close, 7, 7);            
            button("flip", actions.flip, 350, 200);
        }
        else if(card.card.type == "worker") {
            button("exit", actions.close, 7,7);                        
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