import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer'


const ContactPage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-screen flex items-center mx-auto">
        <div className='w-full h-full flex flex-col items-center bg-slate-900'>
          <h1 className="w-1/2 text-slate-100 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            You can catch me here
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
        </div>
        <div className='w-full h-full flex flex-col items-center bg-slate-900'>
          <h1 className="w-1/2 text-slate-100 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Leave me a message
          </h1>
          <ContactForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
