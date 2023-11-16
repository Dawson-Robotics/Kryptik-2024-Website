const express = require('express');
const router = express.Router();
const { readFile } = require('fs/promises')

router.get('/:mdPath', async (req, res) => {
  
  const md = req.params.mdPath;

  const file = await readFile(`../md/${md}.md`, 'utf8')

  res.send({content:file});

});

module.exports = router;  