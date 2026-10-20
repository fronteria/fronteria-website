# FRONTERIA-CURSOS-SPEC.md

**Proyecto:** FronterIA Cursos  
**Versión de especificación:** 1.0 — 2026-10-20  
**Estado:** Lista para implementación inicial por Codex; revisar y aprobar antes del despliegue.

## 1. Objetivo y alcance

Construir `https://cursos.fronteria.co` como portal público de apoyo a capacitaciones **presenciales para empresas** ofrecidas por FronterIA Software. No es un LMS ni un curso autónomo en esta versión. El portal presenta la oferta y sirve para consultar instrucciones, copiar prompts y descargar materiales durante y después del taller.

**Primer programa:** IA aplicada al trabajo de oficina en Logística y Comercio Internacional.  
**Niveles planificados:** Fundamentos (único disponible), Intermedio y Avanzado (futuros; no inventar temarios).  
**Curso inicial:** Fundamentos, que integra los niveles introductorio y básico, utilizando el programa **INTRO existente de 4 horas** como primera edición. No afirmar que cubre contenidos adicionales que todavía no están desarrollados.  
**Acceso:** público, sin autenticación ni inscripción obligatoria.  
**Idioma inicial:** español.  
**Público:** asistentes y personal administrativo no técnico de logística y comercio internacional.

### Fuera de alcance (v1)

Usuarios, login, pagos, progreso, exámenes automatizados, emisión de certificados, base de datos, backend Django/Railway, publicación de soluciones del instructor, contenidos ficticios para cursos futuros.

## 2. Repositorios y aislamiento

- **Fuente corporativa (referencia visual):** https://github.com/softwareinteligente/fronteria-website
- **Sitio corporativo publicado (no modificar):** https://fronteria.co y https://www.fronteria.co
- **Repositorio de publicación corporativa existente (no modificar):** https://github.com/softwareinteligente/softwareinteligente.github.io
- **Nuevo repositorio sugerido:** `softwareinteligente/fronteria-cursos`
- **Dominio nuevo:** `cursos.fronteria.co`

El portal de cursos tendrá **su propio proyecto Hugo, repositorio y despliegue**. No modificar archivos del repositorio corporativo ni configurar automáticamente su DNS. Preparar instrucciones para añadir más adelante un enlace «Cursos» al menú corporativo, pero no aplicarlo sin aprobación.

Codex debe **inspeccionar realmente** el repositorio fuente corporativo (tema, logos, colores, tipografías, menús y assets), documentar qué recursos puede reutilizar legítimamente y construir una interfaz coherente. No asumir valores de color, fuentes ni estructura interna antes de la inspección. Evitar acoplar el nuevo proyecto a rutas absolutas del repositorio corporativo.

## 3. Diseño de información y rutas

Rutas canónicas sugeridas, compatibles con `baseURL` y `relativeURLs` de Hugo:

```text
/
/cursos/
/cursos/ia-logistica-comercio-internacional/
/cursos/ia-logistica-comercio-internacional/fundamentos/
/cursos/ia-logistica-comercio-internacional/fundamentos/preparacion/
/cursos/ia-logistica-comercio-internacional/fundamentos/como-pedir-bien/
/cursos/ia-logistica-comercio-internacional/fundamentos/correos/
/cursos/ia-logistica-comercio-internacional/fundamentos/documentos/
/cursos/ia-logistica-comercio-internacional/fundamentos/excel-y-pdf/
/cursos/ia-logistica-comercio-internacional/fundamentos/verificacion-y-practica/
/cursos/ia-logistica-comercio-internacional/fundamentos/recursos/
```

Las agrupaciones web son una **adaptación de navegación**, no una reescritura del cronograma. Mostrar un índice de ejercicios individuales 0–11 en sus grupos. Los cursos Intermedio y Avanzado podrán figurar como «Próximamente», sin enlaces a lecciones vacías ni descripciones inventadas.

### Página inicial

Marca FronterIA; presentación breve de capacitaciones presenciales para empresas; programa disponible; niveles; llamada a solicitar capacitación usando el **canal real de contacto corporativo** identificado en el repositorio (no inventar teléfono, correo ni WhatsApp). Enlace al sitio principal.

