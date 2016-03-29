define(['api/init/startGame', 'api/init/getBuildings', 'api/init/getWorkers'], function(start, buildings, workers){
    return{
        start,
        buildings,
        workers
    }
});