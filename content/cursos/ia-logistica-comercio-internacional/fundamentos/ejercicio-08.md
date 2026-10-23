---
title: "Fórmulas en Excel"
description: "Pedir fórmulas paso a paso y comprobar que calculen los valores esperados."
weight: 80
exercise: 8
group: "Excel y PDF"
kicker: "Excel y PDF · 20 min"
---

{{< objective >}}pedir fórmulas en español, aplicarlas y comprobarlas.{{< /objective >}}

{{< step number="1" title="Descarguen y preparen el archivo" >}}
Abra [01 · Fletes y embarques (Excel)](/recursos/ia-logistica-comercio-internacional/fundamentos/ejercicios/01_fletes_y_embarques.xlsx). Las celdas amarillas son las que completa. Para cada tarea, copie la fórmula recibida en la celda indicada y arrástrela cuando corresponda.
{{< /step >}}

{{< step number="2" title="Calculen el total por embarque" >}}
En la hoja Embarques, pidan fórmula para K2 (H = Flete USD, I = Seguro USD, J = Otros gastos USD):

{{< prompt >}}
Tengo una hoja de Excel en español. En la hoja Embarques, las columnas son: H = Flete USD, I = Seguro USD, J = Otros gastos USD. Dame la fórmula para la celda K2 que sume las tres, con nombres de funciones en español.
{{< /prompt >}}
{{< /step >}}

{{< step number="3" title="Busquen la tarifa de lista" optional="true" >}}
Pidan una búsqueda que coincida con origen, destino y tipo de contenedor:

{{< prompt >}}
En la hoja Embarques, en la celda N2 quiero la tarifa de lista. La hoja Tarifas tiene: A = Origen, B = Destino, C = Contenedor, D = Tarifa de lista USD (filas 2 a 15). En la hoja Embarques: D = Origen, E = Destino, G = Contenedor. Dame una fórmula con funciones en español que busque la tarifa que coincida con los tres datos.
{{< /prompt >}}
{{< /step >}}

{{< step number="4" title="Marquen los retrasos" optional="true" >}}
Pidan una fórmula que señale cuándo hace falta revisar un embarque:

{{< prompt >}}
En la hoja Embarques, la columna M tiene los días de retraso. Dame la fórmula para la celda O2 que diga "REVISAR" si hay más de 3 días de retraso y "OK" si no. Funciones en español.
{{< /prompt >}}
{{< /step >}}

{{< step number="5" title="Resuman los datos por cliente" optional="true" >}}
Pidan las fórmulas de suma y conteo para la hoja Resumen:

{{< prompt >}}
En la hoja Resumen, la columna A tiene el nombre de cada cliente (A2 a A7). En la hoja Embarques, la columna C tiene el cliente y la H el flete (filas 2 a 31). Dame la fórmula para B2 que sume el flete de ese cliente y la de C2 que cuente cuántos embarques tiene.
{{< /prompt >}}
{{< /step >}}

{{< step number="6" title="Apliquen y comprueben las fórmulas" >}}
Si no entiende una fórmula, puede pedir:

{{< prompt >}}
Explícame paso a paso qué hace esta fórmula, como si yo nunca hubiera usado Excel: [pegue la fórmula]
{{< /prompt >}}

Si Excel muestra un error, comparta el mensaje y la fórmula:

{{< prompt >}}
Excel me muestra este error: [mensaje]. Esta es mi fórmula: [fórmula]. Mis datos están en [descripción]. ¿Qué está mal y cómo se arregla?
{{< /prompt >}}

Si Excel marca error de sintaxis, pruebe cambiar punto y coma por comas o viceversa, según la configuración regional. Verifique manualmente el total de la fila 2; el total de la hoja Resumen debe coincidir con la suma de la columna H.
{{< /step >}}

{{< help >}}
- Compruebe que usa la hoja y las columnas indicadas; revise si su Excel separa argumentos con punto y coma o con comas.
- Pruebe la fórmula en una fila y compare el resultado con una suma manual antes de arrastrarla.
- Si aparece un error, copie el mensaje y la fórmula para pedir una explicación; verifique el ajuste en Excel.
{{< /help >}}

{{< check question="La IA propone una fórmula y el total no coincide con Excel. ¿Qué conviene hacer?" options="Confiar en la respuesta de la IA|Revisar las celdas y comprobar el cálculo en Excel|Copiar el total y continuar" answer="1" feedback="Compruebe las celdas y el cálculo en Excel. Una fórmula sugerida debe probarse con los datos reales." >}}

{{< reflection title="Comprobación de Excel" >}}
¿Qué fórmula necesitó más ajuste? ¿Coincidió el total de la hoja Resumen con la suma de la columna H?
{{< /reflection >}}
