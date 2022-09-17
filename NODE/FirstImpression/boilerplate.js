const fs = require('fs'); // to use methods that fs includes.
// console.log(fs);

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//   console.log('IN THE CALLBACK!');
//   if (err) throw err;
// });

const folderName = process.argv[2] || 'Project';

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
  console.log('SOMETHING WENT WRONG!!!!');
  console.log(e);
}
// console.log('I COME AFTER MKDIR!');
