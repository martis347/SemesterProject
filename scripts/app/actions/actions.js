define(function () {
    var action = {
        takeAction(card){
            if(card.type === "building") {
                return require('actions/action').takeBuildingAction(card);   
            }
            else if(card.type === "worker"){
                return require('actions/action').takeWorkerAction(card);                   
            }
        },
        resizeAction(card) {
            return require('actions/action').resizeBuildingAction(card);
        },
        closeAction(card) {
            return require('actions/action').closeAction(card);
        }
    }
    
    return action;
});