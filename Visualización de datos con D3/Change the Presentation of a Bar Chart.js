//Cambiar la presentación  de un gráfico  de barras
/* El último  desafío creó un gráfico  de barras, pero hay un par  de cambios  de formato que podrían mejorarlo:

Agregue espacio entre cada barra para separarlas visualmente, lo que se hace agregando un margen al CSS para la barclase .

Aumente la altura  de las barras para mostrar mejor la diferencia  de valores, lo que se hace multiplicando el valor por un número para escalar la altura

Primero, agregue un margin de 2pxa la barclase en la styleetiqueta. A continuación, cambie la función  de  devolución  de llamada en el style()método para que  devuelva un valor 10multiplicado por el valor  de los datos originales (más el px).

Nota: Multiplicar cada punto  de datos por la misma constante solo altera la escala. Es como acercar el zoom y no cambia el significado  de los datos subyacentes.

Ejercicio
El primero div   debe tener una height de 120 píxeles y una margin de 2 píxeles.
El segundo div  debe tener una height de 310 píxeles y una margin de 2 píxeles.
El tercero div  debe tener una height de 220 píxeles y una margin de 2 píxeles.
El cuarto div  debe tener una height de 170 píxeles y una margin de 2 píxeles.
El quinto div  debe tener una height de 250 píxeles y una margin de 2 píxeles.
El sexto div  debe tener una height de 180 píxeles y una margin de 2 píxeles.
El séptimo div  debe tener una height de 290 píxeles y una margin de 2 píxeles.
El octavo div  debe tener una height de 140 píxeles y una margin de 2 píxeles.
El noveno div  debe tener una height de 90 píxeles y una margin de 2 píxeles.

*/
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */
    margin: 2px;
    /* Add your code above this line */
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
      .style("height", (d) => (d * 10 + "px")) // Change this line
  </script>
</body>