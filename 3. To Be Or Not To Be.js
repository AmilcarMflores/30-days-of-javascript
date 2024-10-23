/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  function toBe (n) {
    if (val === n){
      return true
    } else {
      throw new Error("Not Equal")
    }
  }
  function notToBe (n) {
    if (val !== n) {
      return true
    } else {
      throw new Error("Equal")
    }
  }
  return {
    toBe,
    notToBe,
  }
};

// Example usage:

// Case 1: Equal values
try {
  console.log({ value: expect(5).toBe(5) }); // {value: true}
} catch (e) {
  console.log({ error: e.message });
}

// Case 2: Not equal values
try {
  console.log({ value: expect(5).toBe(null) });
} catch (e) {
  console.log({ error: e.message }); // {error: "Not Equal"}
}

// Case 3: Not equal values (using notToBe)
try {
  console.log({ value: expect(5).notToBe(null) }); // {value: true}
} catch (e) {
  console.log({ error: e.message });
}

//try...catch se utiliza para manejar errores de forma controlada, permitiendo ejecutar código y, en caso de que ocurra un error, capturarlo y reaccionar ante él sin detener la ejecución del programa.