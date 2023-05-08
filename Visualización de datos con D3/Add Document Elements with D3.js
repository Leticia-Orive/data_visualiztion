//Agregar elementos de documento con D3
/* D3 tiene varios métodos que le permiten agregar y cambiar elementos en su documento.

El select()método selecciona un elemento del documento. Toma un argumento para el nombre del elemento que desea y devuelve un nodo HTML para el primer elemento del documento que coincida con el nombre. Aquí hay un ejemplo:

const anchor = d3.select("a");
El ejemplo anterior encuentra la primera etiqueta de anclaje en la página y guarda un nodo HTML para ella en la variable anchor. Puede utilizar la selección con otros métodos. La d3parte del ejemplo es una referencia al objeto D3, que es la forma de acceder a los métodos D3.

Otros dos métodos útiles son append()y text().

El append()método toma un argumento para el elemento que desea agregar al documento. Agrega un nodo HTML a un elemento seleccionado y devuelve un identificador a ese nodo.

El text()método establece el texto del nodo seleccionado u obtiene el texto actual. Para establecer el valor, pasa una cadena como argumento dentro de los paréntesis del método.

Aquí hay un ejemplo que selecciona una lista desordenada, agrega un elemento de lista y agrega texto:

d3.select("ul")
  .append("li")
  .text("Very important item");
D3 le permite encadenar varios métodos junto con períodos para realizar una serie de acciones seguidas.

Utilice el selectmétodo para seleccionar la body etiqueta en el documento. Luego , append etiquételo h1 y agregue el texto Learning D3 al h1 elemento.
Ejercicio
El body debe tener un h1elemento.
El h1 elemento debe tener el texto Learning D3 en él.
Su código debe acceder al d3 objeto.
Su código debe usar el select método.
Su código debe usar el append método.
Su código debe usar el text método.
*/
<body>
  <script>
    // Add your code below this line d3.select('body') .append('h1')
    .text('Learning D3') // Add your code above this line
  </script>
</body>;
