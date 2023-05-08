//Agregar estilo en línea a los elementos
/* D3 le permite agregar estilos CSS en línea en elementos dinámicos con el style()método.

El style()método toma como argumento un par clave-valor separados por comas. Aquí hay un ejemplo para establecer el color del texto de la selección en azul:

selection.style("color","blue");
Agregue el style()método al código en el editor para que todo el texto mostrado tenga una font-familyextensión de verdana.D3 le permite agregar estilos CSS en línea en elementos dinámicos con el style()método.

El style()método toma como argumento un par clave-valor separados por comas. Aquí hay un ejemplo para establecer el color del texto de la selección en azul:

selection.style("color","blue");
Agregue el style()método al código en el editor para que todo el texto mostrado tenga una font-familyextensión de verdana.
Ejercicio
Sus h2 elementos deben tener una font-family de verdana.
Su código debe usar el style() método.*/
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("h2") .data(dataset) .enter() .append("h2")
    .text((d) => (d + " USD")) // Add your code below this line
    .style('font-family', 'verdana') // Add your code above this line
  </script>
</body>;
