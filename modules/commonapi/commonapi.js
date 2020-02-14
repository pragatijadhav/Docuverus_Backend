const sql = require("mssql");
const con = require('../database/mssql');
const util = require('util');
const query = util.promisify(con.query).bind(con);
const code = require('../common/code');
const message = require('../common/message');
const config = require('../../config');

class CommonapiService {
  async getApplicantInbox(info) {
    const request = new sql.Request(con);
    request.input('SubscriberID', sql.BigInt, info['subscriber_id']);
    request.input('ApplicantASPNETUserID', sql.NVarChar(500), info['applicant_id']);

    var getApplicantInboxDetails = await request.execute('GET_ApplicantInbox')
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
      console.log(e)
      return { code: code.invalidDetails, message: message.tryCatch, data: {} };
    }


    // request.execute('GET_ApplicantInbox', (error, records) => {
    //   if (error) {
    //     return { 
    //       code: _code.invalidDetails, 
    //       message: message.tryCatch, 
    //       data: {} 
    //     };
    //   }
    //   else {
    //     if(typeof records.recordset != 'undefined' && records.recordset.length > 0) {
    //       return { 
    //         code: _code.success, 
    //         message: message.success, 
    //         data: records.recordset
    //       };
    //     }
    //     else {
    //       return { 
    //         code: _code.invalidDetails, 
    //         message: message.invalidDetails, 
    //         data: {} 
    //       };
    //     }        
    //   }
    // })


    // const getApplicantInboxDetails = await query(sqlQuery
    // //   , [
    // //   info.subscriber_id,
    // //   info.applicant_id
    // // ]
    // );
    // try {
    //   if (typeof getApplicantInboxDetails.rows != 'undefined' && typeof getApplicantInboxDetails.rows[0] != 'undefined' && typeof getNearestLocationByLatLongDetails.rows[0].result != 'undefined') {
    //     return {
    //       code: code.success,
    //       message: message.success,
    //       data: getApplicantInboxDetails.rows[0].result ? getApplicantInboxDetails.rows[0].result : {}
    //     };
    //   }
    //   else {
    //     return {
    //       code: code.success,
    //       message: "No nearest location available",
    //       data: {}
    //     };
    //   }
    // } catch (e) {
    //   console.log(e)
    //   return { code: code.invalidDetails, message: message.tryCatch, data: {} };
    // }
  }
}

module.exports = {
  commonapiService: function () {
    return new CommonapiService();
  }
};