### Página de programa

Presentar los tres niveles, el estado de disponibilidad y el nivel Fundamentos como acceso al material existente. Evitar presentar los tres niveles como tres cursos ya impartidos.

### Página de Fundamentos

Ficha: duración **4 h incluidas dos pausas**, modalidad presencial, público administrativo sin experiencia técnica, metodología **20 % explicación / 80 % práctica**, 12 ejercicios (0–11), herramienta de IA gratuita (en el material se propone Claude; prompts utilizables con ChatGPT, Gemini o Copilot, sujetos a disponibilidad y límites). Mostrar objetivos fieles a la ficha y recursos.

### Páginas de lección

Título, objetivo (solo si está sustentado en el material), instrucciones, prompts copiable(s), archivos asociados, advertencias de verificación y botones «Anterior / Siguiente». Menú lateral o índice persistente en escritorio; menú accesible en móvil. No exigir que un visitante siga una secuencia obligatoria.

## 4. Material de origen y trazabilidad

**Entrada:** `Curso-IA-LogixComex-Intro-Claude.zip` (archivo entregado por el usuario). No suponer que Codex puede acceder automáticamente al adjunto de ChatGPT: el usuario deberá copiarlo al entorno de trabajo o a una carpeta local de importación. No subir el ZIP completo a un repositorio público porque contiene claves del instructor.

**Inventario verificado (11 archivos útiles):**

| Archivo de origen (nombre descriptivo) | Uso v1 | Publicación |
|---|---|---|
| `00_CursoIA-LogixComex…INTRO-FichaGeneral.pdf` | Fuente de ficha y cronograma | Revisar: es material operativo del instructor; no publicar por defecto |
| `00_CursoIA-LogixComex…INTRO-CuadernoParticipante.pdf` | Fuente principal de las lecciones y PDF de consulta | Público |
| `01_Fletes_y_Embarques.xlsx` | Ejercicios de Excel | Público |
| `02_Datos_Desordenados.xlsx` | Ejercicios de limpieza | Público |
| `03_Cadena_de_Correos.docx` | Ejercicio de correos | Público |
| `04_Carta_con_errores.docx` | Ejercicio de revisión | Público |
| `05_Contrato_Servicios.docx` | Ejercicio de resumen/revisión | Público |
| `06_Factura_Comercial.pdf` | Extracción de PDF | Público |
| `07_Packing_List.pdf` | Extracción de PDF | Público |
| `CLAVE_instructor_01_Fletes_y_Embarques.xlsx` | Soluciones | **Nunca público** |
| `CLAVE_instructor_02_Datos_Limpios.xlsx` | Soluciones | **Nunca público** |

Excluir archivos `.~lock.*`. Conservar originales descargables sin modificarlos; si se renombran para URL, preservar un manifiesto origen → destino. No agregar datos sensibles reales. Verificar que los archivos de práctica son ficticios antes de publicar.

**Nota:** el programa describe siete archivos de práctica (los siete numerados 01–07), además del cuaderno; las dos claves son privadas.

### Ejercicios verificados en el cuaderno

| Nº | Título de origen | Grupo de navegación |
|---:|---|---|
| 0 | Entrar y saludar | Correos y primeros pasos |
| 1 | Mal pedido contra buen pedido | Correos y primeros pasos |
| 2 | Cadena de correos | Correos |
| 3 | Seguimiento cordial y traducción | Correos |
| 4 | Cotización | Documentos |
| 5 | Revisar una carta | Documentos |
| 6 | Resumir un contrato | Documentos |
| 7 | Fórmulas en Excel | Excel y PDF |
| 8 | Limpiar datos desordenados | Excel y PDF |
| 9 | De PDF a Excel y verificación | Excel y PDF |
| 10 | Cazar el error | Verificación |
| 11 | Mi tarea real | Práctica final |

**Regla editorial crítica:** conservar las instrucciones y prompts originales, incluyendo marcadores editables entre corchetes, sin convertir ejemplos en hechos. El contenido web debe extraerse y adaptarse del cuaderno; el cronograma, objetivos y metodología se basan en la ficha. Si una lección no tiene material suficiente, mostrar la información existente y reportar la laguna en vez de inventarla.

