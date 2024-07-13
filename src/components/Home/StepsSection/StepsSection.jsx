import Image from "next/image";

const StepsSection = () => {
  return (
    <div className="bg-[#000000] py-10 px-2">
      <div className="max-w-[1160px] mx-auto text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          The 4 steps route to better financial management. Smarter accounting
          for faster growth.
        </h2>
        <div className="md:flex items-center mt-5">
          <div className="w-1/3">
            <Image
              src="/assets/curveLine.png"
              alt="Steps Section"
              height={100}
              width={100}
            />
          </div>
          <div className="w-full flex gap-2 md:gap-10">
            <div className="bg-[#121212] flex flex-col items-center gap-5 p-5 w-10 md:w-20">
              <p className="font-bold text-2xl">01.</p>
              <p className="transform rotate-90">Analyze</p>
            </div>
            <div className="bg-[#121212] flex flex-col gap-5 p-5 md:p-10">
              <p className="font-bold text-2xl">02.</p>
              <h5 className="text-lg font-bold">Tracking Expense</h5>
              <p className="text-sm">
                Gather information about your business, its structure, goals,
                and policies.
              </p>
            </div>
            <div className="bg-[#121212] flex flex-col items-center gap-5 p-5 w-10 md:w-20">
              <p className="font-bold text-2xl">03.</p>
              <p className="transform rotate-90">Analyze</p>
            </div>
            <div className="bg-[#121212] flex flex-col items-center gap-5 p-5 w-10 md:w-20">
              <p className="font-bold text-2xl">04.</p>
              <p className="transform rotate-90">Analyze</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
