// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form submitted to '/magical-powers-answer'
router.post('/cruise-ship-answer', function (req, res) {

 // Grab the submitted data using the 'name' attribute ('cruiseShip')
  const cruiseShipAnswer = req.session.data['cruiseShip']

  // Direct the user based on their answer
  if (cruiseShipAnswer === 'Yes') {
    res.redirect('/reject-claim') // Change to your "Yes" destination page
  } else if (cruiseShipAnswer === 'No') {
    res.redirect('/treatment-country')        // Change to your "No" destination page
  } else {
    // If they hit continue without selecting an option, reload the current page
    res.redirect('/cruise-ship')          // Change to the name of this current page
  }

})

module.exports = router

