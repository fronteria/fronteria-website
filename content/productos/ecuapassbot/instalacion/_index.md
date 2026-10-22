---
title: "EcuapassBot v8 - Instalación"
description: "Guía paso a paso para instalar EcuapassBot"
hideTitle: true  # We'll control this in the template to avoid triple titles
featured_image: "/images/c3po-face.png"
---
<div class="installation-layout">
<div class="installation-steps">

### Paso 1: Descargar   
Descarga el instalador [EcuapassBot-Instalador-v8.exe](https://github.com/lgsof/EcuapassBot8-win/releases/download/v8.1.5/EcuapassBot-Instalador-v8.1.3.exe) 

### Paso 2: Abrir (ejecutar) el instalador
Ve a descargas y abre (ejecuta) el archivo descargado ("EcuapassBot-instalador-v8.1.X.exe")

### Paso 3: Autorizar Instalación
Si aparece el mensaje *"Windows protegió su PC"*:
Haz clic en 👉 *Más información* y luego en *Ejecutar de todas formas*

### Paso 4: Instalación de Archivos
Sigue los pasos del instalador y espera que cargue todo.

### Paso 5: Llenar Datos Empresa: 
Se abrirá la ventana de *Datos de la empresa*. Llena así:
* **Tipo de Documentos:** Aplicación usada para realizar los documentos: `CODEBINI`, `BOTEROSOTO`, etc. Si no aparece, entonces agendar instalación por Whatsapp)
* **Nombre corto empresa:** Nombre simple que represanta a la empresa, sin espacios, ni guiones. (Si usas CODEBINI, es el nombre XXXX usado en el sitio web: https://XXXX.corebd.net).  
* **Nombre Completo:** El nombre completo debe aparecer hacieno Clic en el botón *Buscar*. Si no aparece, el nombre corto está errado.
* **Permiso Originario:** Número de permiso que corresponda a la empresa (ej. `PO-EC-1234-56`, `PO-CO-0123-98`, etc.) 

### Paso 6: Crear Empresa: 
Clic en *Crear*, esperar unos segundos, luego en *Ejecutar*

## 🌐 ¿Prefieres acceso WEB (sin buscar PDF)?
Ve a *Datos web*, escribe tu usuario y clave del CODEBINI.
También puedes hacerlo luego desde el botón ⚙️ *Config*.

[Contactenos](/contacto/) para aprender más o solicitar un demo!
</div>

<div class="video-container">
    <div class="video-wrapper">
        <h3>Video Instalación de EcupassBot</h3>
        <video controls>
            <source src="/recursos/videos/video-EcuapassBot-Guia-Instalacion-Oct2026.mp4" type="video/mp4"> 
            Su navegador no soporta este tipo de contenido.
        </video>
    </div>
</div>
</div>

<style>
	.installation-layout {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(400px, 1fr);
		gap: 2rem;
		align-items: start;
	}
	.installation-steps { min-width: 0; }
	.video-container {
		display: flex;
		justify-content: center;
		min-width: 0;
	}
	.video-wrapper {
		text-align: center;
		width: 100%;
		max-width: 640px; /* Maximum width */
	}
	.video-wrapper h3 {
		margin-bottom: 5px;
	}
	video {
		width: 100%; /* Make it responsive */
		height: auto; /* Maintain aspect ratio */
	}
	@media (max-width: 800px) {
		.installation-layout { grid-template-columns: 1fr; }
	}
</style>

