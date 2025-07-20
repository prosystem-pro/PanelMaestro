const fs = require('fs');
const path = require('path');
const vm = require('vm');
const axios = require('axios');

// Rutas corregidas
const envPath = path.resolve(__dirname, '../Entornos/Entorno.prod.ts');
const code = fs.readFileSync(envPath, 'utf8');
const sanitized = code.replace('export const Entorno =', 'const Entorno =');
const script = new vm.Script(sanitized + '\nEntorno');
const context = {};
const Entorno = script.runInNewContext(context);

const apiUrl = Entorno.ApiUrlGenerarModeloDulceTentacion;
const modelsDirectory = path.resolve(__dirname, '../Modelos/ModeloDulceTentacion/');

if (!fs.existsSync(modelsDirectory)) {
  fs.mkdirSync(modelsDirectory, { recursive: true });
}

function hacerPropiedadesOpcionales(modelInterface) {
  return modelInterface.replace(/(\s+)(\w+):/g, '$1$2?:');
}

axios.get(apiUrl)
  .then(response => {
    const modelsJson = response.data;

    Object.entries(modelsJson).forEach(([modelName, modelInterface]) => {
      const interfaceOpcional = hacerPropiedadesOpcionales(modelInterface);
      const filePath = path.join(modelsDirectory, `${modelName}.ts`);
      fs.writeFileSync(filePath, interfaceOpcional, 'utf8');
      console.log(`Modelo ${modelName} generado en: ${filePath}`);
    });
  })
  .catch(error => {
    console.error('Error al obtener el JSON del backend:', error);
  });
