define(['actions/buildingActions', 
        'actions/workerActions',
        'actions/genericActions',
        'actions/alertsActions'], function (buildingActions, workerActions, genericActions, alertsActions) {
    return {
        buildingActions,
        workerActions,
        genericActions,
        alertsActions
    }
});