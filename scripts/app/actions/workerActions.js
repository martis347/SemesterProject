define(['pixi', 'gameContainer', 'cards/cards', 'actions/genericActions', 'api/api'], function (PIXI, gameContainer, cards, genericActions, api) {
    function takeWorker(card) {
        if (card.preview) {
            close();
        }
        if (addCardToHand(card)) {

        }
        genericActions.updateActions();

    }

    function addCardToHand(card) {
        var workersHand = gameContainer.stage.children.filter(function (item) { return item.name === "workersHand" })[0];
        if (emptySpace(workersHand) < 8) {
            var apiResonse = api.takeWorker(card);
            if (apiResonse.response) {
                var apiCards = apiResonse.card;
            } else {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
            }
            var newCard = cards.worker.create(card.id, "S", "hand");
            newCard.card.placement = "construction";
            newCard.card.index = emptySpace(workersHand);

            if (newCard.card.index < 4) {
                newCard.position.x = newCard.card.index * 60;
                newCard.position.y = 0;
            }
            else if (newCard.card.index < 8) {
                newCard.position.x = (newCard.card.index % 4) * 60;
                newCard.position.y = 160;
            }
            else {
                return false;
            }
            replaceWorker(card, apiCards);
            newCard.card.init = {};
            newCard.card.init.x = newCard.position.x;
            newCard.card.init.y = newCard.position.y;

            newCard.children.filter(function (item) { return item.name == "take" }).x = 15;

            workersHand.addChild(newCard);

            return true;
        } else {
            return require('actions/actionsLoader').alertsActions.workersHandAlert();
        }
    }

    function addCardToHandAfterBuildingCompletion(card) {
        var workersHand = gameContainer.stage.children.filter(function (item) { return item.name === "workersHand" })[0];

        var newCard = cards.worker.create(card.id, "S", "hand");
        newCard.card.placement = "construction";
        newCard.card.index = emptySpace(workersHand);

        if (newCard.card.index < 4) {
            newCard.position.x = newCard.card.index * 60;
            newCard.position.y = 0;
        }
        else if (newCard.card.index < 8) {
            newCard.position.x = (newCard.card.index % 4) * 60;
            newCard.position.y = 160;
        }
        else {
            return false;
        }
        newCard.card.init = {};
        newCard.card.init.x = newCard.position.x;
        newCard.card.init.y = newCard.position.y;

        newCard.children.filter(function (item) { return item.name == "take" }).x = 15;

        workersHand.addChild(newCard);

        return true;

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

    function replaceWorker(card, apiCards) {
        var workersDeck = gameContainer.stage.children.filter(function (item) { return item.name === "workersDeck" })[0];

        var cardFromTop = workersDeck.children[5];
        var newCard = cards.worker.create(apiCards.topCard, "S", "init");

        cardFromTop.position.x = card.index * 110;
        cardFromTop.card.index = card.index;

        newCard.position.x = 580;
        newCard.card.index = 5;

        var oldCardArrayIndex;
        for (var i = 0; i < workersDeck.children.length; i++) {
            if (workersDeck.children[i].card.index === card.index) {
                oldCardArrayIndex = i;
                break;
            }
        }

        workersDeck.removeChildAt(oldCardArrayIndex);
        workersDeck.addChild(newCard);
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
        var bigCard = cards.worker.create(card.id, "B", "preview" + card.placement);

        bigCard.position.x = (1745 / 2) - (gameContainer.card.workerCard.x * gameContainer.card.scale) / 2;
        bigCard.position.y = (864 / 2) - (gameContainer.card.workerCard.y * gameContainer.card.scale) / 2;

        bigCard.hitArea = new PIXI.Rectangle(0, 0, gameContainer.card.workerCard.x * gameContainer.card.scale, gameContainer.card.workerCard.y * gameContainer.card.scale);
        bigCard.interactive = true;

        bigCard.card.preview = true;
        bigCard.card.index = card.index;
        bigCard.card.side = "F";

        gameContainer.stage.addChild(bigCard);
    }

    function assign(card, target) {
        console.log("Assigning worker " + card.card.id + " to building " + target);
        var construction = gameContainer.stage.children.filter(function (item) { return item.name === "construction" })[0];
        var targetCard = construction.children.filter(function (card) { return card.card.id === target; })[0];
        if (targetCard.workers < 5) {
            var apiResonse = api.assignWorker(card, target);
            if (apiResonse.success && apiResonse.enoughActions) {
                if (apiResonse.buildingCompleted) {
                    return require('actions/actionsLoader').genericActions.completeBuilding(target);
                }
            } else if (apiResonse.enoughActions === false) {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
            } else {
                return require('actions/actionsLoader').alertsActions.coinsAlert();
            }
            var workersHand = gameContainer.stage.children.filter(function (item) { return item.name === "workersHand" })[0];

            var newCard = cards.worker.create(card.card.id, "S", "hand");
            newCard.card.placement = "construction";
            newCard.card.index = emptySpace(construction);


            if (targetCard.workers < 5) {
                newCard.position.x = targetCard.workers * 50 + 160;
                targetCard.workers = targetCard.workers + 1;
            }
            else {
                return;
            }
            genericActions.updateCoins();
            removeCard(gameContainer.stage.children.filter(function (item) { return item.name === "workersHand" })[0], card);

            targetCard.addChild(newCard);
            genericActions.updateActions();
        } else {
            return require('actions/actionsLoader').alertsActions.assignedWorkersQueueFullAlert();
        }

    }

    function removeCard(deck, card) {
        var oldCardArrayIndex;
        for (var i = 0; i < deck.children.length; i++) {
            if (deck.children[i].card.index === card.card.index) {
                oldCardArrayIndex = i;
                break;
            }
        }
        deck.removeChildAt(oldCardArrayIndex);
    }


    return {
        takeWorker,
        close,
        resize,
        assign,
        addCardToHand,
        addCardToHandAfterBuildingCompletion
    };
});