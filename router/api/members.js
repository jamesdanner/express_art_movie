const router = require('express').Router();

router.get('/member', (req, res) => {
  res.json({
    a: 100,
    b: 100
  });
})

router.get('/render', (req, res) => {
  res.render('index.art', {
    user: {
      name: 'ui',
      tags: ['art', 'template']
    }
  })
})

module.exports = router;