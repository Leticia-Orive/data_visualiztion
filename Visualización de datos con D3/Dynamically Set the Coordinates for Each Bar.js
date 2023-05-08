//Establecer dinámicamente las coordenadas para cada barra
/* El último desafío creó y agregó un rectángulo al svgelemento para que cada punto datasetrepresente una barra. Desafortunadamente, todos estaban apilados uno encima del otro.

La ubicación de un rectángulo es manejada por los atributos xy y. Le dicen a D3 dónde comenzar a dibujar la forma en el svgárea. El último desafío los estableció en 0, por lo que cada barra se colocó en la esquina superior izquierda.

Para un gráfico de barras, todas las barras deben estar en el mismo nivel vertical, lo que significa que el yvalor permanece igual (en 0) para todas las barras. Sin embargo, el xvalor debe cambiar a medida que agrega nuevas barras. Recuerde que xlos valores más grandes empujan los elementos más hacia la derecha. A medida que recorre los elementos de la matriz en dataset, el xvalor debería aumentar.

El attr()método en D3 acepta una función de devolución de llamada para establecer dinámicamente ese atributo. La función de devolución de llamada toma dos argumentos, uno para el punto de datos en sí (generalmente d) y otro para el índice del punto de datos en la matriz. El segundo argumento para el índice es opcional. Aquí está el formato:

selection.attr("property", (d, i) => {

})
Es importante tener en cuenta que NO es necesario escribir un forbucle ni utilizar forEach()para iterar sobre los elementos del conjunto de datos. Recuerde que el data()método analiza el conjunto de datos y cualquier método que se encadene después data()se ejecuta una vez para cada elemento del conjunto de datos.

Cambie la xfunción de devolución de llamada del atributo para que devuelva el índice multiplicado por 30.

Nota: Cada barra tiene un ancho de 25, por lo que aumentar cada xvalor en 30 agrega algo de espacio entre las barras. Cualquier valor superior a 25 funcionaría en este ejemplo.

Ejercicio
El primero rect debe tener un x valor de 0.
El segundo rect debe tener un x valor de 30.
El tercero rect debe tener un x valor de 60.
El cuarto rect debe tener un x valor de 90.
El quinto rect debe tener un x valor de 120.
El sexto rect debe tener un x valor de 150.
El séptimo rect debe tener un x valor de 180.
El octavo rect debe tener un x valor de 210.
El noveno rect debe tener un x valor de 240.*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         // Add your code below this line
         return i * 30



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
