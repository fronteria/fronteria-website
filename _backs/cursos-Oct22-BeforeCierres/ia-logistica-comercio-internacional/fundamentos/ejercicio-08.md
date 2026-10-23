---
title: "Fórmulas en Excel"
description: "Pedir fórmulas paso a paso y comprobar que calculen los valores esperados."
weight: 80
exercise: 8
group: "Excel y PDF"
kicker: "Excel y PDF · 20 min"
---

**Objetivo:** pedir fórmulas en español, aplicarlas y comprobarlas.

Abra [01_Fletes_y_Embarques.xlsx](/recursos/ia-logistica-comercio-internacional/fundamentos/ejercicios/01_fletes_y_embarques.xlsx). Las celdas amarillas son las que completa. Para cada tarea, copie la fórmula recibida en la celda indicada y arrástrela cuando corresponda.

### Total por embarque (K2, hoja Embarques)

{{< prompt >}}
Tengo una hoja de Excel en español. En la hoja Embarques, las columnas son: H = Flete USD, I = Seguro USD, J = Otros gastos USD. Dame la fórmula para la celda K2 que sume las tres, con nombres de funciones en español.
{{< /prompt >}}

### Tarifa de lista (N2)

{{< prompt >}}
En la hoja Embarques, en la celda N2 quiero la tarifa de lista. La hoja Tarifas tiene: A = Origen, B = Destino, C = Contenedor, D = Tarifa de lista USD (filas 2 a 15). En la hoja Embarques: D = Origen, E = Destino, G = Contenedor. Dame una fórmula con funciones en español que busque la tarifa que coincida con los tres datos.
{{< /prompt >}}

### Alerta de retraso (O2)

{{< prompt >}}
En la hoja Embarques, la columna M tiene los días de retraso. Dame la fórmula para la celda O2 que diga "REVISAR" si hay más de 3 días de retraso y "OK" si no. Funciones en español.
{{< /prompt >}}

### Totales por cliente (B2 y C2, hoja Resumen)

{{< prompt >}}
En la hoja Resumen, la columna A tiene el nombre de cada cliente (A2 a A7). En la hoja Embarques, la columna C tiene el cliente y la H el flete (filas 2 a 31). Dame la fórmula para B2 que sume el flete de ese cliente y la de C2 que cuente cuántos embarques tiene.
{{< /prompt >}}

Si no entiende una fórmula, puede pedir:

{{< prompt >}}
Explícame paso a paso qué hace esta fórmula, como si yo nunca hubiera usado Excel: [pegue la fórmula]
{{< /prompt >}}

Si Excel muestra un error, comparta el mensaje y la fórmula:

{{< prompt >}}
Excel me muestra este error: [mensaje]. Esta es mi fórmula: [fórmula]. Mis datos están en [descripción]. ¿Qué está mal y cómo se arregla?
{{< /prompt >}}

Si Excel marca error de sintaxis, pruebe cambiar punto y coma por comas o viceversa, según la configuración regional. Verifique manualmente el total de la fila 2; el total de la hoja Resumen debe coincidir con la suma de la columna H.
