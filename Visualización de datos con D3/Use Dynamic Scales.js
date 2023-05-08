//Usar escalas dinámicas
/* Los métodos D3 min()y max()son útiles para ayudar a establecer la escala.

Dado un conjunto de datos complejo, una prioridad es establecer la escala para que la visualización se ajuste al ancho y alto del contenedor SVG. Desea que todos los datos se representen dentro del SVG para que estén visibles en la página web.

El siguiente ejemplo establece la escala del eje x para los datos del diagrama de dispersión. El domain()método pasa información a la báscula sobre los valores de datos sin procesar para el gráfico. El range()método le da información sobre el espacio real en la página web para la visualización.

En el ejemplo, el dominio va desde 0 hasta el máximo del conjunto. Utiliza el max()método con una función de devolución de llamada basada en los valores x en las matrices. El rango usa el ancho del SVG ( w), pero también incluye algo de relleno. Esto pone un espacio entre los puntos del diagrama de dispersión y el borde del SVG.

const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
El relleno puede ser confuso al principio. Imagine el eje x como una línea horizontal de 0 a 500 (el valor de ancho para el SVG). Incluir el relleno en el range()método obliga a que la gráfica comience en 30 a lo largo de esa línea (en lugar de 0) y finalice en 470 (en lugar de 500).

Utilice la yScalevariable para crear una escala lineal en el eje y. El dominio debe comenzar en cero y llegar al yvalor máximo del conjunto. El rango debe usar la altura SVG ( h) e incluir relleno.

Nota: Recuerda mantener el diagrama con el lado derecho hacia arriba. Cuando establece el rango para las coordenadas y, el valor más alto (altura menos relleno) es el primer argumento y el valor más bajo es el segundo argumento.

Ejercicios

El texto en el h2debe ser 30.
El domain() de yScale debe ser equivalente a [0, 411].
El range() de yScale debe ser equivalente a [470, 30].
*/

<body>
  <script>
    const dataset = [ [ 34, 78 ], [ 109, 280 ], [ 310, 120 ], [ 79, 411 ], [
    420, 220 ], [ 233, 145 ], [ 333, 96 ], [ 222, 333 ], [ 78, 320 ], [ 21, 123
    ] ]; const w = 500; const h = 500; // Padding between the SVG canvas
    boundary and the plot const padding = 30; // Create an x and y scale const
    xScale = d3.scaleLinear() .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]); const yScale = d3.scaleLinear() .domain([0,
    d3.max(dataset, (d) => d[1])]) .range([h - padding, padding]); const output
    = yScale(411); d3.select("body") .append("h2") .text(output);
  </script>
</body>;
