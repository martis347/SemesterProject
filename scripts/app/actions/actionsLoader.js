define(['actions/buildingActions', 
        'actions/workerActions',
        'actions/genericActions'], function (buildingActions, workerActions, genericActions) {
    return {
        buildingActions,
        workerActions,
        genericActions
    }
});