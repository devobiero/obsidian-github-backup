import { backup } from './core';
import yargs from 'yargs';

const options = yargs
  .usage('Usage: -dir <fullPath>')
  .option('fullPath', {
    alias: 'dir',
    describe: 'Full path to obisidian files',
    type: 'string',
    demandOption: true,
  })
  .option('remotePath', {
    alias: 'remote',
    describe: 'Remote path to obisidian backup GitHub repository',
    type: 'string',
    demandOption: true,
  }).argv;

backup(options.fullPath, options.remotePath, {
  execOptions: {
    cwd: options.fullPath,
  },
  logProcess: true,
});
