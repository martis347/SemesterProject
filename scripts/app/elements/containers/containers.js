define(['containers/deckBuildingsContainer',
    'containers/deckWorkersContainer',
    'containers/handBuildingsContainer',
    'containers/handWorkersContainer',
    'containers/constructionContainer'],
    function(deckBuildings, deckWorkers, handBuildings, handWorkers, construction) {
        return {
            deckBuildings,
            deckWorkers,
            handBuildings,
            handWorkers,
            construction
        }
    });