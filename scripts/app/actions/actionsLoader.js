define(['actions/buildingActions', 
        'actions/workerActions',
        'actions/genericActions',
        'actions/alertsActions',
        'actions/boardButtonsActions'], function (buildingActions, workerActions, genericActions, alertsActions, boardButtonsActions) {
    return {
        buildingActions,
        workerActions,
        genericActions,
        alertsActions,
        boardButtonsActions
    }
});