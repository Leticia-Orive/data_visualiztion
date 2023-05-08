//Agregar un efecto de desplazamiento a un elemento D3
/* Es posible agregar efectos que resaltan una barra cuando el usuario pasa el mouse sobre ella. Hasta ahora, el estilo de los rectángulos se aplica con los métodos integrados D3 y SVG, pero también puede usar CSS.

Establece la clase CSS en los elementos SVG con el attr()método. Luego, la :hoverpseudoclase para su nueva clase contiene las reglas de estilo para cualquier efecto de desplazamiento.

Use el attr()método para agregar una clase de bara todos los rectelementos. Esto cambia el fillcolor de la barra a marrón cuando pasa el mouse sobre ella.
Ejercicio
Sus rect elementos deben tener una clase de bar.*/

<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("fill", "navy")
       // Add your code below this line

        .attr("class", "bar");

       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>
