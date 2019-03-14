/* eslint-disable no-console, prefer-template */
const fs = require('fs');
const axios = require('axios');
const os = require('os');

const generatedMessage = '// *NOTICE* This file is generated by the build, do not edit directly.';
const eslintDisable = '/* eslint-disable quotes, quote-props */';

axios.get('https://www.mass.gov/api/v1/nav/main')
  .then((resp) => {
    const dataFileName = 'src/data/MainNav.data.js';
    const varName = 'mainNav';
    // Write out the JSON, formatted with 2 space indent, as a JS module.
    const data = JSON.stringify(resp.data, null, 2);
    const content = generatedMessage + os.EOL
        + eslintDisable + os.EOL
        + `const ${varName} = ${data};` + os.EOL
        + `export default { ${varName} };` + os.EOL;

    fs.writeFileSync(dataFileName, content, 'utf8', (err) => {
      if (err) throw err;
    });
  }).catch((error) => {
    // handle error
    throw error;
  }).then(() => {
    console.log('done building main nav data');
  });
