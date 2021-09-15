import FormModel from './FormModel';
const {
    formField: {
        // Presonal Deteails Seeker ============================================
        DOB,
        imageUploader,
        fullName,
        gender,
        seekerEmailID,
        seekerMobileNumber,
        address,
        city,
        state,
        zipcode,
        country,
        // Educational Details ===================================================        
    }
} = FormModel;

export default {
    // Personal Data
    [DOB.name]: '',
    [imageUploader.name]: '',
    [fullName.name]: '',
    [gender.name]:'',
    [seekerEmailID.name]: '',
    [seekerMobileNumber.name]: '',
    
    [address.name]:'',
    [state.name]:'',
    [city.name]: '',
    [zipcode.name]: '',
    [country.name]: '',
    // Educational Data


};