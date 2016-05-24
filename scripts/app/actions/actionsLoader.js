define(['actions/buildingActions',
    'actions/workerActions',
    'actions/genericActions',
    'actions/alertsActions',
    'actions/boardButtonsActions',
    'actions/tradesActions'], function (buildingActions, workerActions, genericActions, alertsActions, boardButtonsActions, tradesActions) {
        return {
            buildingActions,
            workerActions,
            genericActions,
            alertsActions,
            boardButtonsActions,
            tradesActions
        }
    });