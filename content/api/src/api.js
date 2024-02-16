const express = require('express');
const router = express.Router();
const { readFile, readdir } = require('fs/promises')

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

async function getTeam(member) {
  if (member) {
    return readFile(`../md/team/${member}.json`, 'utf8').then(file => {
      return JSON.parse(file);
    }).catch(e => {
      return {
        name: "Not Found",
        group: "Could not find",
        motto: "Life is roblox",
        rarity: "Common",
        image: "/images/unknown.png"
      };
    })
  }
}

router.get('/md/:mdPath/', async (req, res) => {
  
  const md = req.params.mdPath;
  const lang = req.query.lang;
  const file = await getMd(lang, md);

  res.send({content:file});

});

router.get('/team/:member/', async (req, res) => {
  const member = req.params.member
  const json = await getTeam(member);
  res.send(json)
})

router.get('/team/', async (req, res) => {
  const members = await readdir('../md/team/');
  let names = members.map(x=>x.split('.')[0]);
  res.send(names)
})

module.exports = router;  