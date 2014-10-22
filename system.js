exports.name = 'sudc-system';
exports.namespace = 'sudc';
exports.id = '62999e58-66a0-4e50-a870-f2673acf6c79';

exports.topology = {
  aws: {
    webElb: [{
      webSg:[{machine: ['web']},
             {machine: ['docsrv', 'histsrv', 'realsrv']}]
    }]
  },
  local: {

    root: ['doc', 'hist', 'real', 'web']
  }
};
