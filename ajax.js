class MyAszinkron{
    constructor(){}

    getAdat(vegpont, valtozo, callback, callbackHiba) {
        $.ajax({
            url: vegpont,
            type:"GET",
            success: function(result) {
                console.log(result);
                valtozo = result;
                callback(valtozo);
            },
            error:function(hibakod){
                callbackHiba(hibakod);
            }
        });
    }
}