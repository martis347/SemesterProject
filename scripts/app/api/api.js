define(['api/startBuilding', 'api/takeBuilding', 'api/takeWorker', 'api/assignWorker', 'api/init/init','api/endTurn', 'api/sellActions', 'api/buyActions'], 
function(startBuilding, takeBuilding, takeWorker, assignWorker, init, endTurn, sellActions, buyActions) {
    return {
        startBuilding,
        assignWorker,
        takeBuilding,
        takeWorker,
        init,
        endTurn,
        sellActions,
        buyActions
    }
});