## 5. Arquitectura Hugo

Preferir Hugo actual y plantillas propias simples para el portal (sin necesidad de copiar el tema Ananke entero). Priorizar Markdown y front matter; usar `shortcodes`/partials para componentes repetidos.

```text
fronteria-cursos/
├── hugo.toml
├── README.md
├── .gitignore
├── .github/workflows/deploy.yml
├── content/
│   ├── _index.md
│   └── cursos/
│       ├── _index.md
│       └── ia-logistica-comercio-internacional/
│           ├── _index.md
│           └── fundamentos/
│               ├── _index.md
│               ├── preparacion.md
│               ├── como-pedir-bien.md
│               ├── correos/
│               ├── documentos/
│               ├── excel-y-pdf/
│               ├── verificacion-y-practica/
│               └── recursos.md
├── layouts/
│   ├── _default/
│   ├── partials/
│   └── shortcodes/
│       ├── prompt.html
│       ├── ejercicio.html
│       ├── descarga.html
│       └── aviso.html
├── assets/
├── static/
│   └── recursos/ia-logistica-comercio-internacional/fundamentos/
│       ├── cuaderno/
│       └── ejercicios/
├── scripts/
│   └── verificar_publicacion.py
└── docs/
    ├── INVENTARIO.md
    ├── CONTENIDO-Y-TRAZABILIDAD.md
    └── DESPLIEGUE.md
```

Codex puede adaptar nombres de archivos a convenciones Hugo si preserva URLs y documenta cambios. Configurar `baseURL = 'https://cursos.fronteria.co/'`, `languageCode = 'es-co'` y menús. Evitar duplicar contenido manualmente entre índice, menús y lecciones: usar front matter, secciones y pesos.

### Componentes

- `prompt`: bloque de texto con botón «Copiar» (JS mínimo, accesible, con fallback cuando `navigator.clipboard` no esté disponible).
- `ejercicio`: número, título, pasos y enlaces relacionados.
- `descarga`: enlace real a un archivo existente; mostrar formato y nombre legible.
- `aviso`: recordatorios sobre confidencialidad, verificación humana y límites de la IA.

Permitir Markdown estándar dentro de las lecciones. No usar servicios externos innecesarios para renderizar el contenido.

## 6. Experiencia de usuario y accesibilidad

- Diseño responsive y consistente con la marca FronterIA, navegación clara para personal no técnico.
- Menú lateral en escritorio; índice colapsable accesible en móvil.
- Botones «Copiar prompt», «Descargar archivo», «Anterior», «Siguiente».
- Tipografía legible, contraste suficiente, foco visible, etiquetas descriptivas y uso completo por teclado.
- No publicar un índice de ejercicios sin enlaces operativos.
- Página de recursos con cuaderno PDF y los siete archivos de práctica.
- No depender de cuentas de IA ni de APIs para consultar el sitio.
- Aviso: no introducir datos confidenciales, verificar cifras y documentos, y considerar que funciones/límites de herramientas gratuitas pueden cambiar.

## 7. Seguridad y publicación

El repositorio de cursos y GitHub Pages son **públicos**. No incluir contraseñas, tokens, archivos `CLAVE_instructor_*`, documentos internos, datos reales de clientes ni fuentes administrativas. **No confiar en `.gitignore` como única barrera:** copiar al árbol público únicamente los archivos de una lista permitida y revisar `public/` antes de desplegar. Si un secreto llega a Git, retirarlo del historial según corresponda.

Proponer verificación automática previa al despliegue que:
1. falle si `public/` contiene nombres `CLAVE_instructor`, `.~lock`, archivos privados o el ZIP original;
2. verifique que los enlaces de descarga resuelven a archivos;
3. compruebe que están los ejercicios 0–11 y los siete archivos públicos de práctica;
4. confirme que el sitio Hugo construye sin errores;
5. reporte enlaces rotos cuando sea viable.

No usar Railway en v1.

## 8. Despliegue GitHub Pages

