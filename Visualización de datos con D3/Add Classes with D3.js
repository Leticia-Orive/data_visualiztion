//Añadir clases con D3
/* El uso de muchos estilos en línea en elementos HTML se vuelve difícil de administrar, incluso para aplicaciones más pequeñas. Es más fácil agregar una clase a los elementos y diseñar esa clase una vez usando las reglas de CSS. D3 tiene el attr()método para agregar cualquier atributo HTML a un elemento, incluido un nombre de clase.

El attr()método funciona de la misma manera que style()lo hace. Toma valores separados por comas y puede usar una función de devolución de llamada. Aquí hay un ejemplo para agregar una clase de containera una selección:

selection.attr("class", "container");
Tenga en cuenta que el classparámetro seguirá siendo el mismo cada vez que necesite agregar una clase y solo containercambiará el parámetro.

Agregue el attr()método al código en el editor y coloque una clase de baren los divelementos.

Ejercicio
Sus div elementos deben tener una clase de bar.
Su código debe usar el attr() método.
*/
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line

        .attr('class', 'bar')

      // Add your code above this line
  </script>
</body>
