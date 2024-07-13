import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const WhyUsSection = () => {
  return (
    <div className="py-20 px-2">
      <div className="max-w-[1160px] mx-auto text-black">
        <div className="w-full md:w-1/2 mx-auto text-center">
          <h2 className=" text-3xl md:text-5xl font-bold">Why CalarityU</h2>
          <p className="text-base md:text-xl mt-5">
            Most finance and accounting platforms work against you, than for
            you. Shift to the finance software that actually does what it
            claims.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center relative mt-10">
          <div className="absolute inset-0 flex items-center justify-center bottom-[-100px]">
            <div className="h-48 w-48 bg-emerald-300 blur-3xl rounded-full"></div>
          </div>
          <div className="relative z-10 mb-8 md:mb-0">
            <Image src="/assets/logo.png" alt="logo" width={109} height={30} className="mb-5" />
            <div className="p-10 shadow-lg bg-white text-black rounded-lg">
              <h5 className="uppercase">Features Includes:</h5>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> Works with the
                  real exchange rate
                </li>
              </ul>
            </div>
          </div>
          <div className="z-10 bg-green-500 w-16 h-16 rounded-full flex justify-center items-center mb-8 md:mb-0">
            <p className="text-3xl font-bold text-white">VS</p>
          </div>
          <div className="relative z-10">
            <h4 className="text-xl text-black font-bold mb-5">Others Softwares</h4>
            <div className="p-10 shadow-lg bg-white text-black rounded-lg">
              <h5 className="uppercase">Features Includes:</h5>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> Need a lot of
                  manual tax management
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
                <li className="flex items-center gap-4">
                  <FaRegCheckCircle className="text-green-500" /> No hidden
                  fees. No surprises
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <Image src="/assets/line.png" alt="why-us" width={300} height={100} />
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
