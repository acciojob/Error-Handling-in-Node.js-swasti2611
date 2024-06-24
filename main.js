const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    // TODO: Perform error handling for invalid file format and missing data
    if (!jsonData || typeof jsonData !== 'object') {
      throw new Error('Invalid JSON format: Root element must be an object.');
    }
    if (!jsonData.name || !jsonData.age) {
      console.error('Missing required data in JSON file. Ensure the file contains both "name" and "age".');
      return;
    }

    // Add specific checks based on expected data structure
    if (!jsonData.requiredField) {
      throw new Error('Missing required field: "requiredField".');
    }

    // You can add more checks for other fields as necessary
    console.log('JSON data is valid:', jsonData);
  } catch (err) {
    console.error('Invalid JSON file format. Please provide a valid JSON file.');
  }
});
