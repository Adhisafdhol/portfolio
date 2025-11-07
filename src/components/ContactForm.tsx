import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import type { ContactForm as ContactFormI } from "../types/types";
import { useState } from "react";
import InputContainer from "./InputContainer";
import contactFormValidation from "../validations/contactFormValidation";

const serviceId: string = import.meta.env.VITE_SERVICE_ID;
const templateId: string = import.meta.env.VITE_TEMPLATE_ID;
const publicKey: string = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const methods = useForm<ContactFormI>();
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = methods;

	const onSubmit: SubmitHandler<ContactFormI> = async (data) => {
		setIsSubmitting(true);

		// code fragment
		const templateParams = {
			name: data.fullName,
			email: data.email,
			message: data.message,
		};

		emailjs.init({
			publicKey: publicKey,
			limitRate: {
				// Set the limit rate for the application
				id: "app",
				// Allow 1 request per 60s
				throttle: 60000,
			},
		});

		emailjs.send(serviceId, templateId, templateParams).then(
			() => {
				reset();
				setIsSubmitting(false);
			},
			() => {
				setIsSubmitting(false);
			},
		);
	};
	return (
		<FormProvider {...methods}>
			<form
				method="POST"
				onSubmit={handleSubmit(onSubmit)}
				className="box-border flex w-full flex-col items-start gap-[32px]">
				<InputContainer>
					<label className="text-h6" htmlFor="full-name">
						Full Name
					</label>
					<div className="flex w-full flex-col items-start gap-[8px]">
						{errors.fullName && (
							<p className="text-p text-error">{errors.fullName.message}</p>
						)}
						<input
							className={`bg-fg-1 text-bg-2 w-full rounded-[4px] px-[16px]
              py-[8px]`}
							id="full-name"
							{...register("fullName", contactFormValidation.fullName)}
						/>
					</div>
				</InputContainer>
				<InputContainer>
					<label className="text-h6" htmlFor="email">
						Email
					</label>

					<div className="flex w-full flex-col items-start gap-[8px]">
						{errors.email && (
							<p className="text-p text-error">{errors.email.message}</p>
						)}
						<input
							className={`bg-fg-1 text-bg-2 w-full rounded-[4px] px-[16px]
              py-[8px]`}
							id="email"
							{...register("email", contactFormValidation.email)}
						/>
					</div>
				</InputContainer>
				<InputContainer>
					<label className="text-h6" htmlFor="message">
						Message
					</label>
					<div className="flex w-full flex-col items-start gap-[8px]">
						{errors.message && (
							<p className="text-p text-error">{errors.message.message}</p>
						)}
						<textarea
							className={`bg-fg-1 text-bg-2 scrollbar box-border w-full
								rounded-[4px] px-[16px] py-[8px]`}
							rows={8}
							id="message"
							{...register("message", contactFormValidation.message)}
						/>
					</div>
				</InputContainer>
				<button
					className={`bg-gr-project-btn text-h6 text-fg-1 
              animate-button-out-plain hover:animate-button-in-plain h-h6
              flex gap-[8px] rounded-[4px] bg-linear-to-r bg-size-[300%]
              px-[32px] py-[8px] hover:rounded-[4px] hover:bg-position-[100%]`}>
					{isSubmitting ? "Sending" : "Send"}
				</button>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
