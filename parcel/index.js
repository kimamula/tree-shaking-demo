const Bundler = require('parcel-bundler');

const files = [
  'import-from-lodash',
  'import-from-lodash-es',
  'import-from-lodash-es-specify-path',
  'import-from-rxjs'
].map(file => `./src/${file}.ts`);

const options = {
  outDir: './parcel',
  minify: true,
  watch: false,
  sourceMaps: false,
  scopeHoist: true
};

const bundler = new Bundler(files, options);

bundler.bundle();