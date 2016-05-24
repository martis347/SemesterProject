define(['jquery', 'gameContainer'], function($, gameContainer){
     return function(card, target) {
        var result;
    
        $.ajax({
            type: "POST",
            url: gameContainer.apiUri + "api/game/worker/assign",
            success: function (response) {
                result = response;
            },
            async: false,
            data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid, BuildingId: target, WorkerId: card.card.id}
        });

        return {
            success: result.Success,
            enoughActions: result.EnoughActions,
            buildingCompleted: result.BuildingCompleted
        }
    }
});