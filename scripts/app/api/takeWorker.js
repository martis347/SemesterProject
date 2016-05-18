define(['jquery', 'gameContainer'], function($, gameContainer){
    return function(card) {
        
        var result;
    
        $.ajax({
            type: "POST",
            url: gameContainer.apiUri + "api/game/worker/take",
            success: function (response) {
                result = response
            },
            async: false,
            data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid, WorkerId: card.id}
        });

        return {
            response: result.response.Success,
            card: {
                topCard: result.response.TopCard,
                newCard: result.response.NewCard
            },
            message: result.response.message
        }
    }
});