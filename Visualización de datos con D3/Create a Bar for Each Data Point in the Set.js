//Crear una barra para cada punto de datos en el conjunto
/* El último desafío agregó solo un rectángulo al svgelemento para representar una barra. Aquí, combinará lo que ha aprendido hasta ahora sobre las formas data(), enter()y SVG para crear y agregar un rectángulo para cada punto de datos en dataset.

Un desafío anterior mostró el formato de cómo crear y agregar un divpara cada elemento en dataset:

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
Hay algunas diferencias al trabajar con rectelementos en lugar de divelementos. Los rectelementos deben agregarse a un svgelemento, no directamente al archivo body. Además, debe decirle a D3 dónde colocar cada uno rectdentro del svgárea. La ubicación de la barra se cubrirá en el próximo desafío.

Use los métodos data(), enter() y append() para crear y agregar un rectpara cada elemento en dataset. Las barras deben mostrarse una encima de la otra; esto se solucionará en el próximo desafío.
Ejercicio
Su documento debe tener 9 rect elementos.
Su código debe usar el data() método.
Su código debe usar el enter() método.
Su código debe usar el append() método.*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; const w = 500; const h
    = 100; const svg = d3.select("body") .append("svg") .attr("width", w)
    .attr("height", h); svg.selectAll("rect") // Add your code below this line
    .data(dataset) .enter() .append("rect") // Add your code above this line
    .attr("x", 0) .attr("y", 0) .attr("width", 25) .attr("height", 100);
  </script>
</body>;
