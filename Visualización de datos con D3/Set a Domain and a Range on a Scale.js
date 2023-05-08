//Establecer un dominio y un rango en una escala
/* De forma predeterminada, las escalas utilizan la relación de identidad. Esto significa que el valor de entrada se asigna al valor de salida. Sin embargo, las escalas pueden ser mucho más flexibles e interesantes.

Digamos que un conjunto de datos tiene valores que van de 50 a 480. Esta es la información de entrada para una escala, también conocida como dominio .

Desea mapear esos puntos a lo largo del xeje en el SVG, entre 10 unidades y 500 unidades. Esta es la información de salida, también conocida como rango .

Los métodos domain()y range()establecen estos valores para la escala. Ambos métodos toman una matriz de al menos dos elementos como argumento. Aquí hay un ejemplo:

scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
En orden, los siguientes valores se mostrarían en la consola: 10, 500, 323.37y 807.67.

Tenga en cuenta que la escala utiliza la relación lineal entre los valores de dominio y rango para calcular cuál debería ser la salida para un número determinado. El valor mínimo en el dominio (50) se asigna al valor mínimo (10) en el rango.

Cree una escala y establezca su dominio [250, 500] y rango en [10, 150].

Nota: Puede encadenar los métodos domain() y range() en la scale variable.

Ejercicio
*/
<body>
  <script>
    // Add your code below this line const scale = d3.scaleLinear()
    .domain([250, 500]) .range([10, 150]); // Add your code above this line
    const output = scale(50); d3.select("body") .append("h2") .text(output);
  </script>
</body>;
