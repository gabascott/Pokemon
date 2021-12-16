$(function(){
    const myAszinkron = new MyAszinkron();
    let vegpont = "https://pokeapi.co/api/v2/pokemon/6";
    let pokemon = {};
    let pokemonTomb = [];
    myAszinkron.getAdat(vegpont, pokemon, megjelenit, hibakezeles);
    
    function aktPokemon(){
        for (let i = 1; i < 10; i++) {
            let apivegpont = "https://pokeapi.co/api/v2/pokemon/" + i;
            myAszinkron.getAdat(apivegpont, pokemonTomb, pokemonLista, hibakezeles);
        }
    }

    const szuloElem = $(".pokemonok");
    const sablonElem = $(".pokemon");
    
    function pokemonLista(pokemonok){
        pokemonTomb.push(pokemonok)
        let elem = sablonElem.clone().appendTO(szuloElem);
        const obj = new Pokemon(elem, pokemonok);
    }
    
    function megjelenit(pokemon){
        //console.log(pokemon.name);
        $("#nev").html(pokemon.name);
        $("#kep").attr("src", pokemon.sprites.front_default);
        $("#suly").text("Súly: " + pokemon.weight);
        $("#magassag").text("Magasság: " + pokemon.height);
    }

    function hibakezeles(hiba){
        console.log(hiba);
        $("#nev").html("Nincs ilyen Pokemon!");
        $("#kep").attr("src", "https://cdn.pixabay.com/photo/2015/06/09/16/12/error-803716_960_720.png");
    }

    $("button").on("click", () => {
        let id = Math.floor(Math.random() * 1000);
        console.log(id);
        const apivegpont = "https://pokeapi.co/api/v2/pokemon/" + id;
        myAszinkron.getAdat(apivegpont, pokemon, megjelenit, hibakezeles);
    });


});