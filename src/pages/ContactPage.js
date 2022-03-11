import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto pt-24">
      <h1 className="w-1/2 text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        Contact
      </h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
