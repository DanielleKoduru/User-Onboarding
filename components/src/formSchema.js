import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(6, 'The name must be at least six characters long')
        .required('Name is a required field'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is a required field'),
    password: yup
        .string()
        .trim()
        .min(8, 'The password must be at least eight characters long')
        .required('Password is a required field'),
    termsOfService: yup.bool().oneOf([true], 'You must accept the Terms of Service'),
});

export default formSchema;