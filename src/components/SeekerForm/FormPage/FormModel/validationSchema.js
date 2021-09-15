import * as Yup from 'yup';
import moment from 'moment';
import FormModel from './FormModel';
const {
    formField: {
        DOB,
        imageUploader,
        fullName,
        gender,
        seekerEmailID,
        seekerMobileNumber,
        address,
        state,
        city,
        zipcode,
        country,
        locality,

    }
} = FormModel;
// Form Validation Regex Data 
const fullNameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegEx = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
const mobileNumberRegEx = /^[789]\d{9}$/;
const zipcodeRegEx =/^(\d{4}|\d{6})$/;
export default [
    Yup.object().shape({
        // Personal Detail Validation and verification and Regex data 
        [fullName.name]: Yup.string()
        .required(`${fullName.requiredErrorMsg}`)
        .matches(fullNameRegEx,fullName.invalidErrorMsg),
        [seekerEmailID.name]: Yup.string()
        .required(`${seekerEmailID.requiredErrorMsg}`)
        .matches(emailRegEx, seekerEmailID.invalidErrorMsg),
        [seekerMobileNumber.name]: Yup.string()
        .required(`${seekerMobileNumber.requiredErrorMsg}`)
        .matches(mobileNumberRegEx, seekerMobileNumber.invalidErrorMsg ),

        [DOB.name]: Yup.string()
        .required(`${DOB.requiredErrorMsg}`),

        [address.name]: Yup.string().nullable().required(`${address.requiredErrorMsg}`),
        [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
        [state.name]: Yup.string().nullable().required(`${state.requiredErrorMsg}`),
        [zipcode.name]: Yup.string()
        .required(`${zipcode.requiredErrorMsg}`)
        .matches(zipcodeRegEx,zipcode.invalidErrorMsg ),
        [country.name]: Yup.string()
            .nullable()
            .required(`${country.requiredErrorMsg}`)
    }),
    // Educational Data 

    Yup.object().shape({
        
        
        
    })
];