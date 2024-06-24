const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  console.log("Please provide a JSON file path.");
  return;
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    // TODO: Perform error handling for invalid file format and missing data
    if (
      typeof parsedData.name === "undefined" ||
      typeof parsedData.age === "undefined"
    ) {
      console.log("Missing required data in the JSON file.");
      return;
    }

    // You can add more checks for other fields as necessary
    console.log('JSON data is valid:', jsonData);
  } catch (err) {
    console.error('Invalid JSON file format. Please provide a valid JSON file.');
  }
});
