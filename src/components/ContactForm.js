const ContactForm = () => {
  return (
    <div className="text-slate-300">
      <form className="flex flex-col">
        <label for="fname">Name:</label>
        <input type="text" id="name" name="name" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
      </form>
    </div>
  );
};

export default ContactForm;