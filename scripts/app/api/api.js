define(['api/startBuilding', 'api/takeBuilding', 'api/takeWorker', 'api/init/init'], function(startBuilding, takeBuilding, takeWorker, init) {
    return {
        startBuilding,
        takeBuilding,
        takeWorker,
        init
    }
});