var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  var theLinks = [];
  var linksFolder = path.join(__basedir, 'public/tests/animejs/examples/anime');
  fs.readdir(linksFolder, (err, paths)=>{
    console.log(JSON.stringify(paths, null, 4));
    paths.forEach(path=>{
      theLinks.push(
        {'title': path,
        'url': ('tests/animejs/examples/anime/' + path)
        }
      )
    })
    res.render('index', { title: 'codeLab', links:theLinks });
  })
});

router.get('/connor', function(req, res, next){



var links = [
{text: "Google", url: "https://www.google.com/"},
{text: "Amazon", url: "https://www.amazon.com/"},
{text: "Apple", url: "https://www.apple.com/"}
]


  res.render('connor_view', { title: 'Connor Page', data: links});
})




module.exports = router;
