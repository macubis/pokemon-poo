function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola soy; " + this.nombre + " y soy de color: " + this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
};
	const Pikachu = new Pokemon("Pikachu","amarillo",100);
	const Charmander = new Pokemon ("Charmander","rojo", 20);
	const Bulbasaur = new Pokemon("Bulbasaur","verde", 50);
	const Squirtle = new Pokemon("Squirtle", "cafe", 80);


function pelear(nombre,color,poderDeAtaque){ 
	var res = document.getElementById("resultadoPelea");
   	var grupoUno = document.getElementById("mySelect").value;
	var grupoDos = document.getElementById("mySelect2").value;
	
		if(grupoUno == grupoDos){		
		alert("No puedes hacer Pelear dos pokemones Iguales");
		return;
		}else{
			var poder= prompt("Ingrese poder de Ataque de su Pokemon");
			var primer = new Pokemon(grupoUno, + color, + poder);
			var segundo = new Pokemon(grupoDos, + color, + poderDeAtaque);
			primer.atacar(segundo);
		}

		res.innerHTML ="<br>" + primer.nombre + " ataca a " + segundo.nombre + " y " + segundo.nombre +" tiene una vida de : " + segundo.vida;
}