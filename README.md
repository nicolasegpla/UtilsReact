<h1>Utils to Improve the Workflow in Our React Projects</h1>

<h2>createComponent.js</h2>

<span> Paso 1: Configura el Archivo del Script </span>
<p>Crea un archivo en la raíz de tu proyecto, por ejemplo, createComponent.js.
Copia y pega el código proporcionado en este archivo. </p>


>[!TIP]
<span>Paso 2: Modifica el package.json</span>
<p>Para ejecutar el script desde la línea de comandos de forma más fácil, agrega un nuevo script en tu archivo package.json.</p>

"scripts": {
  "create-component": "node createComponent.js"
}

<span>Paso 3: Ejecuta el Script</span>
<p>Para crear un nuevo componente, ejecuta el siguiente comando en la terminal:</p>

npm run create-component -- <NombreComponente> <rutaDestino>

>[!IMPORTANT]
<span>Parámetros:</span>
<p>Nombre del Componente: El nombre del componente a crear.
Ruta Destino: La ruta donde se guardará el componente.</p>

>[!TIP]
<span>Ejemplo:</span> 
npm run create-component -- Button ./src/components/Button

<p>Este comando creará un componente llamado Button en la carpeta src/components/Button y también un archivo Button.scss en la misma carpeta.</p>

