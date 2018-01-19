const router = require('express').Router();
const Users = require('../../models/users');
const { renderError } = require('../utils');

router.get('/new', (request, response) => {
  const twilioAccountSID = request.query.AccountSid;

  addSidToUser(twilioAccountSID)
  .then(response.render('campaign/new'))
  .catch(error => {
    renderError(request, response, error)
  });
});

router.post('/new', (request, response) => {
  response.status(200).json('Account has been updated.'))
  //route to another GET. In the meanwhile, respond with json
})

module.exports = router;