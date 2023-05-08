//Invertir elementos SVG
/* Es posible que haya notado que el gráfico de barras parecía al revés o invertido. Esto se  debe a cómo SVG usa las coordenadas (x, y).

En SVG, el punto de origen de las coordenadas está en la esquina superior izquierda. Una xcoordenada de 0 coloca una forma en el borde izquierdo del área SVG. Una ycoordenada de 0 coloca una forma en el borde superior del área SVG. Los valores más altos xempujan el rectángulo hacia la derecha. Los valores más altos yempujan el rectángulo hacia abajo.

Para hacer las barras con el lado derecho hacia arriba,  debe cambiar la forma en que yse calcula la coordenada.  Debe tener en cuenta tanto la altura de la barra como la altura total del área SVG.

La altura del área SVG es 100. Si tiene un punto de datos de 0 en el conjunto, querrá que la barra comience en la parte inferior del área SVG (no en la parte superior). Para hacer esto, la ycoordenada necesita un valor de 100. Si el valor del punto de datos fuera 1, comenzaría con una ycoordenada de 100 para establecer la barra en la parte inferior. Luego,  debe tener en cuenta la altura de la barra de 1, por lo que la ycoordenada final sería 99.

La ycoordenada que es y = heightOfSVG - heightOfBarcolocaría las barras con el lado derecho hacia arriba.

Cambie la función de devolución de llamada del yatributo para establecer las barras con el lado derecho hacia arriba. Recuerda que el heightde la barra es 3 veces el valor de los datos d.

Nota: En general, la relación es y = h - m * d, donde mes la constante que escala los puntos de datos.
Ejercicio
El primero rect debe tener un y valor de 64.
El segundo rect debe tener un y valor de 7.
El tercero rect debe tener un y valor de 34.
El cuarto rect debe tener un y valor de 49.
El quinto rect debe tener un y valor de 25.
El sexto rect debe tener un y valor de 46.
El séptimo rect debe tener un y valor de 13.
El octavo rect debe tener un y valor de 58.
El noveno rect debe tener un y valor de 73.*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; const w = 500; const h
    = 100; const svg = d3.select("body") .append("svg") .attr("width", w)
    .attr("height", h); svg.selectAll("rect") .data(dataset) .enter()
    .append("rect") .attr("x", (d, i) => i * 30) .attr("y", (d, i) => h - 3 * d)
    .attr("width", 25) .attr("height", (d, i) => 3 * d);
  </script>
</body>;
