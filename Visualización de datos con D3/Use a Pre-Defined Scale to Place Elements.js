//Use una escala predefinida para colocar  elementos
/* Con las escalas configuradas, es hora de mapear el diagrama de dispersión nuevamente. Las escalas son como funciones de procesamiento que convierten los datos xsin yprocesar en valores que se ajustan y representan correctamente en el SVG. Mantienen los datos dentro del área de trazado de la pantalla.

Establece los valores de atributos de coordenadas para una forma SVG con la función de escalado. Esto incluye xy yatributos para recto text elementos, o cxy cypara circles. Aquí hay un ejemplo:

shape
  .attr("x", (d) => xScale(d[0]))
Las escalas establecen atributos de coordenadas de forma para colocar los puntos de datos en el SVG. No necesita aplicar escalas cuando muestra el  valor real de los datos, por ejemplo, en el text()método para una información sobre herramientas o una etiqueta.

Utilice xScaley yScalepara colocar las formas circley texten el SVG. Para el circles, aplique las escalas para establecer los atributos cxy cy. Dales 5también un radio de unidades.

Para los text elementos, aplique las escalas para establecer los atributos xy y. Las etiquetas deben estar desplazadas a la derecha de los puntos. Para hacer esto, agregue 10unidades al x valor de los datos antes de pasarlo al archivo xScale.

Ejercicios
Su código debe tener 10 circle elementos.
El primer circle elemento debe tener un cx valor de aproximadamente 91y un cy valor de aproximadamente 368 después de aplicar las escalas. También debe tener un r valor de 5.
El segundo circle elemento debe tener un cx valor de aproximadamente 159y un cy valor de aproximadamente 181 después de aplicar las escalas. También debe tener un r valor de 5.
El tercer circle elemento debe tener un cx valor de aproximadamente 340y un cy valor de aproximadamente 329 después de aplicar las escalas. También debe tener un r valor de 5.
El cuarto circle elemento debe tener un cx valor de aproximadamente 131y un cy valor de aproximadamente 60 después de aplicar las escalas. También debe tener un r valor de 5.
El quinto circle elemento debe tener un cx valor de aproximadamente 440y un cy valor de aproximadamente 237 después de aplicar las escalas. También debe tener un r valor de 5.
El sexto circle elemento debe tener un cx valor de aproximadamente 271y un cy valor de aproximadamente 306 después de aplicar las escalas. También debe tener un r valor de 5.
El séptimo circle elemento debe tener un cx valor de aproximadamente 361y un cy valor de aproximadamente 351 después de aplicar las escalas. También debe tener un r valor de 5.
El octavo circle elemento debe tener un cx valor de aproximadamente 261y un cy valor de aproximadamente 132 después de aplicar las escalas. También debe tener un r valor de 5.
El noveno circle elemento debe tener un cx valor de aproximadamente 131y un cy valor de aproximadamente 144 después de aplicar las escalas. También debe tener un r valor de 5.
El décimo circle elemento debe tener un cx valor de aproximadamente 79y un cy valor de aproximadamente 326 después de aplicar las escalas. También debe tener un r valor de 5.
Su código debe tener 10 text elementos.
La primera etiqueta debe tener un x valor de aproximadamente 100y un y valor de aproximadamente 368 después de aplicar las escalas.
La segunda etiqueta debe tener un x valor de aproximadamente 168y un y valor de aproximadamente 181 después de aplicar las escalas.
La tercera etiqueta debe tener un x valor de aproximadamente 350y un y valor de aproximadamente 329 después de aplicar las escalas.
La cuarta etiqueta debe tener un x valor de aproximadamente 141y un y valor de aproximadamente 60 después de aplicar las escalas.
La quinta etiqueta debe tener un x valor de aproximadamente 449y un y valor de aproximadamente 237 después de aplicar las escalas.
La sexta etiqueta debe tener un x valor de aproximadamente 280y un y valor de aproximadamente 306 después de aplicar las escalas.
La séptima etiqueta debe tener un x valor de aproximadamente 370y un y valor de aproximadamente 351 después de aplicar las escalas.
La octava etiqueta debe tener un x valor de aproximadamente 270y un y valor de aproximadamente 132 después de aplicar las escalas.
La novena etiqueta debe tener un x valor de aproximadamente 140y un y valor de aproximadamente 144 después de aplicar las escalas.
La décima etiqueta debe tener un x valor de aproximadamente 88y un y valor de aproximadamente 326 después de aplicar las escalas.

*/

<body>
  <script>
    const dataset = [ [ 34, 78 ], [ 109, 280 ], [ 310, 120 ], [ 79, 411 ], [
    420, 220 ], [ 233, 145 ], [ 333, 96 ], [ 222, 333 ], [ 78, 320 ], [ 21, 123
    ] ]; const w = 500; const h = 500; const padding = 60; const xScale =
    d3.scaleLinear() .domain([0, d3.max(dataset, (d) => d[0])]) .range([padding,
    w - padding]); const yScale = d3.scaleLinear() .domain([0, d3.max(dataset,
    (d) => d[1])]) .range([h - padding, padding]); const svg = d3.select("body")
    .append("svg") .attr("width", w) .attr("height", h); svg.selectAll("circle")
    .data(dataset) .enter() .append("circle") // Add your code below this line
    .attr("cx", (d) => xScale(d[0])) .attr("cy", (d) => yScale(d[1])) .attr("r",
    5); // Add your code above this line svg.selectAll("text") .data(dataset)
    .enter() .append("text") .text((d) => (d[0] + ", " + d[1])) // Add your code
    below this line .attr("x", (d) => xScale(d[0] + 10)) .attr("y", (d) =>
    yScale(d[1])); // Add your code above this line
  </script>
</body>;
