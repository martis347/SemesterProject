define(['pixi', 'gameContainer', 'cards/cards', 'actions/genericActions', 'api/api'], function (PIXI, gameContainer, cards, genericActions, api) {
    function takeBuilding(card) {
        if (card.preview) {
            close();
        }
        var buildingsHand = gameContainer.stage.children.filter(function (item) { return item.name === "buildingsHand" })[0];
        if (emptySpace(buildingsHand) < 8) {
            var apiResonse = api.takeBuilding(card);
            if (apiResonse.response) {
                var apiCards = apiResonse.card;
            } else {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
            }

            var newCard = cards.building.create(card.id, "S", "F", "hand");
            newCard.card.placement = "hand";
            newCard.card.index = emptySpace(buildingsHand);

            if (newCard.card.index < 4) {
                newCard.position.x = newCard.card.index * 60;
                newCard.position.y = 0;
            }
            else if (newCard.card.index < 8) {
                newCard.position.x = (newCard.card.index % 4) * 60;
                newCard.position.y = 160;
            }
            else {
                return;
            }

            replaceBuilding(card, apiCards);

            newCard.children.filter(function (item) { return item.name == "take" }).x = 15;
            buildingsHand.addChildAt(newCard, newCard.card.index);
            genericActions.updateActions();
        } else {
            return require('actions/actionsLoader').alertsActions.buildingsHandAlert();
        }
    }

    function emptySpace(deck) {
        if (deck.children.length === 0) {
            return 0;
        }
        var maxCard = Math.max.apply(null, deck.children.map(function (a) { return a.card.index; }));
        var allNumbers = new Array(maxCard + 2)
            .join().split(',')
            .map(function (item, index) { return index++; });

        var cardIndexes = deck.children.map(function (a) { return a.card.index; });

        return Math.min.apply(null, allNumbers.filter(function (i) { return cardIndexes.indexOf(i) < 0; }));
    }

    function replaceBuilding(card, apiCards) {
        var buildingsDeck = gameContainer.stage.children.filter(function (item) { return item.name === "buildingsDeck" })[0];

        var cardFromTop = buildingsDeck.children[5];
        var newCard = cards.building.create(apiCards.topCard, "S", "F", "init");

        cardFromTop.position.x = card.index * 153;
        cardFromTop.card.index = card.index;

        newCard.position.x = 795;
        newCard.card.index = 5;

        removeCard(buildingsDeck, card);
        buildingsDeck.addChild(newCard);
    }

    function close() {
        for (var i = 0; i < gameContainer.stage.children.length; i++) {
            if (gameContainer.stage.children[i].card !== undefined && gameContainer.stage.children[i].card.preview) {
                gameContainer.stage.removeChildAt(i);
            }
        }
    }

    function resize(card) {

        close();
        var bigCard = cards.building.create(card.id, "B", "F", "preview" + card.placement);

        bigCard.position.x = (1745 / 2) - (gameContainer.card.buildingCard.x * gameContainer.card.scale) / 2;
        bigCard.position.y = (864 / 2) - (gameContainer.card.buildingCard.y * gameContainer.card.scale) / 2;

        bigCard.hitArea = new PIXI.Rectangle(0, 0, gameContainer.card.buildingCard.x * gameContainer.card.scale, gameContainer.card.buildingCard.y * gameContainer.card.scale);
        bigCard.interactive = true;

        bigCard.card.preview = true;
        bigCard.card.index = card.index;
        bigCard.card.side = "F";

        gameContainer.stage.addChild(bigCard);
    }

    function build(card) {
        var construction = gameContainer.stage.children.filter(function (item) { return item.name === "construction" })[0];
        if (emptySpace(construction) < 3) {
            var apiResonse = api.startBuilding(card);
            if (apiResonse.response) {
            } else {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
            }
            var newCard = cards.building.create(card.id, "S", "F", "construction");
            newCard.card.placement = "construction";
            newCard.card.index = emptySpace(construction);
            newCard.workers = 0;

            if (newCard.card.index < 3) {
                newCard.position.x = 160;
                newCard.position.y = 155 * newCard.card.index;
            }
            else {
                return;
            }

            close();
            removeCard(gameContainer.stage.children.filter(function (item) { return item.name === "buildingsHand" })[0], card);

            construction.addChild(newCard);

            construction.cards.push({
                x: newCard.position.x + newCard.parent.position.x,
                y: newCard.position.y + newCard.parent.position.y,
                id: newCard.card.id
            });

            genericActions.updateActions();
        } else {
            return require('actions/actionsLoader').alertsActions.buildingsQueueFullAlert();
        }
    }

    function removeCard(deck, card) {
        var oldCardArrayIndex;
        for (var i = 0; i < deck.children.length; i++) {
            if (deck.children[i].card.index === card.index) {
                oldCardArrayIndex = i;
                break;
            }
        }
        deck.removeChildAt(oldCardArrayIndex);
    }

    function flip(card) {
        var cardToChange = gameContainer.stage.children.filter(function (item) { if (item.card) { return item.card.id === card.id } })[0];
        if (card.side === "F") {
            cardToChange.card.side = "B";
            cards.building.changeTexture(cardToChange, card.id, "B", card.side);
        }
        else {
            cardToChange.card.side = "F";
            cards.building.changeTexture(cardToChange, card.id, "B", card.side);
        }
        console.log("A");
    }

    return {
        takeBuilding,
        close,
        resize,
        build,
        flip
    };
});