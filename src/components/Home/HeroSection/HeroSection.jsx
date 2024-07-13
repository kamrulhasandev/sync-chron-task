import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="min-h-[700px] relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-full bg-cover bg-no-repeat">
        <Image
          src="/assets/heroBg-3.png"
          alt="Left Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full bg-cover bg-no-repeat md:right-[-200px] md:bottom-[-200px]">
        <Image
          src="/assets/heroBg-2.png"
          alt="Right Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="relative z-10 max-w-[1160px] px-2 mx-auto h-full flex flex-col justify-between">
        <div className="text-center py-20 flex flex-col items-center md:w-1/2 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Save more and get visibility on your money
          </h1>
          <p className="text-xl text-black mt-4">
            Know where your spend is going and manage your finances more
            efficiently with Milestone.
          </p>
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center gap-1 hover:bg-[#CAEF45] hover:text-black transition-all">
            Try it on browser <IoIosArrowRoundForward size={26} />
          </button>
        </div>

        <div className="relative bottom-0">
          <Image
            src="/assets/dashboard-preview.png"
            alt="Hero Image"
            width={1160}
            height={600}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
