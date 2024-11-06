/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';

// Function to create the React context
function createContextComponent(name, destinationPath) {
 // eslint-disable react/prop-types //
  const context = `
import { createContext } from 'react';

const ${name}State = createContext();

function ${name}Provider({ children }) {
  return (
    <${name}State.Provider value={{}}>
      {children}
    </${name}State.Provider>
  );
}

export { ${name}State, ${name}Provider };
`;

  // Create the folder if it doesn't exist
  if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath, { recursive: true });
  }

  // Create the `index.jsx` file at the provided path
  fs.writeFile(path.join(destinationPath, `${name}Context.jsx`), context, (err) => {
    if (err) {
      console.error('Error creating context:', err);
    } else {
      console.log(`Context ${name} successfully created at ${destinationPath}!`);
    }
  });
}

// Get the context name and path from the command line arguments
const nameContext = process.argv[2]; // First argument: context name
const destinationPath = process.argv[3] || './src/contexts'; // Second argument: destination path (default is './src/contexts')

if (nameContext) {
  createContextComponent(nameContext, destinationPath);
} else {
  console.log('Please provide a context name.');
}