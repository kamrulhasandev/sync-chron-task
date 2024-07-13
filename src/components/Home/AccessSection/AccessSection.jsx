import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const AccessSection = () => {
  return (
    <div className="my-20">
      <div className="max-w-[1160px] mx-auto min-h-[500px] bg-black rounded-lg relative overflow-hidden">
        <div className="absolute right-0 bottom-20">
          <Image
            src="/assets/access-gradient.png"
            alt="access"
            height={500}
            width={500}
          />
          <Image
            src="/assets/curveLine.png"
            alt="access"
            height={400}
            width={100}
            className="absolute right-20 bottom-20"
          />
        </div>
        <div className="absolute z-10 p-5 md:p-24">
          <h1 className="text-white text-2xl md:text-5xl font-bold leading-[80px] text-wrap">
            Get early access to milestone. close your books faster and grow.
          </h1>
          <div className="md:flex gap-5 my-10">
            <button className=" px-6 py-3 rounded-full font-bold flex items-center gap-1 bg-[#CAEF45] text-black uppercase">
              try it on your browsers <IoIosArrowRoundForward size={26} />
            </button>

            <div className="flex items-center gap-3 text-sm">
              <div>
                <Image
                  src="/assets/mac.png"
                  alt="mac"
                  height={40}
                  width={40}
                  className="filter grayscale"
                />
                <p className="text-gray-400">macOS</p>
              </div>
              <div>
                <Image
                  src="/assets/windows.png"
                  alt="mac"
                  height={40}
                  width={40}
                  className="filter grayscale"
                />
                <p className="text-gray-400">WINDOWS</p>
              </div>
              <div className="">
                <Image
                  src="/assets/linux.png"
                  alt="linux"
                  height={32}
                  width={32}
                  className="filter grayscale"
                />
                <p className="text-gray-400">LINUX</p>
              </div>
              <div>
                <Image
                  src="/assets/chrome.png"
                  alt="mac"
                  height={40}
                  width={40}
                  className="filter grayscale"
                />
                <p className="text-gray-400">macOS</p>
              </div>
              <div>
                <Image
                  src="/assets/safari.png"
                  alt="mac"
                  height={40}
                  width={40}
                  className="filter grayscale"
                />
                <p className="text-gray-400">WINDOWS</p>
              </div>
              <div>
                <Image
                  src="/assets/firefox.png"
                  alt="linux"
                  height={42}
                  width={42}
                  className="filter grayscale"
                />
                <p className="text-gray-400">LINUX</p>
              </div>
            </div>
          </div>
          <div className="text-white">
            <ul className="flex items-center gap-5 overflow-hidden whitespace-nowrap animate-scroll">
              <li className="flex items-center gap-3 bg-[#212121] rounded-full px-4 py-2">
                <Image
                  src="/assets/white-check.png"
                  alt="lock"
                  height={24}
                  width={24}
                />
                Fraud protection, zero liability.
              </li>
              <li className="flex items-center gap-3 bg-[#212121] rounded-full px-4 py-2">
                <Image
                  src="/assets/white-check.png"
                  alt="lock"
                  height={24}
                  width={24}
                />
               No personal guarantee.
              </li>
              <li className="flex items-center gap-3 bg-[#212121] rounded-full px-4 py-2">
                <Image
                  src="/assets/white-check.png"
                  alt="lock"
                  height={24}
                  width={24}
                />
               Cards for your whole team.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessSection;
