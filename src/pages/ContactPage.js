import github from '../assests/icons/github-navy.svg'
import LinkedIn from '../assests/icons/LinkedIn.svg'
import mail from '../assests/icons/mail.svg'

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden snap-mandatory snap-y scroll-smooth bg-slate-900">

      <div className="relative h-screen w-full bg-slate-100 flex flex-col justify-center items-center snap-start scroll-smooth">
        <img src={mail} alt="Email" className="w-1/3 max-w-[150px]" />
        <p className="mt-2 -mb-4 font-semibold text-slate-900">Byrne.ois@gmail.com</p>
      </div>

      <a href="https://www.linkedin.com/in/ois%C3%ADn-byrne" target="_blank" rel="noreferrer">
        <button className="relative h-screen w-full bg-slate-900 flex flex-col justify-center items-center snap-start scroll-smooth">
          <img src={LinkedIn} alt="" className="w-1/3 max-w-[150px]" />
          <p className="mt-2 -mb-4 font-semibold text-slate-100">LinkedIn</p>
        </button>
      </a>

      <a href="https://github.com/StudiousVanilla" target="_blank" rel="noreferrer">
        <button className="relative h-screen w-full bg-slate-100 flex flex-col justify-center items-center snap-start scroll-smooth">
          <img src={github} alt="" className="w-1/3 max-w-[150px]" />
          <p className="mt-2 -mb-4 font-semibold text-slate-900">Github</p>
        </button>
      </a>


    </div>
  );
};

export default ContactPage;
