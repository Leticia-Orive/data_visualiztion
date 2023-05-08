//Cambiar estilos en función de los datos
/* D3 se trata de visualización y presentación de datos. Es probable que desee cambiar el estilo de los elementos en función de los datos. Por ejemplo, es posible que desee colorear un punto de datos de azul si tiene un valor inferior a 20 y de rojo en caso contrario. Puede usar una función de devolución de llamada en el style()método e incluir la lógica condicional. La función de devolución de llamada utiliza el dparámetro para representar el punto de datos:

selection.style("color", (d) => {

});
El style()método no se limita a configurar el color- también se puede usar con otras propiedades CSS.

Agregue el style()método al código en el editor para establecer condicionalmente el valor colorde los h2elementos. Escriba la función de devolución de llamada de modo que si el valor de los datos es inferior a 20, devuelva rojo, de lo contrario, devuelva verde.

Nota: Puede usar la lógica if-else o el operador ternario.
Ejercicio
El primero h2debe tener una colorde color rojo.
El segundo h2debe tener una colorde color verde.
El tercero h2debe tener una colorde color verde.
El cuarto h2debe tener una colorde color rojo.
El quinto h2debe tener una colorde color verde.
El sexto h2debe tener una colorde color rojo.
El séptimo h2debe tener una colorde color verde.
El octavo h2debe tener una colorde color rojo.
El noveno h2debe tener una colorde color rojo.*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line

        .style("color", (d) => {
          if (d < 20){
            return 'red'
          }
          else{
            return 'green'
          }
        })

      // Add your code above this line
  </script>
</body>