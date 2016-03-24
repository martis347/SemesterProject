define(['containers/deckBuildingsContainer',
    'containers/deckWorkersContainer',
    'containers/handBuildingsContainer',
    'containers/handWorkersContainer'],
    function(deckBuildings, deckWorkers, handBuildings, handWorkers) {
        return {
            deckBuildings,
            deckWorkers,
            handBuildings,
            handWorkers
        }
    });