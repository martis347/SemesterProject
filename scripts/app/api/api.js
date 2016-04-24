define(['api/startBuilding', 'api/takeBuilding', 'api/takeWorker', 'api/assignWorker', 'api/init/init'], function(startBuilding, takeBuilding, takeWorker, assignWorker, init) {
    return {
        startBuilding,
        assignWorker,
        takeBuilding,
        takeWorker,
        init
    }
});