import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-[1160px] mx-auto py-10 px-5 sm:px-10 md:py-20 md:grid grid-cols-4 gap-10">
        <div className="mb-10 md:mb-0">
          <Image src="/assets/logo.png" alt="logo" width={109} height={30} />
          <p className="mt-5 text-sm">
            Faster payments, Expense reports done right. Budgeting made easy.
          </p>
          <h5 className="font-bold mt-5 mb-2">Social Media</h5>
          <div className="flex items-center gap-2">
            <div className="bg-[#F4F4F4] h-8 w-8 rounded-full flex items-center justify-center hover:bg-[#CAEF45] transition-all cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-[#F4F4F4] h-8 w-8 rounded-full flex items-center justify-center hover:bg-[#CAEF45] transition-all cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-[#F4F4F4] h-8 w-8 rounded-full flex items-center justify-center hover:bg-[#CAEF45] transition-all cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-[#F4F4F4] h-8 w-8 rounded-full flex items-center justify-center hover:bg-[#CAEF45] transition-all cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <h5 className="font-bold mb-5 uppercase">Pages</h5>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              Home Page
            </li>
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              About
            </li>
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              Features
            </li>
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              Integration
            </li>
          </ul>
        </div>
        <div className="mb-10 md:mb-0">
          <h5 className="font-bold mb-5 uppercase">Utility pages</h5>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              Style Guide
            </li>
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              Login
            </li>
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              Register
            </li>
            <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
              404 Not Found
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-5 uppercase">
            Subscribe to our newsletter
          </h5>
          <div>
            <p className="text-sm mb-2">*Only valuable resource no bullshit</p>
            <div className="flex items-center gap-2 cursor-pointer">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-[#F4F4F4] rounded-full outline-none"
              />
              <Image
                src="/assets/right-arrow.png"
                alt="arrow"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1160px] mx-auto text-center py-2 sm:px-10 bg-[#F2F4F7]">
        <p>© All rights reserved by ClarityU.</p>
      </div>
    </footer>
  );
};

export default Footer;
