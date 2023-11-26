import * as Yup from "yup";

export const SignupSchemaEmail = () => {
	return Yup.object({
		organizationName: Yup.string().required('This field is required'),
		adminFirstName: Yup.string().required('This field is required'),
		adminLastName: Yup.string().required('This field is required'),
		email: Yup.string().required('This field is required').email('Invalid email address'),
		password: Yup.string()
			.required('This field is required')
			.min(10, 'Password must be 10 characters long')
			.matches(/[A-Z]/, 'Password requires an uppercase letter')
			.matches(/[a-z]/, 'Password requires a lowercase letter')
			.matches(/[0-9]/, 'Password requires a number')
			.matches(/[^\w]/, 'Password requires a special character'),
	});
};

export const LoginSchemaEmail = () => {
	return Yup.object({
		email: Yup.string().required('This field is required'),
		password: Yup.string().required('This field is required'),
	});
};

export const ForgotPasswordSchema = () => {
	return Yup.object().shape({
		email: Yup.string()
			.email("Please enter a valid email address")
			.required("Email is required"),
	});
};