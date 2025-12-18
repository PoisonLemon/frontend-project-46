import parse from './parser.js';

const genDiff = (filepath1, filepath2, content1, content2, format = 'stylish') => {

  let data1, data2;
  try {
    data1 = parse(filepath1, content1);
    data2 = parse(filepath2, content2);
  } catch (error) {
    console.error(`Parsing error: ${error.message}`);
    process.exit(1);
  }

  return `Parsed data1: ${JSON.stringify(data1, null, 2)}\nParsed data2: ${JSON.stringify(data2, null, 2)}\nFormat: ${format}`;
};

export default genDiff;
