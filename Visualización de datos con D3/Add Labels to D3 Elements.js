//Agregar etiquetas a  elementos D3
/* D3 le permite etiquetar un  elemento gráfico, como una barra, utilizando el text elemento SVG.

Al igual que el rect elemento, un text elemento debe tener xy yatributos para colocarlo en el SVG. También necesita acceder a los datos para mostrar esos valores.

D3 le brinda un alto nivel de control sobre cómo etiqueta sus barras.

El código en el editor ya vincula los datos a cada text elemento nuevo. Primero, agregue textnodos al archivo svg. A continuación, agregue atributos para las coordenadas xy y. Deben calcularse de la misma manera que las rectunidades, excepto que el yvalor de textdebe hacer que la etiqueta quede 3 unidades más alta que la barra. Finalmente, use el método D3 text()para establecer la etiqueta igual al valor del punto de datos.

Nota: Para que la etiqueta quede más alta que la barra, decida si el yvalor de textdebe ser 3 mayor o 3 menor que el yvalor de la barra.
Ejercicio
El primer text elemento debe tener una etiqueta de 12 y un y valor de 61.
El segundo text elemento debe tener una etiqueta de 31 y un y valor de 4.
El tercer text elemento debe tener una etiqueta de 22 y un y valor de 31.
El cuarto text elemento debe tener una etiqueta de 17 y un y valor de 46.
El quinto text elemento debe tener una etiqueta de 25 y un y valor de 22.
El sexto text elemento debe tener una etiqueta de 18 y un y valor de 43.
El séptimo text elemento debe tener una etiqueta de 29 y un y valor de 10.
El octavo text elemento debe tener una etiqueta de 14 y un y valor de 55.
El noveno text elemento debe tener una etiqueta de 9 y un y valor de 70.*/

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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d - 3)
       .text((d, i) => d);
       // Add your code above this line
  </script>
<body></body>
