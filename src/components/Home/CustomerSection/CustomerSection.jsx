import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";

const CustomerSection = () => {
  return (
    <div className="relative bg-black px-3 md:px-24 py-24">
      {/* Green blur drop background */}
      <div className="absolute bottom-16 right-0 h-40 w-80 rounded-full bg-teal-400 blur-3xl z-10"></div>

      <div className="relative z-20">
        <div className="max-w-[1160px] mx-auto bg-[#212121] p-10 ">
          <div className="md:flex gap-10">
            <div className="bg-[#141414] text-[#FFFFFFB2] p-10 relative">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <IoMdStar key={index} className="text-yellow-500" size={20} />
                ))}
              </div>
              <p>
                Milestone helps me keep a clean, organized ledger that I can
                access anywhere. The UI is so intuitive that anyone can use it,
                without any knowledge on the system. I also love the financial
                reports!
              </p>
              <div className="mt-5">
                <p className="text-white font-bold">Waed Warmen</p>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/men.png"
                alt="Customer Section"
                height={500}
                width={500}
                className="rounded-lg"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FaCirclePlay className="text-green-500 text-6xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center mt-10
          ">
            <Image
              src="/assets/customerIcon-1.png"
              alt="Customer Section"
              height={200}
              width={200}
            />
            <Image
              src="/assets/customerIcon-2.png"
              alt="Customer Section"
              height={200}
              width={200}
            />
            <Image
              src="/assets/customerIcon-3.png"
              alt="Customer Section"
              height={200}
              width={200}
            />
            <Image
              src="/assets/customerIcon-4.png"
              alt="Customer Section"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
