import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceSection = () => {
  return (
    <div>
      <div className="max-w-[1160px] mx-auto py-10 px-3 md:px-0 relative">
        <div className="md:grid grid-cols-3 gap-10">
          <div className="col-span-2 bg-black p-10 rounded-xl relative mb-10 md:mb-0">
            <Image
              src="/assets/service-icon-5.png"
              alt="arrow"
              height={20}
              width={20}
              className="absolute left-8 top-8"
            />
            <h3 className="text-white text-5xl font-semibold">
              Accounting software that handles it all.
            </h3>
            <button className="mt-8 px-6 py-3 rounded-full flex items-center gap-1 bg-[#CAEF45] text-black uppercase">
              See all features <IoIosArrowRoundForward size={26} />
            </button>
          </div>
          <div className="bg-white shadow-lg p-10 flex flex-col gap-2 rounded-xl hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer">
            <Image
              src="/assets/service-icon-1.png"
              alt="service"
              height={50}
              width={50}
            />
            <h4 className="text-black text-xl font-semibold">Easy Invoicing</h4>
            <p>
              Automate recurring invoices and save time by using pre-built
              templates. Get paid on time.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center -z-10 left-[-350px]">
          <div className="h-36 w-36 bg-emerald-300 blur-3xl rounded-full"></div>
        </div>

        <div className="md:grid grid-cols-3 gap-10 mt-10">
          <div className="bg-white shadow-lg p-10 flex flex-col gap-2 rounded-xl mb-10 md:mb-0 hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer">
            <Image
              src="/assets/service-icon-2.png"
              alt="service"
              height={50}
              width={50}
            />
            <h4 className="text-black text-xl font-semibold">Easy Invoicing</h4>
            <p>
              Automate recurring invoices and save time by using pre-built
              templates. Get paid on time.
            </p>
          </div>
          <div className="bg-white shadow-lg p-10 flex flex-col gap-2 rounded-xl mb-10 md:mb-0 hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer">
            <Image
              src="/assets/service-icon-3.png"
              alt="service"
              height={50}
              width={50}
            />
            <h4 className="text-black text-xl font-semibold">Easy Invoicing</h4>
            <p>
              Automate recurring invoices and save time by using pre-built
              templates. Get paid on time.
            </p>
          </div>
          <div className="bg-white shadow-lg p-10 flex flex-col gap-2 rounded-xl mb-10 md:mb-0 hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer">
            <Image
              src="/assets/service-icon-4.png"
              alt="service"
              height={50}
              width={50}
            />
            <h4 className="text-black text-xl font-semibold">Easy Invoicing</h4>
            <p>
              Automate recurring invoices and save time by using pre-built
              templates. Get paid on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
