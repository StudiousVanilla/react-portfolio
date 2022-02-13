import LineBox from './LineBox';

const BorderBox = ({ logo, logoAltText }) => {
  return (
    <div className="w-full h-full min-w-[600px] min-h-[700px] bg-slate-800 flex justify-center items-center rounded-xl relative">
      <div className="absolute w-full h-95 border-b border-t border-slate-700" />
      <div className="absolute w-95 m:w-95 h-full border-l border-r border-slate-700" />
      <div className="absolute w-95 m:w-95 h-95 bg-slate-900 border border-slate-700 flex justify-center items-center">
        <div className="absolute w-24 h-24 -top-12 -left-12">
          <LineBox logo={logo} logoAltText={logoAltText} />
        </div>
        <div className="h-full w-full flex flex-col justify-start items-center text-white">
          <h1 className="text-3xl font-semibold py-10 text-slate-100">The Sounding Board</h1>
          <p className='px-8 text-lg text-slate-100'>
            The Sounding Board (TSB) is a coaching and HR consultancy service
            offered by ICF accredited coach Mona Eames. I was approached to help
            build the new TSB website as they were tranisitioning away from
            Squarespace.
            <br />
            <br />
            Tech stack:
            <br /> React - NodeJS/Express - Firebase - Heroku - Netlify
            <br />
            <br />
            This web application uses a lightweight NodeJS/Express backend to
            fetch data (blog posts, contact form) stored in Google Firebase.
            These calls are secured using a combination of HTTPS, CORS and
            Google API restrictions.
            <br />
            <br />
            I worked with a professional designer for this project, implementing
            their design spec using my own custom CSS.
            <br />
            <br />
            I also built a custom CMS so that the client could write, edit,
            publish, and delete blog posts from a seperate web app, secured with
            an additional layer of firebase authentication.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BorderBox;
