define(['api/startBuilding', 'api/takeBuilding', 'api/takeWorker', 'api/assignWorker', 'api/init/init','api/endTurn'], 
function(startBuilding, takeBuilding, takeWorker, assignWorker, init, endTurn) {
    return {
        startBuilding,
        assignWorker,
        takeBuilding,
        takeWorker,
        init,
        endTurn
    }
});