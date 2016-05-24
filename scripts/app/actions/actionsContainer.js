define(['api/api'], function (api) {
    var action = {
        take(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.takeBuilding(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.takeWorker(card);
            }
        },
        resize(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.resize(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.resize(card);
            }
        },
        close(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.close(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.close(card);
            }
        },
        build(card) {
            return require('actions/actionsLoader').buildingActions.build(card);
        },
        assign(card, target) {
            var apiResonse = api.assignWorker(card, target);
            if (apiResonse.success && apiResonse.enoughActions) {
                require('actions/actionsLoader').workerActions.assign(card, target);
                if (apiResonse.buildingCompleted) {
                    return require('actions/actionsLoader').genericActions.completeBuilding(target);
                }
            } else if (apiResonse.enoughActions === false) {
                return require('actions/actionsLoader').alertsActions.actionsAlert();
            } else {
                return require('actions/actionsLoader').alertsActions.coinsAlert();
            }
        },
        flip(card) {
            return require('actions/actionsLoader').buildingActions.flip(card);
        },
        addCardToHand(card) {
            return require('actions/actionsLoader').workerActions.addCardToHandAfterBuildingCompletion(card);
        },
        endTurn() {
            return require('actions/actionsLoader').genericActions.endTurn();
        },
        sellActions() {
            return require('actions/actionsLoader').tradesActions.sellActions();
        },
        buyActions() {
            return require('actions/actionsLoader').tradesActions.buyActions();
        }
    }

    return action;
});