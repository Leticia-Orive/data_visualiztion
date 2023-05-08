//Agregar etiquetas a círculos de gráficos de dispersión
/* Puede agregar texto para crear etiquetas para los puntos en un diagrama de dispersión.

El objetivo es mostrar los valores separados por comas para el primer ( x) y el segundo ( y) campo de cada elemento en dataset.

Los textnodos necesitan xy yatributos para posicionarlo en el SVG. En este desafío, el yvalor (que determina la altura) puede usar el mismo valor que circleusa para su cyatributo. El xvalor puede ser ligeramente mayor que el cxvalor de circle, por lo que la etiqueta es visible. Esto empujará la etiqueta a la derecha del punto trazado.

Etiquete cada punto en el diagrama de dispersión usando los textelementos. El texto de la etiqueta debe ser los dos valores separados por una coma y un espacio. Por ejemplo, la etiqueta del primer punto es 34, 78. Configure el xatributo para que sean 5unidades más que el valor que usó para el cxatributo en el circle. Establezca el y atributo de la misma manera que se usa para el cy valor en el archivo circle.

Ejercicio
Su código debe tener 10 textelementos.
La primera etiqueta debe tener texto de 34, 78, un xvalor de 39 y un yvalor de 422.
La segunda etiqueta debe tener texto de 109, 280, un xvalor de 114 y un yvalor de 220.
La tercera etiqueta debe tener texto de 310, 120, un xvalor de 315 y un yvalor de 380.
La cuarta etiqueta debe tener texto de 79, 411, un xvalor de 84 y un yvalor de 89.
La quinta etiqueta debe tener texto de 420, 220, un xvalor de 425 y un yvalor de 280.
La sexta etiqueta debe tener texto de 233, 145, un xvalor de 238 y un yvalor de 355.
La séptima etiqueta debe tener texto de 333, 96, un xvalor de 338 y un yvalor de 404.
La octava etiqueta debe tener texto de 222, 333, un xvalor de 227 y un yvalor de 167.
La novena etiqueta debe tener texto de 78, 320, un xvalor de 83 y un yvalor de 180.
La décima etiqueta debe tener texto de 21, 123, un xvalor de 26 y un yvalor de 377.
*/

<body>
  <script>
    const dataset = [ [ 34, 78 ], [ 109, 280 ], [ 310, 120 ], [ 79, 411 ], [
    420, 220 ], [ 233, 145 ], [ 333, 96 ], [ 222, 333 ], [ 78, 320 ], [ 21, 123
    ] ]; const w = 500; const h = 500; const svg = d3.select("body")
    .append("svg") .attr("width", w) .attr("height", h); svg.selectAll("circle")
    .data(dataset) .enter() .append("circle") .attr("cx", (d, i) => d[0])
    .attr("cy", (d, i) => h - d[1]) .attr("r", 5); svg.selectAll("text")
    .data(dataset) .enter() .append("text") // Add your code below this line
    .attr("x", (d) => d[0] + 5) .attr("y", (d) => h - d[1]) .text((d) => (d[0] +
    ", " + d[1])) // Add your code above this line
  </script>
</body>;
