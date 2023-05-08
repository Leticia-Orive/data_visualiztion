//Actualizar la altura de un elemento dinámicamente
/* Los desafíos anteriores cubrieron cómo mostrar datos de una matriz y cómo agregar clases de CSS. Puede combinar estas lecciones para crear un gráfico de barras simple. Hay dos pasos para esto:

Cree un divpara cada punto de datos en la matriz

Asigne a cada uno divuna altura dinámica, utilizando una función de devolución de llamada en el style()método que establece la altura igual al valor de los datos

Recupera el formato para establecer un estilo usando una función de devolución de llamada:

selection.style("cssProperty", (d) => d)
Agregue el style()método al código en el editor para establecer la heightpropiedad para cada elemento. Utilice una función de devolución de llamada para devolver el valor del punto de datos con la cadena pxañadida.
Ejercicio
El primero div debe tener una height cantidad de 12 píxeles.
El segundo div debe tener una height cantidad de 31 píxeles.
El tercero div debe tener una height cantidad de 22 píxeles.
El cuarto div debe tener una height cantidad de 17 píxeles.
El quinto div debe tener una height cantidad de 25 píxeles.
El sexto div debe tener una height cantidad de 18 píxeles.
El séptimo div debe tener una height cantidad de 29 píxeles.
El octavo div debe tener una height cantidad de 14 píxeles.
El noveno div debe tener una height cantidad de 9 píxeles.*/
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
      .attr("class", "bar")
      .style('height', d => `${d}px`)
  </script>
</body>
