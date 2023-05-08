//Mostrar formas con SVG
/* El último desafío creó un svgelemento con un ancho y alto determinados, que era visible porque tenía un background-coloraplicado en la styleetiqueta. El código hizo espacio para el ancho y alto dados.

El siguiente paso es crear una forma para poner en el svgárea. Hay una serie de formas admitidas en SVG, como rectángulos y círculos. Se utilizan para mostrar datos. Por ejemplo, una <rect>forma SVG de rectángulo ( ) podría crear una barra en un gráfico de barras.

Cuando coloca una forma en el svgárea, puede especificar dónde va xy ylas coordenadas. El punto de origen de (0, 0) está en la esquina superior izquierda. Valores positivos para xempujar la forma hacia la derecha y valores positivos para yempujar la forma hacia abajo desde el punto de origen.

Para colocar una forma en medio de los 500 (ancho) x 100 (alto) svgdel último desafío, la xcoordenada sería 250 y la ycoordenada sería 50.

Un SVG recttiene cuatro atributos. Allí están las xcoordenadas yde dónde se coloca en el svgárea. También tiene un heighty widthpara especificar el tamaño.

Agregue una rectforma al svguso append()y asígnele un widthatributo de 25y un heightatributo de 100. Además, asigne los atributos rect xy ycada conjunto a 0.
Ejercicio
Su documento debe tener 1 rectelemento.
El rect elemento debe tener un width atributo establecido en 25.
El rect elemento debe tener un height atributo establecido en 100.
El rect elemento debe tener un x atributo establecido en 0.
El rect elemento debe tener un y atributo establecido en 0.*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; const w = 500; const h
    = 100; const svg = d3.select("body") .append("svg") .attr("width", w)
    .attr("height", h) // Add your code below this line .append("rect")
    .attr("width", 25) .attr("height", 100) .attr("x",0) .attr("y", 0); // Add
    your code above this line
  </script>
</body>;
