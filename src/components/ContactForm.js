import BorderBox from './BorderBox';

const ContactForm = () => {
  return (
    <div className="w-1/3 min-w-[425px] rounded-lg px-10 py-8 text-slate-900 bg-slate-100">
      <h1 className="mb-6 text-2xl font-bold">Leave a message</h1>

      <form className="flex flex-col">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="mb-6 px-2 py-1 rounded-md"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mb-6 px-2 py-1 rounded-md"
        />

        <textarea
          id="message"
          name="message"
          rows="8"
          cols="50"
          placeholder="Message..."
          className="mb-6 px-2 py-1 rounded-md"
        />
        <button className='h-10 w-20 m-auto bg-slate-900 rounded-xl text-slate-100 font-bold text-lg hover:bg-sky-500'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
