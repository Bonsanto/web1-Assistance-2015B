Ejercicio 1.
Programar un div con ciertas dimensiones y color, que persiga en la p�gina al cursor del mouse.

Pistas:
- Utilizar las propiedades <a href="http://www.w3schools.com/jsref/prop_style_left.asp">style.left</a> y style.top
- Utilizar los eventos Getting the coordinates of the mouse (pageX, pageY)

Ejercicio 2.
Programar una funci�n en JS (EcmaScript 5) que reciba 3 argumentos, el primero un arreglo bidimensional (que puede tener n arreglos internos, y dichos arreglos m cadenas adentro), el segundo y tercero cadenas de caracteres que funcionan como separadores, dicha funci�n debe permitir concatenar las cadenas de caracteres localizadas dentro del arreglo bi-dimensional, utilizando el segundo par�metro como separador entre cadena y el tercer par�metro como separador entre arreglo, un ejemplo se muestra a continuaci�n.

```javascript
var a = concat([["a", "bon"], ["1", "p", "dr"], ["j", "w", "javascript"], [ "23", "45", "html"]], ";", ".");
console.log(a); // a -> "a;bon.1;p;dr.j;w;javascript.23;45;html"
```

Pistas:
- Utilizar los m�todos de Array Map* Join* y forEach (Lo m�s conveniente para aprender)
- Tambi�n se pueden usar los lazos for cl�sicos for in y for

Ejercicio 3.
Programar una p�gina web que posea un input del tipo number que represente los grados cent�grados de un term�metro, a partir del valor que se vaya introduciendo en dicho input un div insertado en otro debe asumir una proporci�n en tama�o del div mayor, con el objetivo de representar los grandos cent�grados y permitir de forma din�mica la modificaci�n de la temperatura.

Pistas.
- Utilizar las propiedades style.height y style.width
- Utilizar el evento onchange

En la tarde actualizo el repositorio para incluir la tarea