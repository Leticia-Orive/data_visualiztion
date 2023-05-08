//Selecciona un Grupo de Elementos con D3
/* D3 también tiene el selectAll()método para seleccionar un grupo de elementos. Devuelve una matriz de nodos HTML para todos los elementos del documento que coinciden con la cadena de entrada. Aquí hay un ejemplo para seleccionar todas las etiquetas de anclaje en un documento:

const anchors = d3.selectAll("a");
Al igual que el select()método, selectAll()admite el encadenamiento de métodos y puede usarlo con otros métodos.

Seleccione todas las lietiquetas en el documento y cambie su texto a la cadena list itemencadenando el .text()método.
Ejercicios
Debe haber 3 li elementos en la página, y el texto en cada uno debe decir list item. Las mayúsculas y los espacios deben coincidir exactamente.
Su código debe acceder al d3 objeto.
Su código debe usar el selectAll método.*/

<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line d3.selectAll("li").text("list item") // Add
    your code above this line
  </script>
</body>;
