import { CommandConfig, execGitCmd } from '.';

export function push(execOptions: CommandConfig) {
  execGitCmd(['push', '-f', '--set-upstream', 'origin', 'master'], execOptions)
    .then((result) => console.info(result))
    .catch((error) => console.error('Command execution failed: ', error));
}

export function add(execOptions: CommandConfig) {
  execGitCmd(['add', '.'], execOptions)
    .then((_result) => commit(execOptions))
    .catch((error) => console.error('Command execution failed: ', error));
}

export function commit(execOptions: CommandConfig) {
  execGitCmd(['commit', '-m', `🔥 ${new Date().toISOString}`], execOptions)
    .then((_result) => push(execOptions))
    .catch((error) => console.error('Command execution failed: ', error));
}
