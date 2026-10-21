---
title: "De PDF a Excel y verificación"
description: "Extraer tablas de documentos PDF y contrastar cantidades y totales."
weight: 100
exercise: 10
group: "Excel y PDF"
kicker: "Excel y PDF · 15 min"
---

**Objetivo:** extraer datos de una factura y un packing list, y comprobarlos antes de pasarlos a Excel.

Abra [06_Factura_Comercial.pdf](/recursos/ia-logistica-comercio-internacional/fundamentos/ejercicios/06_factura_comercial.pdf) y [07_Packing_List.pdf](/recursos/ia-logistica-comercio-internacional/fundamentos/ejercicios/07_packing_list.pdf), luego envíe:

{{< prompt >}}
Te paso una factura comercial y un packing list en PDF. Extrae los datos en dos tablas. Tabla 1 (factura): ítem, descripción, cantidad, precio unitario USD, total USD, y debajo el total de la factura. Tabla 2 (packing list): ítem, descripción, cantidad, bultos, peso neto kg, peso bruto kg, volumen m3, y debajo los totales. Después compara las cantidades de la factura con las del packing list y dime si coinciden. No inventes datos: si algo no está en el documento, escribe "no aparece".
{{< /prompt >}}

Copie las tablas a Excel. Multiplique a mano una línea y compare los totales. Los valores de control son: factura FOB **USD 21.790** y packing list **440 unidades, 245 cajas, 4.360 kg netos, 4.690 kg brutos y 50,20 m³**. Las partidas arancelarias siempre se verifican en el arancel vigente.
