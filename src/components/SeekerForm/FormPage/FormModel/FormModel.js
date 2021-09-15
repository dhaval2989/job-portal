export default {
    formId: 'seekerForm',
    formField: {
        // Presonal Deteails Seeker ============================================
        DOB: {
            name: 'DOB',
            label: 'DOB*',
            requiredErrorMsg: 'DOB is required',
        },
        imageUploader: {
            name: 'Profile Iamge',
            label: 'Profile Iamge',
            requiredErrorMsg: 'Profile Iamge is required',
        },
        fullName: {
            name: 'fullName',
            label: 'Full name*',
            requiredErrorMsg: 'Full name is required',
            invalidErrorMsg:'Invalid Name'
        },
        gender: {
            name: 'Gender',
            label: 'Gender*',
            
        },
        seekerEmailID: {
            name: 'seekerEmailID',
            label: 'Email ID*',
            requiredErrorMsg: 'Email ID is required',
            invalidErrorMsg: 'Invalid Mail  ID'
        },
        seekerMobileNumber: {
            name: 'seekerMobileNumber',
            label: 'Mobile Number*',
            requiredErrorMsg: 'Mobile Number is required',
            invalidErrorMsg:'Invalid Mobile Number',
        },
    
        address: {
            name: 'address',
            label: 'Address Line 1* ',
            requiredErrorMsg: 'Address is required'
        },
        locality: {
            name: 'locality',
            label: 'Locality (Optional)'
        },
        city: {
            name: 'city',
            label: 'City*',
            requiredErrorMsg: 'City is required'
        },
        state: {
            name: 'state',
            label: 'State/Province/Region',
            requiredErrorMsg:'State/Province/Region is required'
        },
        locality : {
            name:'locality',
            label:'Locality'
        },
        zipcode: {
            name: 'zipcode',
            label: 'Zipcode*',
            requiredErrorMsg: 'Zipcode is required',
            invalidErrorMsg: 'Zipcode is not valid'
        },
        country: {
            name: 'country',
            label: 'Country*',
            requiredErrorMsg: 'Country is required'
        },
    }
};