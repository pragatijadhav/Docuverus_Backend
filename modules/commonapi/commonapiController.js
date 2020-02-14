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
    }
};

module.exports = controller;