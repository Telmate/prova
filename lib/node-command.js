var command = require("new-command")({
  l: 'launch',
  g: 'grep',
  b: 'browser',
  e: 'headless',
  r: 'proxy',
  o: 'port',
  d: 'host',
  q: 'quit'
});

module.exports = command;
