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
    res.redirect('/app/views/login-search/claim-creation/family-member.html')
  } else if (location === 'dual') {
    res.redirect('/app/views/login-search/claim-creation/family-member.html')
   } else if (location === 'stateless') {
    res.redirect('/app/views/login-search/claim-creation/family-member.html')
  
    
  } else {
    // Fallback if they managed to submit without selecting an option
    res.redirect('/question')
  }
})

//router.post('/switzerland-refund', function (req, res) {
  // Get the answer from the form data
 // const inSwitzerland = req.session.data['inSwitzerland']

  // Check the answer and branch the user
 // if (inSwitzerland === 'yes') {
  //  res.redirect('/app/views/login-search/claim-creation/family-member.html')
////  } else {
//    res.redirect('app/views/login-search/claim-creation/add-travel-dates.html')
 // }
//})

router.post('/ohs-answer', function (req, res) {
  // Get the answer from the form data
  const ohsNumber = req.session.data['ohsNumber']

  // Check the answer and branch the user
  if (ohsNumber === 'yes') {
    res.redirect('app/views/login-search/ohs-entitlement.html')
  } else {
    res.redirect('app/views/login-search/check-answers.html')
  }
})

router.post('/dependant-answer', function (req, res) {
  // Get the answer from the form data
  const newDependant = req.session.data['newDependant']

  // Check the answer and branch the user
  if (newDependant === 'yes') {
    res.redirect('app/views/login-search/claim-creation/claim-check-answers.html')
  } else {
    res.redirect('app/views/login-search/claim-creation/add-dependant.html')
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

router.post('/switzerland-refund-2', function (req, res) {
  const location = req.session.data['refundNationality']

  if (location === 'uk') {
    res.redirect('/app/views/login-search/new-person/add-travel-dates.html')
  } else if (location === 'irish') {
    res.redirect('/app/views/login-search/new-person/add-travel-dates.html')
  } else if (location === 'other') {
    res.redirect('/app/views/login-search/new-person/switzerland.html')
  } else if (location === 'dual') {
    res.redirect('/app/views/login-search/new-person/switzerland.html')
   } else if (location === 'stateless') {
    res.redirect('/app/views/login-search/new-person/switzerland.html')
   }
})

router.post('/ohs-answer-2', function (req, res) {
  // Get the answer from the form data
  const ohsNumber = req.session.data['ohsNumber']

  // Check the answer and branch the user
  if (ohsNumber === 'yes') {
    res.redirect('app/views/login-search/new-person/add-ghic.html')
  } else {
    res.redirect('app/views/login-search/new-person/dependant.html')
  }
})

router.post('/dependant-answer-1', function (req, res) {
  // Get the answer from the form data
  const newDependant = req.session.data['newDependant']

  // Check the answer and branch the user
  if (newDependant === 'yes') {
    res.redirect('app/views/login-search/new-person/claim-check-answers.html')
  } else {
    res.redirect('app/views/login-search/new-person/add-dependant.html')
  }
})

router.post('/u18-answer-1', function (req, res) {
  // Get the answer from the form data
  const under18 = req.session.data['under18']

  // Check the answer and branch the user
  if (under18 === 'yes') {
    res.redirect('app/views/login-search/new-person/claim-check-answers.html')
  } else {
    res.redirect('app/views/login-search/new-person/add-dependant.html')
  }
})

router.post('/switzerland-2', function (req, res) {
  // Get the answer from the form data
  const inSwitzerland = req.session.data['inSwitzerland']

  // Check the answer and branch the user
  if (inSwitzerland === 'yes') {
    res.redirect('/app/views/login-search/new-person/family-member.html')
  } else {
    res.redirect('app/views/login-search/new-person/add-travel-dates.html')
  }
})

router.post('/eligibility-check', function (req, res) {
  // Get the answer from the form data
  const claimDecision = req.session.data['claimDecision']

  // Check the answer and branch the user
  if (claimDecision === 'accept') {
    res.redirect('app/views/eligiblity-1/accept-claim.html')
  } else if (claimDecision === 'reject') {
    res.redirect('app/views/eligiblity-1/reject-claim.html')
  } else if (claimDecision === 'request') {
    res.redirect('app/views/eligiblity-1/request-more-information.html')
  }
  
})

router.post('/claim-proceed', function (req, res) {
  // Get the answer from the form data
  const claimProceed = req.session.data['claimProceed']

  // Check the answer and branch the user
  if (claimProceed === 'yes') {
    res.redirect('app/views/login-search/claim-creation/add-country-v2.html')
  } else if (claimProceed === 'no') {
    res.redirect('app/views/login-search/claim-creation/claim-reject-check-answers.html')
  } else if (claimProceed=== 'request') {
    res.redirect('app/views/login-search/claim-creation/add-country-v2.html')
  }
  
})
module.exports = router

