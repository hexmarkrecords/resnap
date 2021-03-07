/**
 * Snapshot and restore Node's module cache state.  E.g.
 *
 *  const resnap = require('./resnap');
 *
 *  // Capture require cache state
 *  const restore = resnap();
 *
 *  // ... require() some stuff ...
 *
 *  // Restore previous cache state
 *  restore();
 */

function clearCache() {
  for (let k in require.cache) delete require.cache[k];
}

module.exports = function capture() {
  const cacheKeys = Object.assign({}, require.cache);
  clearCache();

  return function restore() {
    clearCache();
    Object.assign(require.cache, cacheKeys);
  };
};
