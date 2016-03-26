define(function() {
    var action = {
        takeAction(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.takeBuilding(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.takeWorker(card);
            }
        },
        resizeAction(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.resize(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.resize(card);
            }
        },
        closeAction(card) {
            if (card.type === "building") {
                return require('actions/actionsLoader').buildingActions.close(card);
            }
            else if (card.type === "worker") {
                return require('actions/actionsLoader').workerActions.close(card);
            }
        }
    }

    return action;
});