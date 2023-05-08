//Trabajar con datos dinámicos en D3
/* Los dos últimos desafíos cubren los aspectos básicos de la visualización dinámica de datos con D3 utilizando los métodos data()y enter(). Estos métodos toman un conjunto de datos y, junto con el append()método, crean un nuevo elemento DOM para cada entrada en el conjunto de datos.

En el desafío anterior, creó un nuevo h2elemento para cada elemento de la datasetmatriz, pero todos contenían el mismo texto, New Title. Esto se debe a que no ha hecho uso de los datos que están vinculados a cada uno de los h2elementos.

El método D3 text()puede tomar una cadena o una función de devolución de llamada como argumento:

selection.text((d) => d)
En el ejemplo anterior, el parámetro dhace referencia a una sola entrada en el conjunto de datos al que está vinculada una selección.

Usando el ejemplo actual como contexto, el primer h2elemento está vinculado a 12, el segundo h2elemento está vinculado a 31, el tercer h2elemento está vinculado a 22, y así sucesivamente.

Cambie el text()método para que cada h2 elemento muestre el valor correspondiente de la datasetmatriz con un solo espacio y la cadena USD. Por ejemplo, el primer encabezado debe ser 12 USD.

Ejercicio
El primero h2debe tener el texto 12 USD.
El segundo h2 debe tener el texto 31 USD.
El tercero h2 debe tener el texto 22 USD.
El cuarto h2 debe tener el texto 17 USD.
El quinto h2 debe tener el texto 25 USD.
El sexto h2 debe tener el texto 18 USD.
El séptimo h2 debe tener el texto 29 USD.
El octavo h2 debe tener el texto 14 USD.
El noveno h2 debe tener el texto 9 USD.
*/

<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    d3.select("body").selectAll("h2") .data(dataset) .enter() .append("h2")
    .text((d) => d + ' USD');
  </script>
</body>;
