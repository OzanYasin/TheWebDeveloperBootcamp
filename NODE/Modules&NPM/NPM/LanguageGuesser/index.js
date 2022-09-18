import { franc } from 'franc';

// To use import and require at the same time:
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const langs = require('langs');
const colors = require('colors');

const argument = process.argv[2];
const langCode = franc(argument);

if (langCode === 'und') {
  console.log('Could not recognize the language.'.red);
} else {
  const language = langs.where('3', langCode);
  console.log(language.name.rainbow);
}
