---
title: "Limpiar datos desordenados"
description: "Detectar inconsistencias antes de limpiar una tabla y verificar filas y suma."
weight: 90
exercise: 9
group: "Excel y PDF"
kicker: "Excel y PDF · 15 min"
---

{{< objective >}}encontrar duplicados, vacíos e inconsistencias; comprobar el resultado de la limpieza.{{< /objective >}}

{{< step number="1" title="Preparen la tabla original" >}}
Abra [02 · Datos desordenados (Excel)](/recursos/ia-logistica-comercio-internacional/fundamentos/ejercicios/02_datos_desordenados.xlsx). Cuente las filas con datos. Copie la tabla en el chat o cargue el archivo.
{{< /step >}}

{{< step number="2" title="Pidan un diagnóstico antes de cambiar datos" >}}
Primero soliciten que identifique problemas sin modificar la tabla:

{{< prompt >}}
Te paso una tabla de embarques copiada de varias personas. Antes de arreglar nada, dime qué problemas encuentras: fechas, nombres de clientes, puertos, contenedores, valores, estados, filas repetidas o vacías. Hazme una lista corta.
{{< /prompt >}}
{{< /step >}}

{{< step number="3" title="Pidan una versión normalizada" >}}
Después del diagnóstico, soliciten la tabla limpia con reglas explícitas:

{{< prompt >}}
Ahora devuélveme la tabla limpia con estas reglas: fechas en formato día/mes/año; cada cliente con un solo nombre correcto, con tildes y con "S.A.S." o "Ltda." igual en todas las filas; puerto de origen solo con el nombre de la ciudad; contenedor solo con el número (20 o 40); valor solo como número en USD, sin símbolos; estado con la primera letra en mayúscula; sin filas repetidas ni filas vacías. Al final dime cuántas filas quedaron y cuánto suman los valores.
{{< /prompt >}}
{{< /step >}}

{{< step number="4" title="Comprueben que no falten registros" >}}
Compare el conteo de filas y la suma con la hoja original; una IA puede omitir o repetir filas.
{{< /step >}}

{{< reflection title="Registro de control" >}}
¿Qué inconsistencia encontró? ¿Coincidieron el número de filas y la suma antes y después de limpiar?
{{< /reflection >}}
