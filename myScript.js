var pokeName = 'bulbasaur'; //The pokemons name.default to bulbasaur



function onClickSubmit() {

  pokeName = document.getElementById("pokeNameInput").value
  pokeName = pokeName.toLowerCase() //To lower case because all names in api are
  console.log(pokeName);
  getPokemon(pokeName) //Call getPokemon function
}


const getPokemon = async name => { // takes in name as parameter
  console.log(`https://pokeapi.co/api/v2/pokemon/${name}`);
    try { // In case they input wrong name/id, signal to user
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    	const res = await fetch(url);
    	const pokemonInfo = await res.json();
      console.log(pokemonInfo);
      let pokeObj = { //Make object to store values of this pokemon
        id: pokemonInfo.id, //Set values
        name: pokemonInfo.name,
        image: pokemonInfo.sprites['front_default'],
        weight: pokemonInfo.weight,
        height: pokemonInfo.height,
        ability: pokemonInfo.abilities.map((ability) => ability.ability.name).join(", "),
        type: pokemonInfo.types.map((type) => type.type.name).join(", ")  //Get all types from array, and seperate them in a string by commas

        }
          displayInfo(pokeObj); //Display pokemon info on web page
    } catch (e) {
      alert("Error, check if you misspelt pokemon name");
    }


};

function displayInfo(pokeObj){
   console.log(pokeObj);
   pokeObj.name = pokeObj.name.charAt(0).toUpperCase() + pokeObj.name.slice(1); //Capitalize first letter
   pokeObj.type = pokeObj.type.charAt(0).toUpperCase() + pokeObj.type.slice(1); //Capitalize first letter
  pokeObj.ability = pokeObj.ability.charAt(0).toUpperCase() + pokeObj.ability.slice(1); //Capitalize first letter

    //Change html content to reflect the current pokemons information
   document.getElementById("pokeID").innerHTML  = 'ID: ' + pokeObj.id
   document.getElementById("pokeName").innerHTML  = 'Name: ' + pokeObj.name
   document.getElementById("pokeWeight").innerHTML  = 'Weight: ' + pokeObj.weight
   document.getElementById("pokeHeight").innerHTML  = 'Height: ' + pokeObj.height
   document.getElementById("pokeType").innerHTML  = 'Type: ' + pokeObj.type
    document.getElementById("pokeAbility").innerHTML  = 'Abilities: ' + pokeObj.ability
document.getElementById("pokeImage").src = pokeObj.image



   console.log(pokeObj.id);

}
getPokemon('bulbasaur');
