//Trabajar con datos en D3
/* La biblioteca D3 se centra en un enfoque basado en datos. Cuando tiene un conjunto de datos, puede aplicar métodos D3 para mostrarlo en la página. Los datos vienen en muchos formatos, pero este desafío usa una matriz simple de números.

El primer paso es hacer que D3 conozca los datos. El data()método se utiliza en una selección de elementos DOM para adjuntar los datos a esos elementos. El conjunto de datos se pasa como argumento al método.

Un patrón de flujo de trabajo común es crear un nuevo elemento en el documento para cada dato del conjunto. D3 tiene el enter()método para este propósito.

Cuando enter()se combina con el data()método, mira los elementos seleccionados de la página y los compara con la cantidad de elementos de datos en el conjunto. Si hay menos elementos que elementos de datos, crea los elementos que faltan.

Aquí hay un ejemplo que selecciona un ulelemento y crea un nuevo elemento de lista basado en el número de entradas en la matriz:

<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
Puede parecer confuso seleccionar elementos que aún no existen. Este código le dice a D3 que primero seleccione ulen la página. A continuación, seleccione todos los elementos de la lista, lo que devuelve una selección vacía. Luego, el data()método revisa el conjunto de datos y ejecuta el siguiente código tres veces, una vez para cada elemento de la matriz. El enter()método ve que no hay lielementos en la página, pero necesita 3 (uno para cada dato en dataset). Los nuevos lielementos se añaden al uly tienen el texto New item.

Seleccione el bodynodo, luego seleccione todos h2los elementos. Haga que D3 cree y agregue una h2etiqueta para cada elemento de la datasetmatriz. El texto en el h2debe decir New Title. Su código debe usar los métodos data()y enter().
Ejercicios
Su documento debe tener 9 h2elementos.
El texto en los h2elementos debe decir New Title. Las mayúsculas y el espaciado deben coincidir exactamente.
Su código debe usar el data()método.
Su código debe usar el enter()método.
*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; // Add your code below
    this line d3.select('body').selectAll('h2') .data(dataset) .enter()
    .append('h2') .text('New Title'); // Add your code above this line
  </script>
</body>;
