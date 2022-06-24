import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import htmlMinifier from '@node-minify/html-minifier';
import babelMinify from '@node-minify/babel-minify'
import cleanCSS from '@node-minify/clean-css';
import minify from '@node-minify/core';

Object.defineProperty(String.prototype, "ext", {get: function(x) {return this.split('.').pop()}})

const build = async (pathToFolderOrFile) => {
  const foldersAndFiles = await fs.readdir(pathToFolderOrFile)
  foldersAndFiles.forEach(async folderOrFile => {
    const stat = await fs.stat(path.join(pathToFolderOrFile, folderOrFile));
    if (stat.isFile()) {
      switch(folderOrFile.ext) {
        case 'css': {
          console.log(chalk.bgBlueBright.white.bold(' Minifying '), path.join(pathToFolderOrFile, folderOrFile))
          await minify({
            compressor: cleanCSS,
            input: path.join(pathToFolderOrFile, folderOrFile),
            output: path.join(pathToFolderOrFile, folderOrFile),
            options: {
              advanced: true, // set to false to disable advanced optimizations - selector & property merging, reduction, etc.
            },
          });
          break;
        }
        case 'js': {
          console.log(chalk.bgBlueBright.white.bold(' Minifying '), path.join(pathToFolderOrFile, folderOrFile))
          await minify({
            compressor: babelMinify,
            input: path.join(pathToFolderOrFile, folderOrFile),
            output: path.join(pathToFolderOrFile, folderOrFile),
          });
          break;
        }
        case 'html': {
          console.log(chalk.bgBlueBright.white.bold(' Minifying '), path.join(pathToFolderOrFile, folderOrFile))
          
          if (pathToFolderOrFile.includes('404')) {
            // we copy to 404.html
            await minify({
              compressor: htmlMinifier,
              input: path.join(pathToFolderOrFile, folderOrFile),
              output: path.join(pathToFolderOrFile, '../404.html'),
            });
          }
          await minify({
            compressor: htmlMinifier,
            input: path.join(pathToFolderOrFile, folderOrFile),
            output: path.join(pathToFolderOrFile, folderOrFile),
          });
          break;
        }
        default: {
          
        }
      }
    }
    else {
      build(path.join(pathToFolderOrFile, folderOrFile));
    }
  })
}

build(path.join('.', 'public/'));