import { SpawnOptions } from 'child_process';

export type CommandConfig = {
  execOptions?: SpawnOptions;
  logProcess?: boolean;
  customMsg?: string;
};
