import collage from '../assests/weddingImages/collage.png';
import title from '../assests/weddingImages/title.png';
import info from '../assests/weddingImages/info.png';

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden snap-mandatory snap-y scroll-smooth bg-white">

      <div className="w-full px-20 mt-10 flex justify-center items-center">
        <img
          src={title}
          alt="Collage of Aoife & Oisín"
          className="bg-slate-200"
        />
      </div>

      <div className="w-full px-20 mt-10">
        <img
          src={collage}
          alt="Collage of Aoife & Oisín"
          className=" w-full bg-slate-200"
        />
      </div>

      <img
        src={info}
        alt="Collage of Aoife & Oisín"
        className="bg-slate-200 h-2/3 w-2/3"
      />
    </div>
  );
};

export default ContactPage;
