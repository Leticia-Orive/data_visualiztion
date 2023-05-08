//Cambiar el color de un elemento SVG
/* Las barras están en la posición correcta, pero todas son del mismo color negro. SVG tiene una forma de cambiar el color de las barras.

En SVG, una rectforma se colorea con el fillatributo. Admite códigos hexadecimales, nombres de colores y valores rgb, así como opciones más complejas como degradados y transparencia.

Agregue un attr()método para establecer el fillcolor de todas las barras en azul marino.
Ejercicio
Todas las barras deben tener un fillcolor azul marino.*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; const w = 500; const h
    = 100; const svg = d3.select("body") .append("svg") .attr("width", w)
    .attr("height", h); svg.selectAll("rect") .data(dataset) .enter()
    .append("rect") .attr("x", (d, i) => i * 30) .attr("y", (d, i) => h - 3 * d)
    .attr("width", 25) .attr("height", (d, i) => 3 * d) // Add your code below
    this line .attr("fill", "navy") // Add your code above this line
  </script>
</body>;
