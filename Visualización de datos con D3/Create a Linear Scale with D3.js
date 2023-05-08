//Crear una escala lineal con D3
/* Los gráficos de barras y de dispersión trazaron datos directamente en el SVG. Sin embargo, si la altura de una barra o uno de los puntos de datos fuera mayor que los valores de altura o ancho de SVG, saldría del área de SVG.

En D3, hay escalas para ayudar a trazar datos. scalesson funciones que le dicen al programa cómo asignar un conjunto de puntos de datos sin procesar a los píxeles del SVG.

Por ejemplo, supongamos que tiene un SVG de tamaño 100x500 y desea trazar el Producto Interno Bruto (PIB) para varios países. El conjunto de números estaría en el rango de mil millones o billones de dólares. Le proporciona a D3 un tipo de escala para indicarle cómo colocar los valores grandes del PIB en esa área de tamaño 100x500.

Es poco probable que represente los datos sin procesar tal como están. Antes de trazarlo, establece la escala para todo su conjunto de datos, de modo que los valores xy yse ajusten al ancho y alto de su SVG.

D3 tiene varios tipos de escala. Para una escala lineal (generalmente utilizada con datos cuantitativos), existe el método D3 scaleLinear():

const scale = d3.scaleLinear()
De forma predeterminada, una escala utiliza la relación de identidad. El valor de la entrada es el mismo que el valor de la salida. Un desafío separado cubre cómo cambiar esto.

Cambie la scale variable para crear una escala lineal. Luego establezca la output variable en la escala llamada con un argumento de entrada de 50.

Ejercicio
El texto en el h2 debe ser 50.
Su código debe usar el scaleLinear() método.
La output variable debe llamar scale con un argumento de 50.
*/

<body>
  <script>
    // Add your code below this line const scale = d3.scaleLinear(); // Create
    the scale here const output = scale(50); // Call scale with an argument here
    // Add your code above this line d3.select("body") .append("h2")
    .text(output);
  </script>
</body>;
