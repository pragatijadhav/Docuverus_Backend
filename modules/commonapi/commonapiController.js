const object = require('./commonapi');
const functions = require('../common/functions');

const controller = {
    getApplicantInbox: async (req, res) => {
        try {
            const getApplicantInboxDetails = await object
                .commonapiService()
                .getApplicantInbox(req.body);
            res.send(
                functions.responseGenerator(
                    getApplicantInboxDetails.code,
                    getApplicantInboxDetails.message,
                    getApplicantInboxDetails.data
                )
            );
        } catch (error) {
            res.send(
                functions.responseGenerator(error.code, error.message, error.data)
            );
        }
    },

    getTermsAndConditions: async (req, res) => {
        try {
            const getTermsAndConditionsDetails = await object
                .commonapiService()
                .getTermsAndConditions(req.body);
            res.send(
                functions.responseGenerator(
                    getTermsAndConditionsDetails.code,
                    getTermsAndConditionsDetails.message,
                    getTermsAndConditionsDetails.data
                )
            );
        } catch (error) {
            res.send(
                functions.responseGenerator(error.code, error.message, error.data)
            );
        }
    },

    getApplicantRegistration: async (req, res) => {
        try {
            const getApplicantRegistrationDetails = await object
                .commonapiService()
                .getApplicantRegistration(req.body);
            res.send(
                functions.responseGenerator(
                    getApplicantRegistrationDetails.code,
                    getApplicantRegistrationDetails.message,
                    getApplicantRegistrationDetails.data
                )
            );
        } catch (error) {
            res.send(
                functions.responseGenerator(error.code, error.message, error.data)
            );
        }
    },

    getDocumentById: async (req, res) => {
        try {
            const getDocumentByIdDetails = await object
                .commonapiService()
                .getDocumentById(req.body);
            res.send(
                functions.responseGenerator(
                    getDocumentByIdDetails.code,
                    getDocumentByIdDetails.message,
                    getDocumentByIdDetails.data
                )
            );
        } catch (error) {
            res.send(
                functions.responseGenerator(error.code, error.message, error.data)
            );
        }
    },

    getDocumentType: async (req, res) => {
        try {
            const getDocumentTypeDetails = await object
                .commonapiService()
                .getDocumentType(req.body);
            res.send(
                functions.responseGenerator(
                    getDocumentTypeDetails.code,
                    getDocumentTypeDetails.message,
                    getDocumentTypeDetails.data
                )
            );
        } catch (error) {
            res.send(
                functions.responseGenerator(error.code, error.message, error.data)
            );
        }
    },

    getDocuments: async (req, res) => {
        try {
            const getDocumentsDetails = await object
                .commonapiService()
                .getDocuments(req.body);
            res.send(
                functions.responseGenerator(
                    getDocumentsDetails.code,
                    getDocumentsDetails.message,
                    getDocumentsDetails.data
                )
            );
        } catch (error) {
            res.send(
                functions.responseGenerator(error.code, error.message, error.data)
            );
        }
    }
    
};

module.exports = controller;