//Más información sobre SVG en D3
/* SVG significa Gráficos vectoriales escalables .

Aquí "escalable" significa que, si acerca o aleja un objeto, no aparecerá pixelado. Se escala con el sistema de visualización, ya sea en una pequeña pantalla móvil o en un monitor de TV grande.

SVG se usa para hacer formas geométricas comunes. Dado que D3 asigna datos a una representación visual, utiliza SVG para crear las formas para la visualización. Las formas SVG para una página web deben ir dentro de una svgetiqueta HTML.

CSS puede ser escalable cuando los estilos usan unidades relativas (como vh, vwo porcentajes), pero usar SVG es más flexible para crear visualizaciones de datos.

Agregue un svgnodo al bodyusing append(). Asigne un widthconjunto de atributos a la wconstante proporcionada y un heightconjunto de atributos a la hconstante proporcionada utilizando los métodos attr()o style()para cada uno. Lo verá en la salida porque se background-colorle ha aplicado un rosa en la styleetiqueta.

Nota: Cuando se usan attr()atributos de ancho y alto, no tienen unidades. Este es el bloque de construcción de la escala: el elemento siempre tendrá una relación de ancho a alto de 5: 1, sin importar cuál sea el nivel de zoom.

Ejercicios
Su documento debe tener 1 svg elemento.
El svg elemento debe tener un width atributo establecido 500 o diseñado para tener un ancho de 500 px.
El svg elemento debe tener un height atributo establecido 100 o diseñado para tener una altura de 100 px.
*/
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line

                  .append("svg")
                  .attr("width",w)
                  .attr("height",h);



                  // Add your code above this line
  </script>
</body>