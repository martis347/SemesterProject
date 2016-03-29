define(['utils/randomCards'], function(random) {
    return function(card) {
        //api call to back-end
        console.log("API SAYS TAKE WORKER");
        
        return {
            response: true,
            card: {
                id: random.randomCardsList(1)[0]
            }
        }
    }
});