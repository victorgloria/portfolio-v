function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 text-burntorange font-platypi font-semibold italic">
          Hello, my name is Victor
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium font-inter text-electricblue">
          I am a Software Engineer
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold text-oceanblue">
          I am interested in creating new technologies with my expertise.
        </p>
    </div>
  );
}

export default Intro;