- Desplegar el proyecto independiente con **GitHub Actions** y el mecanismo oficial de GitHub Pages para artefactos estáticos.
- No escribir el build en el repositorio corporativo ni en `softwareinteligente.github.io`.
- Documentar la habilitación de GitHub Pages en el nuevo repositorio, permisos necesarios y cómo se publica cada `git push`.
- Configurar dominio personalizado `cursos.fronteria.co` en Pages y el DNS **CNAME** en el proveedor de DNS de `fronteria.co`, apuntando al hostname de Pages que corresponda al repositorio/cuenta. Verificar los valores en la documentación actual y la configuración real antes de aplicarlos; no tocar registros de `fronteria.co` ni `www`.
- Verificar HTTPS y redirección esperada una vez propagado DNS.
- No prometer disponibilidad del subdominio hasta realizar el cambio de DNS y verificarlo.

## 9. Plan de implementación para Codex

**Fase 0 — Inspección:** inspeccionar `fronteria-website`; registrar assets y estilo reutilizables. Leer el ZIP local; inventariar y extraer contenido de los dos PDF. Mostrar decisiones y bloqueos, no asumir archivos inexistentes.

**Fase 1 — Esqueleto funcional:** inicializar Hugo; home, catálogo, programa y Fundamentos; componentes, navegación y diseño responsive. Implementar con contenido real mínimo del cuaderno, no texto inventado.

**Fase 2 — Migración editorial:** convertir el cuaderno a lecciones Markdown conservando 12 ejercicios y prompts; colocar siete archivos de práctica y cuaderno PDF en descargas; vincularlos a las lecciones correspondientes; no publicar claves del instructor.

**Fase 3 — Calidad:** compilar; revisar responsive, navegación, accesibilidad, enlaces, copiar prompts, integridad del contenido y seguridad de publicación.

**Fase 4 — Entrega:** agregar workflow Pages, documentación DNS y README de mantenimiento. Preparar PR para revisión; no publicar el dominio ni modificar el sitio corporativo sin autorización.

## 10. Criterios de aceptación

- [ ] `hugo` genera un sitio funcional sin errores.
- [ ] Home y catálogo público; solo Fundamentos disponible.
- [ ] Identidad visual inspirada en el repositorio corporativo, sin alterarlo.
- [ ] Contenido fiel al cuaderno y ficha del curso de 4 h.
- [ ] Ejercicios **0–11** navegables, con sus prompts e instrucciones.
- [ ] PDF del cuaderno y **siete** archivos de práctica descargables.
- [ ] **Ninguna** solución del instructor ni archivo temporal accesible o versionado públicamente.
- [ ] Botones de copia y enlaces de descarga probados.
- [ ] Uso correcto en escritorio y móvil.
- [ ] README explica cómo editar Markdown, añadir recursos, agregar cursos y desplegar.
- [ ] GitHub Actions listo para desplegar en Pages; DNS documentado, no modificado automáticamente.

## 11. Instrucción inicial para Codex (copiar y pegar)

> Implementa el proyecto Hugo `fronteria-cursos` siguiendo íntegramente `FRONTERIA-CURSOS-SPEC.md`. Usa como referencia visual el repositorio `https://github.com/softwareinteligente/fronteria-website`, pero no lo modifiques. El material del primer curso se encuentra en el ZIP `Curso-IA-LogixComex-Intro-Claude.zip` que colocaré en tu entorno de trabajo. Primero inspecciona el repositorio corporativo y el ZIP; después crea el portal con el contenido real del curso Fundamentos. Conserva los ejercicios 0–11 y sus prompts, publica solo los siete archivos de práctica y el cuaderno, y excluye por completo las claves del instructor. Implementa componentes reutilizables, navegación responsive y despliegue por GitHub Actions a GitHub Pages. No cambies DNS ni publiques en el dominio hasta que revise el resultado. Entrega un resumen de archivos creados, comandos de prueba, decisiones técnicas y pasos pendientes de publicación.

## 12. Decisiones diferidas

- Aprobación del diseño visual concreto tras ver el primer prototipo.
- Datos de contacto comerciales y CTA, tomados del sitio corporativo.
- Integración del enlace «Cursos» en el sitio principal, en un cambio separado.
- Programa real de Intermedio y Avanzado.
- Fecha de lanzamiento y DNS definitivo.
