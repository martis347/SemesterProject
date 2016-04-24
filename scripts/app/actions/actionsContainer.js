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
            var apiResonse = api.assignWorker(card);
            if (apiResonse.response) {
                return require('actions/actionsLoader').workerActions.assign(card, target);
            }
        },
        flip(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.flip(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.flip(card);
            }

        }
    }

    return action;
});