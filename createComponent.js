/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';


// Función para crear el componente
function createComponent(nombre, rutaDestino) {
const componente = `
import './${nombre.toLowerCase()}.scss'

function ${nombre}() {
    return (
        <>
        </>
    )
}

export default ${nombre}
`;

  // Crear la carpeta si no existe
  if (!fs.existsSync(rutaDestino)) {
    fs.mkdirSync(rutaDestino, { recursive: true });
  }

  // Crear el archivo `index.jsx` en la ruta proporcionada
  fs.writeFile(path.join(rutaDestino, 'index.jsx'), componente, (err) => {
    if (err) {
      console.error('Error al crear el componente:', err);
    } else {
      console.log(`Componente ${nombre} creado exitosamente en ${rutaDestino}!`);
    }
  });

  // Crear el archivo de estilos .scss en la ruta proporcionada
  fs.writeFile(path.join(rutaDestino, `${nombre.toLowerCase()}.scss`), '', (err) => {
    if (err) {
      console.error('Error al crear el archivo .scss:', err);
    } else {
      console.log(`Archivo ${nombre.toLowerCase()}.scss creado exitosamente en ${rutaDestino}!`);
    }
  });
}

// Obtener el nombre del componente y la ruta desde los argumentos de la línea de comandos
const nombreComponente = process.argv[2]; // Primer argumento: nombre del componente
const rutaDestino = process.argv[3] || './src/components'; // Segundo argumento: ruta destino (por defecto es './src/components')

if (nombreComponente) {
  createComponent(nombreComponente, rutaDestino);
} else {
  console.log('Por favor, proporciona un nombre de componente.');
}
