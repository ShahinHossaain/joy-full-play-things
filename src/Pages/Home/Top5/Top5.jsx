const Top5 = () => {
  return (
    <div>
      <div className="text-center mt-16">
        <p className="text-3xl md:text-4xl font-bold font-serif">
          <span className="text-violet-600">J</span>ob Category List
        </p>
        <p className="mb-7 mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-20">
          <div className="rounded-lg shadow-lg overflow-hidden py-5 bg-violet-400 text-white">
            <img src="" alt="Placeholder" className="w-20 h-20 mx-auto" />
            <div className="px-4 pt-2 text-center">
              <p className=" font-semibold text-lg mb-1"></p>
              <p className=" text-sm"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top5;
