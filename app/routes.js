var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/currently-in-the-uk', function (req, res) {
  if (req.body.currently_in_the_uk === 'yes') {
    res.redirect('/postcode')
  } else {
    res.redirect('/not-built')
  }
})

router.post('/have-any-children', function (req, res) {
  if (req.body.have_any_children === 'yes') {
    res.redirect('/how-many-children')
  } else {
    res.redirect('/not-built')
  }
})

module.exports = router
