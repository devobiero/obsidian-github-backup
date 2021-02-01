import path from 'path';
import fs from 'fs';
import { execGitCmd } from './execGitCmd';
import { CommandConfig } from './types';
import { add, commit } from './commit';

export function backup(
  fullPath: string,
  remote: string,
  execOptions: CommandConfig,
) {
  const isGitEnabled = (fullPath: string) =>
    fs.existsSync(path.join(fullPath, '.git'));
    
  isGitEnabled(fullPath) ? add(execOptions) : init(remote, execOptions);
}

export function init(remote: string, execOptions: CommandConfig) {
  execGitCmd(['init'], execOptions)
    .then((_result) => addRemoteOrigin(remote, execOptions))
    .catch((error) => console.error('Command execution failed: ', error));
}

export function addRemoteOrigin(remote: string, execOptions: CommandConfig) {
  execGitCmd(['remote', 'add', 'origin', remote], execOptions)
    .then((_result) => add(execOptions))
    .catch((error) => console.error('Command execution failed: ', error));
}
