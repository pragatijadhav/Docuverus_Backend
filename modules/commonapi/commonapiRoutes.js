const router = require('express').Router();
const api = require('./commonapiController');
const auth = require('../common/authentication');

router.post('/getApplicantInbox', api.getApplicantInbox);
router.post('/getTermsAndConditions', api.getTermsAndConditions);
router.post('/getApplicantRegistration', api.getApplicantRegistration);
router.post('/getDocumentById', api.getDocumentById);
router.post('/getDocumentType', api.getDocumentType);
router.post('/getDocuments', api.getDocuments);

module.exports = router;