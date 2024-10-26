/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Explicación del problema
// Dado un arreglo arr y una función fn, el objetivo es devolver un nuevo arreglo en el cual cada elemento es el resultado de aplicar la función fn a cada elemento de arr, junto con su índice. El resultado se almacena en una nueva posición en el nuevo arreglo.

var map = function(arr, fn) {
    const res = new Array(arr.length); //dynamic arrays

    for (const i in arr) {
      res[i] = fn(arr[i], Number(i));
    }
    return res;
    //return arr.map(fn);
};