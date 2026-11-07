---
title: "Mi primer cuaderno en Gemini"
description: "Crear un cuaderno en Gemini y consultar un documento PDF de logística."
weight: 130
exercise: 13
group: "Práctica final"
kicker: "Práctica con Gemini · 15–20 min"
---

{{< objective >}}crear un cuaderno en Gemini, agregar un PDF y usarlo para consultar información, extraer datos y redactar un correo.{{< /objective >}}

**Duración:** 15–20 minutos. **Objetivo:** crear un cuaderno en Gemini, agregar un PDF y usarlo para consultar información, extraer datos y redactar un correo.

{{< step number="1" title="Conozcan qué es un cuaderno" >}}
Imagina una carpeta donde guardas los documentos importantes de un embarque. Un cuaderno de Gemini es como una carpeta inteligente: puedes agregar documentos y hacer preguntas sobre ellos, sin tener que explicar nuevamente todo el contexto.
{{< /step >}}

{{< step number="2" title="Creen un cuaderno en Gemini" >}}
1. Abre [Google Gemini](https://gemini.google.com/).
2. En la barra lateral, busca **Cuadernos**.
3. Selecciona **Nuevo cuaderno**.
4. Ponle el nombre **Importación de repuestos para camiones** y ábrelo.

Esta actividad usa los cuadernos integrados en Gemini. No necesitas abrir NotebookLM ni contratar una suscripción.
{{< /step >}}

{{< step number="3" title="Descarguen y agreguen el PDF" >}}
Descarga la [Ficha técnica de repuesto (PDF)](/recursos/ia-logistica-comercio-internacional/fundamentos/ejercicios/09_ficha_tecnica_repuesto.pdf). Es un ejemplo ficticio de un filtro de aceite para camiones, modelo **GFT-8940-HD**.

En el cuaderno, selecciona la opción para agregar fuentes y sube el PDF. Confirma que el documento aparece entre las fuentes del cuaderno antes de continuar.

No subas documentos confidenciales de tu empresa, clientes o proveedores sin autorización.
{{< /step >}}

{{< step number="4" title="Conversen con el documento" >}}
Prueba cada solicitud en el cuaderno. Los botones permiten copiar los prompts:

**A. Extraer información**

{{< prompt >}}
Según el documento que he subido, identifica el nombre del producto, su número de parte, fabricante y dimensiones. Presenta los resultados en una tabla. Utiliza únicamente la información del PDF.
{{< /prompt >}}

**B. Preparar una descripción aduanera**

{{< prompt >}}
Redacta una descripción técnica y comercial de este producto para ayudarme a preparar una consulta de clasificación arancelaria en Ecuador. Utiliza únicamente los datos del documento y señala la información que falte. No asignes una subpartida arancelaria definitiva.
{{< /prompt >}}

**C. Redactar un correo**

{{< prompt >}}
Redacta un correo breve y profesional dirigido a un agente de aduanas, incluyendo las características principales del producto, para solicitar la revisión de su ficha técnica antes de preparar los documentos de transporte.
{{< /prompt >}}

**D. Identificar información faltante**

{{< prompt >}}
¿Cuál es el precio de venta en dólares de este filtro? Responde utilizando únicamente el documento. Si no aparece el precio, indícalo claramente.
{{< /prompt >}}
{{< /step >}}

{{< step number="5" title="Verifiquen las respuestas con el PDF" >}}
Compara la respuesta de la actividad A con el documento original. Estos son los datos esperados:

| Dato | Valor |
|---|---|
| Número de parte | GFT-8940-HD |
| Diámetro exterior | 118 mm |
| Altura | 248 mm |
| Rosca | M36 × 1.5 |
| Fabricante | Global Filtration Technologies Corp. |

La IA puede cometer errores, aunque su respuesta parezca segura. Comprueba los datos importantes directamente en el PDF. Para la actividad D, el documento no indica un precio de venta.
{{< /step >}}

{{< step number="6" title="Comprueben lo aprendido" >}}
- [ ] Creé mi primer cuaderno en Gemini.
- [ ] Agregué un documento PDF.
- [ ] Extraje información técnica del documento.
- [ ] Redacté un correo utilizando la información del PDF.
- [ ] Comprobé cómo responde Gemini cuando falta información.

¡Excelente! Ahora sabes cómo utilizar un cuaderno de Gemini para organizar documentos y trabajar con su información.
{{< /step >}}
