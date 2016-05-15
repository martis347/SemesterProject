define(['containers/deckBuildingsContainer',
    'containers/deckWorkersContainer',
    'containers/handBuildingsContainer',
    'containers/handWorkersContainer',
    'containers/constructionContainer',
    'containers/completedConstructionContainer'],
    function(deckBuildings, deckWorkers, handBuildings, handWorkers, construction, completedConstruction) {
        return {
            deckBuildings,
            deckWorkers,
            handBuildings,
            handWorkers,
            construction,
            completedConstruction
        }
    });