#Ejercicio 1
Programar un div con ciertas dimensiones y color, que persiga en la p�gina al cursor del mouse.

###Pistas:
- Utilizar las propiedades <a href="http://www.w3schools.com/jsref/prop_style_left.asp">style.left</a> y <a href="http://www.w3schools.com/jsref/prop_style_top.asp">style.top</a>.
- Utilizar las propiedades <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageX">PageX</a> y <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageY">PageY</a> de los eventos.
- Utilizar el evento <a href="http://www.w3schools.com/jsref/event_onmousemove.asp">onmousemove</a>.
- Leer sobre <a href="http://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y">Diferencias entre screenX, pageX y clientX</a>.

<hr/>
#Ejercicio 2
Programar una funci�n en JS (EcmaScript 5) que reciba 3 argumentos, el primero un arreglo bidimensional (que puede tener n arreglos internos, y dichos arreglos m cadenas adentro), el segundo y tercero cadenas de caracteres que funcionan como separadores, dicha funci�n debe permitir concatenar las cadenas de caracteres localizadas dentro del arreglo bi-dimensional, utilizando el segundo par�metro como separador entre cadena y el tercer par�metro como separador entre arreglo, un ejemplo se muestra a continuaci�n.

```javascript
var a = concat([["a", "bon"], ["1", "p", "dr"], ["j", "w", "javascript"], [ "23", "45", "html"]], ";", ".");
console.log(a); // a -> "a;bon.1;p;dr.j;w;javascript.23;45;html"
```
###Pistas:
- Utilizar los m�todos de Array <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">***Map***</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join">***Join***</a> y <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach">***forEach***</a> (los m�s convenientes para aprender).
- Tambi�n se pueden usar los ciclos repetitivos for cl�sicos <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for in</a> y <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a>.

<hr/>
#Ejercicio 3
Programar una p�gina web que posea un input del tipo number que represente los grados cent�grados de un term�metro, a partir del valor que se vaya introduciendo en dicho input un div insertado en otro debe asumir una proporci�n en tama�o del div mayor, con el objetivo de representar los grandos cent�grados y permitir de forma din�mica la modificaci�n de la temperatura.

###Pistas.
- Utilizar las propiedades <a href="http://www.w3schools.com/jsref/prop_style_height.asp">style.height</a> y <a href="http://www.w3schools.com/jsref/prop_style_width.asp">style.width</a>.
- Utilizar el evento <a href="http://www.w3schools.com/jsref/event_onchange.asp">onchange</a>.
<hr/>