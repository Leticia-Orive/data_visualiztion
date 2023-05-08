//Agregar ejes a una visualización
/* Otra forma de mejorar el diagrama de dispersión es agregar un eje x y un eje y.

D3 tiene dos métodos, axisLeft()y axisBottom(), para renderizar el eje y y el eje x, respectivamente. Aquí hay un ejemplo para crear el eje x basado en xScalelos desafíos anteriores:

const xAxis = d3.axisBottom(xScale);
El siguiente paso es renderizar el eje en el SVG. Para ello, puede utilizar un componente SVG general, el gelemento. Los gsoportes para el grupo. A diferencia de rect, circley text, un eje es solo una línea recta cuando se representa. Porque es una forma simple, usando gobras. El último paso es aplicar un transformatributo para colocar el eje en el SVG en el lugar correcto. De lo contrario, la línea se representaría a lo largo del borde del SVG y no sería visible. SVG admite diferentes tipos de archivos transforms, pero el posicionamiento de un eje necesita translate. Cuando se aplica al gelemento, mueve todo el grupo hacia arriba y hacia abajo en las cantidades dadas. Aquí hay un ejemplo:

const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
El código anterior coloca el eje x en la parte inferior del SVG. Luego se pasa como argumento al call()método. El eje y funciona de la misma manera, excepto que el translateargumento tiene la forma (x, 0). Debido a que translatees una cadena en el attr()método anterior, puede usar la concatenación para incluir valores variables para sus argumentos.

El diagrama de dispersión ahora tiene un eje x. Cree un eje y en una variable nombrada yAxisusando el axisLeft()método. Luego renderiza el eje usando un gelemento. Asegúrese de usar un transformatributo para traducir el eje por la cantidad de unidades de relleno hacia la derecha y 0unidades hacia abajo. Recuerda al call()eje.
Ejercicio
Su código debe usar el axisLeft()método con yScalepasado como argumento.
El elemento del eje y gdebe tener un transformatributo para traducir el eje por (60, 0).
Su código debe llamar al y Axis.*/

<body>
  <script>
    const dataset = [ [ 34, 78 ], [ 109, 280 ], [ 310, 120 ], [ 79, 411 ], [
    420, 220 ], [ 233, 145 ], [ 333, 96 ], [ 222, 333 ], [ 78, 320 ], [ 21, 123
    ] ]; const w = 500; const h = 500; const padding = 60; const xScale =
    d3.scaleLinear() .domain([0, d3.max(dataset, (d) => d[0])]) .range([padding,
    w - padding]); const yScale = d3.scaleLinear() .domain([0, d3.max(dataset,
    (d) => d[1])]) .range([h - padding, padding]); const svg = d3.select("body")
    .append("svg") .attr("width", w) .attr("height", h); svg.selectAll("circle")
    .data(dataset) .enter() .append("circle") .attr("cx", (d) => xScale(d[0]))
    .attr("cy",(d) => yScale(d[1])) .attr("r", (d) => 5); svg.selectAll("text")
    .data(dataset) .enter() .append("text") .text((d) => (d[0] + "," + d[1]))
    .attr("x", (d) => xScale(d[0] + 10)) .attr("y", (d) => yScale(d[1])) const
    xAxis = d3.axisBottom(xScale); // Add your code below this line const yAxis
    = d3.axisLeft(yScale); // Add your code above this line svg.append("g")
    .attr("transform", "translate(0," + (h - padding) + ")") .call(xAxis); //
    Add your code below this line svg.append("g") .attr("transform",
    "translate(" + padding + ",0)") .call(yAxis) // Add your code above this
    line
  </script>
</body>;
