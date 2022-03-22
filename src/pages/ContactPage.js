import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="w-3/4 flex justify-between m-auto pt-20">
      <div className="w-1/2 h-80">
        <h1 className="text-slate-100 text-6xl font-bold mb-10">Hiya!</h1>

        <p className="text-slate-100 text-3xl font-bold mb-10">You can get in touch with me through one of the links below.</p> 
        
        <p className="text-slate-100 text-3xl font-bold"> Or you can leave me a message in the contact form I painstakingly built from scratch</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
