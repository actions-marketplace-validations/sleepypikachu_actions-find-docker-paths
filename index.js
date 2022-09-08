const core = require('@actions/core');
const path = require('path');
const readDirRecursive = require('fs-readdir-recursive')

try {
  const inputPath = core.getInput('path');
  const changes = Array.from(new Set(JSON.parse(core.getInput('changes')).map(x => path.dirname(x))));

  const filteredPaths = readDirRecursive(inputPath)
  .filter(x => path.basename(x) === 'Dockerfile')
  .filter(x => changes.length === 0 || (changes.indexOf(x) !== -1))
  .map(path.dirname)
  .map(x => `./${path.join(inputPath, x)}`);

  core.setOutput('filtered-paths', JSON.stringify(filteredPaths));

} catch (error) {
  core.setFailed(error.message);
}
