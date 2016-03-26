define(function () {
    var action = {
        takeBuildingAction(card){
            return require('actions/action').takeBuildingAction(card);
        },
        resizeBuildingAction(card) {
            return require('actions/action').resizeBuildingAction(card);
        },
        closeBuildingAction(card) {
            return require('actions/action').closeBuildingAction(card);
        }
    }
    
    return action;
});