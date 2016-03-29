define(['utils/randomCards'], function(random) {
    return function(card) {
        //api call to back-end
        console.log("API SAYS TAKE BUILDING");

        return {
            response: true,
            card: {
                id: random.randomCardsList2(1)[0]
            }
        }
    }
});