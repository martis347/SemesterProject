define(['jquery', 'app/gameContainer'], function($, gameContainer){
    var result;
    
    $.ajax({
        type: "POST",
        url: gameContainer.apiUri + "api/game/state",
        success: function (response) {
            result = response.Game.GameBoard
        },
        async: false,
        data: {GameGuid: gameContainer.userData.gameGuid, PlayerGuid: gameContainer.userData.playerGuid}
    });
    return result;
})