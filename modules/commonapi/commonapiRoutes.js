const router = require('express').Router();
const api = require('./commonapiController');
const auth = require('../common/authentication');

router.post('/getApplicantInbox', api.getApplicantInbox);

module.exports = router;