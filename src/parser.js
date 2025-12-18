import path from 'path';

const parse = (filePath, content) => {
  const format = path.extname(filePath).slice(1);

  switch (format) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
    case 'yaml':
      throw new Error(`YAML parsing not implemented yet for ${filePath}`);
    default:
      throw new Error(`Unknown format: ${format} for ${filePath}`);
  }
};

export default parse;
