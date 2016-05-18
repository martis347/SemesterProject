define(['jquery', 'gameContainer'], function($, gameContainer){
    return function(card) {
        
        var result;
    
        $.ajax({
            type: "POST",
            url: gameContainer.apiUri + "api/game/building/take",
            success: function (response) {
                result = response
            },
            async: false,
            data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid, BuildingId: card.id}
        });

        return {
            response: result.Success,
            card: {
                topCard: result.TopCard,
                newCard: result.NewCard
            },
            message: result.message
        }
    }
});