const contactFormValidation = {
	fullName: {
		required: "Full name is required",
		minLength: 1,
		maxLength: {
			value: 64,
			message: "Full name must not exceed 64 characters",
		},
	},
	email: {
		required: "Email is required",
		pattern: {
			value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
			message: "Please provide valid email",
		},
	},
	message: {
		required: "Message is required",
		minLength: {
			value: 64,
			message: "Message must be a minimum of 64 characters",
		},
		maxLength: {
			value: 2560,
			message: "Message must not exceed 2560 characters",
		},
	},
};

export default contactFormValidation;
