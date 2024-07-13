import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const AboutSection = () => {
  return (
    <div>
      <div className="max-w-[1160px] mx-auto text-center py-20">
        <h1 className="text-3xl md:text-5xl md:w-[70%] mx-auto font-bold mb-4">
          Customers have consistently rated Milestone 4.9/5
        </h1>
        <div className="md:flex justify-around items-center pt-10">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <IoMdStar key={index} className="text-yellow-500" size={24} />
              ))}
            </div>
            <p className="text-gray-500 italic">
              {"the interface is excellent"}
            </p>
            <Image
              src="/assets/about-img-1.png"
              alt="About Section"
              height={100}
              width={200}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <IoMdStar key={index} className="text-yellow-500" size={24} />
              ))}
            </div>
            <p className="text-gray-500 italic">
              {"the interface is excellent"}
            </p>
            <Image
              src="/assets/about-img-2.png"
              alt="About Section"
              height={100}
              width={200}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <IoMdStar key={index} className="text-yellow-500" size={24} />
              ))}
            </div>
            <p className="text-gray-500 italic">
              {"the interface is excellent"}
            </p>
            <Image
              src="/assets/about-img-3.png"
              alt="About Section"
              height={50}
              width={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
