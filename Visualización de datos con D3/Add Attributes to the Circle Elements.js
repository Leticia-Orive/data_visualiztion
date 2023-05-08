//Agregar atributos a los  elementos del círculo
/* El último desafío creó los circle elementos para cada punto en el dataset y los agregó al SVG. Pero D3 necesita más información sobre la posición  y el tamaño de cada uno circlepara mostrarlos correctamente.

Una circleen SVG tiene tres atributos principales. Los atributos cx y cy son las coordenadas. Le dicen a D3 dónde colocar el centro de la forma en el SVG. El radio ( ratributo) da el tamaño del circle.

Al igual que la rect  y coordenada, el cy atributo de a circlese mide desde la parte superior del SVG, no desde la parte inferior.

Los tres atributos pueden usar una función de devolución de llamada para establecer sus  valores dinámicamente. Recuerde que todos los métodos encadenados después de data(dataset)ejecutarse una vez por  elemento en dataset. El dparámetro en la función de devolución de llamada se refiere al  elemento actual en dataset, que es una matriz para cada punto. Utiliza la notación de corchetes, como d[0], para acceder a los  valores en esa matriz.

Agregue atributos cx, cy y a los  elementos. El  valor debe ser el primer número de la matriz para cada  elemento en . El  valor debe basarse en el segundo número de la matriz, pero asegúrese de mostrar el gráfico con el lado derecho hacia arriba  y no invertido. El  valor debe ser para todos los círculos.rcirclecxdatasetc y r5

ejercicio
Su código debe tener 10 circle elementos.
El primer circle elemento debe tener un cx valor de 34, un cy  valor de 422 y un r valor de 5.
El segundo circle elemento debe tener un cx valor de 109, un cy  valor de 220 y un r valor de 5.
El tercer circle elemento debe tener un cx valor de 310, un cy valor de 380 y un r valor de 5.
El cuarto circle elemento debe tener un cx valor de 79, un cy valor de 89 y un r valor de 5.
El quinto circle elemento debe tener un cx valor de 420, un cy valor de 280 y un r valor de 5.
El sexto circle elemento debe tener un cx valor de 233, un cy valor de 355 y un r valor de 5.
El séptimo circle elemento debe tener un cx valor de 333, un cy valor de 404 y un r valor de 5.
El octavo circle elemento debe tener un cx valor de 222, un cy valor de 167 y un r valor de 5.
El noveno circle elemento debe tener un cx valor de 78, un cy valor de 180 y un r valor de 5.
El décimo circle elemento debe tener un cx valor de 21, un cy valor de 377 y un r valor de 5.
*/

<body>
  <script>
    const dataset = [ [ 34, 78 ], [ 109, 280 ], [ 310, 120 ], [ 79, 411 ], [
    420, 220 ], [ 233, 145 ], [ 333, 96 ], [ 222, 333 ], [ 78, 320 ], [ 21, 123
    ] ]; const w = 500; const h = 500; const svg = d3.select("body")
    .append("svg") .attr("width", w) .attr("height", h); svg.selectAll("circle")
    .data(dataset) .enter() .append("circle") .attr("cx", (d) => d[0])
    .attr("cy", (d) => h - d[1]) .attr("r", 5)
  </script>
</body>;
