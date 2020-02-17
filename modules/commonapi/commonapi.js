const conCommon = require('../database/mssqlCommon');
const conGroup = require('../database/mssqlGroup');
const util = require('util');
const queryGroup = util.promisify(conGroup.query).bind(conGroup);
const queryCommon = util.promisify(conCommon.query).bind(conCommon);
const code = require('../common/code');
const message = require('../common/message');
const config = require('../../config');

class CommonapiService {

  async getApplicantInbox(info) {
    // var getApplicantInboxDetails = await query("GET_ApplicantInbox '" + info.subscriber_id + "', '" + info.applicant_id + "' ")
    var getApplicantInboxDetails = await queryGroup(`GET_ApplicantInbox 
      ${info.subscriber_id ? info.subscriber_id : null}, 
      '${info.applicant_id ? info.applicant_id : ''}'`)
    try {
      if (typeof getApplicantInboxDetails.recordset != 'undefined' && getApplicantInboxDetails.recordset.length > 0) {
        return {
          code: code.success,
          message: message.success,
          data: getApplicantInboxDetails.recordset ? getApplicantInboxDetails.recordset : {}
        };
      }
      else {
        return {
          code: code.invalidDetails,
          message: message.invalidDetails,
          data: {}
        };
      }
    } catch (e) {
      return {
        code: code.invalidDetails,
        message: message.tryCatch,
        data: {}
      };
    }
  }

  async getTermsAndConditions(info) {
    var getTermsAndConditionsDetails = await queryCommon(`GET_TermsAndConditions 
    ${info.termsAndConditions_id ? info.termsAndConditions_id : null}`)
    try {
      if (typeof getTermsAndConditionsDetails.recordset != 'undefined' && getTermsAndConditionsDetails.recordset.length > 0) {
        return {  
          code: code.success,
          message: message.success,
          data: getTermsAndConditionsDetails.recordset ? getTermsAndConditionsDetails.recordset : {}
        };
      }
      else {
        return {
          code: code.invalidDetails,
          message: message.invalidDetails,
          data: {}
        };
      }
    } catch (e) {
      return {
        code: code.invalidDetails,
        message: message.tryCatch,
        data: {}
      };
    }
  }

  async getApplicantRegistration(info) {
    var getApplicantRegistrationDetails = await queryGroup(`Get_ApplicantRegistration 
      '${info.user_id ? info.user_id : ''}',
      ${info.subscriber_id ? info.subscriber_id : null},
      ${info.application_number ? info.application_number : null},
      ${info.applicant_id ? info.applicant_id : null}`)
    try {
      if (typeof getApplicantRegistrationDetails.recordset != 'undefined' && getApplicantRegistrationDetails.recordset.length > 0) {
        return {  
          code: code.success,
          message: message.success,
          data: getApplicantRegistrationDetails.recordset ? getApplicantRegistrationDetails.recordset : {}
        };
      }
      else {
        return {
          code: code.invalidDetails,
          message: message.invalidDetails,
          data: {}
        };
      }
    } catch (e) {
      return {
        code: code.invalidDetails,
        message: message.tryCatch,
        data: {}
      };
    }
  }

  async getDocumentById(info) {
    var getDocumentByIdDetails = await queryGroup(`GET_Document_ByID 
      ${info.subscriber_id ? info.subscriber_id : null},
      ${info.document_id ? info.document_id : null}`)
    try {
      if (typeof getDocumentByIdDetails.recordset != 'undefined' && getDocumentByIdDetails.recordset.length > 0) {
        return {  
          code: code.success,
          message: message.success,
          data: getDocumentByIdDetails.recordset ? getDocumentByIdDetails.recordset : {}
        };
      }
      else {
        return {
          code: code.invalidDetails,
          message: message.invalidDetails,
          data: {}
        };
      }
    } catch (e) {
      return {
        code: code.invalidDetails,
        message: message.tryCatch,
        data: {}
      };
    }
  }

  async getDocumentType(info) {
    var getDocumentTypeDetails = await queryCommon(`GET_DocumentType`)
    try {
      if (typeof getDocumentTypeDetails.recordset != 'undefined' && getDocumentTypeDetails.recordset.length > 0) {
        return {  
          code: code.success,
          message: message.success,
          data: getDocumentTypeDetails.recordset ? getDocumentTypeDetails.recordset : {}
        };
      }
      else {
        return {
          code: code.invalidDetails,
          message: message.invalidDetails,
          data: {}
        };
      }
    } catch (e) {
      return {
        code: code.invalidDetails,
        message: message.tryCatch,
        data: {}
      };
    }
  }

  async getDocuments(info) {
    var getDocumentsDetails = await queryGroup(`GET_Documents 
      ${info.subscriber_id ? info.subscriber_id : null},
      ${info.application_number ? info.application_number : null},
      ${info.applicant_id ? info.applicant_id : null},
      ${info.isActiveApplicationDoc ? info.isActiveApplicationDoc : null}`)
    try {
      if (typeof getDocumentsDetails.recordset != 'undefined' && getDocumentsDetails.recordset.length > 0) {
        return {  
          code: code.success,
          message: message.success,
          data: getDocumentsDetails.recordset ? getDocumentsDetails.recordset : {}
        };
      }
      else {
        return {
          code: code.invalidDetails,
          message: message.invalidDetails,
          data: {}
        };
      }
    } catch (e) {
      return {
        code: code.invalidDetails,
        message: message.tryCatch,
        data: {}
      };
    }
  }

  // NAMRITHA MAM'S TECHNIQUE
  //   const request = new sql.Request(con);
  //   request.input('SubscriberID', sql.BigInt, info['subscriber_id']);
  //   request.input('ApplicantASPNETUserID', sql.NVarChar(500), info['applicant_id']);

  //   var getApplicantInboxDetails = await request.execute('GET_ApplicantInbox')

}

module.exports = {
  commonapiService: function () {
    return new CommonapiService();
  }
};