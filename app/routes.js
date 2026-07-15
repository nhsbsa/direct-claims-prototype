// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/switzerland-refund-1', function (req, res) {
  const location = req.session.data['refundNationality']

  if (location === 'uk') {
    res.redirect('/app/views/login-search/claim-creation/add-travel-dates.html')
  } else if (location === 'irish') {
    res.redirect('/app/views/login-search/claim-creation/add-travel-dates.html')
  } else if (location === 'other') {
    res.redirect('/app/views/login-search/claim-creation/switzerland.html')
  } else if (location === 'dual') {
    res.redirect('/app/views/login-search/claim-creation/switzerland.html')
   } else if (location === 'stateless') {
    res.redirect('/app/views/login-search/claim-creation/switzerland.html')
  
    
  } else {
    // Fallback if they managed to submit without selecting an option
    res.redirect('/question')
  }
})

router.post('/switzerland-refund', function (req, res) {
  // Get the answer from the form data
  const inSwitzerland = req.session.data['inSwitzerland']

  // Check the answer and branch the user
  if (inSwitzerland === 'yes') {
    res.redirect('/app/views/login-search/claim-creation/family-member.html')
  } else {
    res.redirect('app/views/login-search/claim-creation/add-travel-dates.html')
  }
})

router.post('/ohs-answer', function (req, res) {
  // Get the answer from the form data
  const ohsNumber = req.session.data['ohsNumber']

  // Check the answer and branch the user
  if (ohsNumber === 'yes') {
    res.redirect('app/views/login-search/claim-creation/add-ghic.html')
  } else {
    res.redirect('app/views/login-search/claim-creation/dependant.html')
  }
})

router.post('/dependant-answer', function (req, res) {
  // Get the answer from the form data
  const newDependant = req.session.data['newDependant']

  // Check the answer and branch the user
  if (newDependant === 'yes') {
    res.redirect('app/views/login-search/claim-creation/add-child.html')
  } else {
    res.redirect('app/views/login-search/claim-creation/claim-check-answers.html')
  }
})

router.post('/u18-answer', function (req, res) {
  // Get the answer from the form data
  const under18 = req.session.data['under18']

  // Check the answer and branch the user
  if (under18 === 'yes') {
    res.redirect('app/views/login-search/claim-creation/claim-check-answers.html')
  } else {
    res.redirect('app/views/login-search/claim-creation/add-dependant.html')
  }
})

module.exports = router

