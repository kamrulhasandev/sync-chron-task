import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const IntergationSection = () => {
  return (
    <div>
      <div className="max-w-[1160px] mx-auto my-20 bg-white px-2">
        <div className="md:flex justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-bold ">
            Works with all your <br /> favorite tools
          </h2>
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-1 hover:bg-[#CAEF45] hover:text-black transition-all">
            ALL INTEGRATION <IoIosArrowRoundForward size={26} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10 text-center">
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image
              src="/assets/dropbox.png"
              alt="dropbox"
              width={50}
              height={50}
            />
            <p>Dropbox</p>
          </div>
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image
              src="/assets/shopify.png"
              alt="shopify"
              width={50}
              height={50}
            />
            <p>Shopify</p>
          </div>
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image
              src="/assets/hubspot.png"
              alt="hubspot"
              width={50}
              height={50}
            />
            <p>Hubspot</p>
          </div>
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image src="/assets/slak.png" alt="slack" width={50} height={50} />
            <p>Slack</p>
          </div>
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image
              src="/assets/intercom.png"
              alt="intercom"
              width={50}
              height={50}
            />
            <p>Intercom</p>
          </div>
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image
              src="/assets/zapier.png"
              alt="zapier"
              width={50}
              height={50}
            />
            <p>Zapier</p>
          </div>
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image
              src="/assets/kickstar.png"
              alt="kickstar"
              width={50}
              height={50}
            />
            <p>Kickstar</p>
          </div>
          <div
            className="flex flex-col items-center gap-2 shadow-md p-5
           rounded-md hover:shadow-[0_50px_50px_rgba(79,_236,_150,_0.5)] hover:transition-all hover:duration-300 cursor-pointer"
          >
            <Image
              src="/assets/mailchip.png"
              alt="mailchimp"
              width={50}
              height={50}
            />
            <p>Mailchimp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntergationSection;
