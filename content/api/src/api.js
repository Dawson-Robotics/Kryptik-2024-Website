const express = require('express');
const router = express.Router();
const { readFile } = require('fs/promises')

async function getMd(lang, md) {

  if (lang) {
    return readFile(`../md/${lang}/${md}.md`, 'utf8').then(file => {
      return file;
    }).catch(e =>  {
      return '# File not found';
    });
  } else {
    return readFile(`../md/en/${md}.md`, 'utf8').then(file => {
      return file;
    }).catch(e => {
      return '# File not found'
    });
  }

}

router.get('/:mdPath/', async (req, res) => {
  
  const md = req.params.mdPath;
  const lang = req.query.lang;
  const file = await getMd(lang, md);

  res.send({content:file});

});

module.exports = router;  