const router = require('express').Router();
const movies = require('./../../dbBase/movie');


router.get('/member', (req, res) => {
  res.json({
    a: 100,
    b: 100
  });
})

router.get('/explore', (req, res) => {
  res.render('explore.art', {
    movies,
  })
})

router.get('/subject/:id', (req, res) => {
  const movie = movies.find(item => item.id === parseInt(req.params.id));
  res.render('subject.art', {
    movie,
  })
})

module.exports = router;