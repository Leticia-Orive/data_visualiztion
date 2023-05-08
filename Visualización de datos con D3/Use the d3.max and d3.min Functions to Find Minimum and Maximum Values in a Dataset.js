//Use las funciones d3.max y d3.min para encontrar valores mínimos y máximos en un conjunto de datos
/* Los métodos D3 domain()y range()configuran esa información para su báscula en función de los datos. Hay un par de métodos para hacerlo más fácil.

A menudo, cuando configura el dominio, querrá usar los valores mínimo y máximo dentro del conjunto de datos. Intentar encontrar estos valores manualmente, especialmente en un gran conjunto de datos, puede causar errores.

D3 tiene dos métodos: min()y max()para devolver esta información. Aquí hay un ejemplo:

const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
Un conjunto de datos puede tener matrices anidadas, como los [x, y]pares de coordenadas que estaban en el ejemplo del gráfico de dispersión. En ese caso, debe decirle a D3 cómo calcular el máximo y el mínimo. Afortunadamente, tanto el método min()como max()aceptan una función de devolución de llamada. En este ejemplo, el argumento de la función de devolución de llamada des para la matriz interna actual. La devolución de llamada debe devolver el elemento de la matriz interna (el valor xo y) sobre el que desea calcular el máximo o el mínimo. Aquí hay un ejemplo de cómo encontrar los valores mínimo y máximo con una matriz de matrices:

const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
minXtendría el valor 1.

La positionData matriz contiene submatrices de coordenadas x, y y z. Use un método D3 para encontrar el valor máximo de la coordenada z (el tercer valor) de las matrices y guárdelo en la outputvariable.

ejercicio

El texto en el h2 debe ser 8.
Su código debe usar el max()método.
*/

<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]] // Add your code below
    this line const output = d3.max(positionData, (d) => d[2]); // Change this
    line // Add your code above this line d3.select("body") .append("h2")
    .text(output)
  </script>
</body>;
