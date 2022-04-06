const StackIcons = ({ techIcons }) => {
  console.log(techIcons);

  return (
    <div className="w-full h-full flex flex-wrap justify-evenly items-center">
      {techIcons.map((icon) => (
        <div
          className="w-1/10 h-full flex justify-center items-center mx-2"
          key={icon.key}
        >
          <img src={icon.src} alt="" className="max-w-full max-h-full" />
        </div>
      ))}
    </div>
  );
};

export default StackIcons;
