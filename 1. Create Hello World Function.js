createHelloWorld = function() {
  return function () {
    return "Hello World";
  }
};

const a = createHelloWorld();
console.log(a());

/* 
  - Se utiliza una función anónima. Lo cual es una función sin nombre, pero se puede asignar a una variable y con esta podemos llamarla.

  - Una función que devuelve otra función se conoce como función de orden superior.

  - Cuando devuelves una función, normalmente estás trabajando con un closure. Un closure ocurre cuando la función interna tiene acceso a las variables de su contexto externo.
*/