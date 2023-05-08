//Agregar información sobre herramientas a un  elemento D3
/* Una información sobre herramientas muestra más información sobre un  elemento en una página cuando el usuario pasa el cursor sobre ese  elemento. Hay varias formas de agregar una información sobre herramientas a una visualización. Este desafío utiliza el title elemento SVG.

titlese empareja con el text()método para agregar dinámicamente datos a las barras.

Agregue un title elemento debajo de cada rectnodo. Luego llame al text()método con una función de devolución de llamada para que el texto muestre el valor de los datos.
Ejercicio
Su código debe tener 9 title elementos.
El primer title elemento debe tener texto de información sobre herramientas de 12.
El segundo title elemento debe tener texto de información sobre herramientas de 31.
El tercer title elemento debe tener texto de información sobre herramientas de 22.
El cuarto title elemento debe tener texto de información sobre herramientas de 17.
El quinto title elemento debe tener texto de información sobre herramientas de 25.
El sexto title elemento debe tener texto de información sobre herramientas de 18.
El séptimo title elemento debe tener texto de información sobre herramientas de 29.
El octavo title elemento debe tener texto de información sobre herramientas de 14.
El noveno title elemento debe tener texto de información sobre herramientas de 9.*/

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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line
       .append("title")
       .text((d) => d)



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
