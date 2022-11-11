const { spawnSync } = require('child_process');
const { exit } = require('process');

const cmd = (s) => {
  const cmd = spawnSync(s, [], { shell: true, stdio: 'inherit' });
  return cmd.status;
};

if (cmd('pnpm exec tsc') == 0) {
  exit(1);
}

console.log('done');
