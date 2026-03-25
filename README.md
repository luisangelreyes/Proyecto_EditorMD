# Proyecto_EditorMD
Basado en el libro de Denys Vuika: Electron Projects. Su servidor pondrá en practica su inadecuado ingles para hacer un editor basico Markdown. Tome asiento y disfrute como un intento de estudiante logra programar mientras aprende a usar bien GitHub. 

# SuperEditor-MD v1.0.0

Proyecto hecho en Electron de un versátil y chiclebomba Editor Markdown. 

Esta es una aplicación de escritorio ligera y rápida diseñada para escribir, previsualizar y guardar documentos en formato Markdown (`.md`) directamente en tu sistema local, utilizando tecnologías web modernas.

 Características Principales

* **Edición y Vista Previa:** Integración con `SimpleMDE` para escribir con formato de texto enriquecido y ver los resultados en tiempo real.
* **Gestión de Archivos Local:** Abre (`Ctrl+O`) y guarda (`Ctrl+S`) archivos en tu disco duro utilizando los cuadros de diálogo nativos de Windows.
* **Drag & Drop:** Soporte completo para arrastrar y soltar archivos `.md` directamente a la ventana de la aplicación para abrirlos al instante.
* **Menús Nativos y Atajos:** Menú de aplicación personalizado y atajos de teclado globales.
* **Actualizaciones Automáticas:** Integrado con GitHub Releases para descargar e instalar nuevas versiones en segundo plano.


## Instalación y Uso Local

Para clonar y ejecutar este proyecto en tu computadora, necesitarás tener [Git](https://git-scm.com) y [Node.js](https://nodejs.org/en/download/) instalados.

Desde tu línea de comandos:

```bash
# 1. Clonar este repositorio
git clone [https://github.com/luisangelreyes/Proyecto_EditorMD.git](https://github.com/luisangelreyes/Proyecto_EditorMD.git)

# 2. Entrar al directorio del proyecto
cd Proyecto_EditorMD

# 3. Instalar las dependencias
npm install

# 4. Ejecutar la aplicación en modo desarrollo (con herramientas de depuración)
npm start
