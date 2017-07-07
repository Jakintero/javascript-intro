 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
var atleta1 = {
  name: 'Javier'
  height: 1,64
  sport: 'swimming'
}

var atleta2 = {
  name: 'Mauricio'
  height: 1,72
  sport: 'swimming'
}
// 1. Añadir propiedades a objetos
function addToWin(athletes){
  athletes.forEach(function(athlete){
    athlete.win = function(){
      console.log 
    }
  })
}

// Function Declaration



// 2. Voltea un String




// 3. Remueve numeros impares




// 4. Funcion constructora




// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
