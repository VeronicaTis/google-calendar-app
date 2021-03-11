'use strict';
const fs = require('fs');
const bn = document.getElementById('m');
fs.readFile('link.json', (err, data) => {
  if (err) throw err;
  let student = JSON.parse(data);
  bn.innerHTML = student[0];
});

console.log('This is after the read call');