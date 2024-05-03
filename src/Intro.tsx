const Intro = () => {
  return (
    <div className="relative">
      <img src="assets\eric-francis-iuRUrbImv2k-unsplash.jpg" alt="Hero Image" className="w-full blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 text-gray-100 font-platypi font-semibold italic">
          Hello, my name is Victor
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium font-inter text-gray-100">
          I am a Software Engineer
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold text-gray-100 py">
          I am interested in creating new technologies with my expertise.
        </p>
      </div>
    </div>
  );
};

export default Intro;
