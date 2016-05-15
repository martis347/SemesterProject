define(['api/api'], function(api) {
    var action = {
        take(card) {
            if (card.type === "building") {
                var apiResonse = api.takeBuilding(card);
                if (apiResonse.response) {
                    return require('actions/actionsLoader').buildingActions.takeBuilding(card, apiResonse.card);
                }
            }
            else if (card.type === "worker") {
                var apiResonse = api.takeWorker(card);
                if (apiResonse.response) {
                    return require('actions/actionsLoader').workerActions.takeWorker(card, apiResonse.card);
                }
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
            var apiResonse = api.startBuilding(card);
            if (apiResonse.response) {
                return require('actions/actionsLoader').buildingActions.build(card, apiResonse.card);
            }
        },
        assign(card, target) {
            var apiResonse = api.assignWorker(card, target);
            if (apiResonse.success) {
                require('actions/actionsLoader').workerActions.assign(card, target);
                if(apiResonse.buildingCompleted) {
                    return require('actions/actionsLoader').genericActions.completeBuilding(target);
                }
            } else {
                return require('actions/actionsLoader').alertsActions.coinsAlert();
            }
        },
        flip(card) {
            return require('actions/actionsLoader').buildingActions.flip(card);
        },
        addCardToHand(card) {
            return require('actions/actionsLoader').workerActions.addCardToHand(card);
        }
    }

    return action;
});