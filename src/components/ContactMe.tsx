import ContactForm from "./ContactForm";

const ContactMe = () => {
	return (
		<section
			className={`flex min-h-[min(100dvh,1080px)] flex-col items-start
      justify-center gap-[32px] p-[16px] sm:p-[64px]`}>
			<h2 className="text-h4">Contact Me</h2>
			<ContactForm />
		</section>
	);
};

export default ContactMe;
