#!/usr/bin/env node

import fs from 'fs';
import { Command } from 'commander';
import genDiff from '../src/index.js';
import path from 'path';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .action((filepath1, filepath2, options) => {
    const resolvedPath1 = path.resolve(process.cwd(), filepath1);
    const resolvedPath2 = path.resolve(process.cwd(), filepath2);

    let content1, content2;
    try {
      content1 = fs.readFileSync(resolvedPath1, 'utf-8');
      content2 = fs.readFileSync(resolvedPath2, 'utf-8');
    } catch (error) {
      console.error(`Error reading files: ${error.message}`);
      process.exit(1);
    }

    const { format } = options;
    const diff = genDiff(resolvedPath1, resolvedPath2, content1, content2, format);
    console.log(diff);
  });

program.parse();
