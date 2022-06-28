export const host = "https://uat-api.vidyuttech.com/";


const AppConstants = { 
    'INIT_BY_EMAIL' : host + 'lms/api/v1/auth/init' ,
    'INIT_BY_PHONE' : host + '/lms/api/v1/auth/init',
    'VERIFY_OTP' : host + '/lms/api/v1/auth/verify',
    'VERIFY_TOKEN' : host + '/lms/api/v1/auth/validate',
    'DELETE_OTP' : host + '/lms/api/v1/auth/expire',
 }

 export default AppConstants;