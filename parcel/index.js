const Bundler = require('parcel-bundler');

const files = [
  'import-from-lodash',
  'import-from-lodash-es',
  'import-from-lodash-es-specify-path'
].map(file => `./src/${file}.ts`);

const options = {
  outDir: './parcel',
  minify: true,
  watch: false,
  sourceMaps: false
};

const bundler = new Bundler(files, options);

bundler.bundle();