//Cambiar dinámicamente la altura de cada barra
/* La altura de cada barra se puede establecer en el valor del punto de datos en la matriz, de forma similar a cómo xse estableció dinámicamente el valor.

selection.attr("property", (d, i) => {

})
Aquí destaría el valor del punto de datos y isería el índice del punto de datos en la matriz.

Cambie la función de devolución de llamada para que el heightatributo devuelva el valor de los datos multiplicado por 3.

Nota: Recuerde que multiplicar todos los puntos de datos por la misma constante escala los datos (como acercar). Es útil ver las diferencias entre los valores de las barras en este ejemplo.
Ejercicios
El primero rect debe tener un height de 36.
El segundo rect debe tener un height de 93.
El tercero rect debe tener una height de 66.
El cuarto rect debe tener una height de 51.
El quinto rect debe tener una height de 75.
El sexto rect debe tener una height de 54.
El séptimo rect debe tener una height de 87.
El octavo rect debe tener una height de 42.
El noveno rect debe tener una height de 27.*/

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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line
          return d*3


         // Add your code above this line
       });
  </script>
</body>
