import Image from "next/image";

const SendMoneySection = () => {
  return (
    <div className="py-20  px-2">
      <div className="max-w-[1160px] mx-auto md:flex gap-20 items-center">
        <div className="md:w-1/2 mr-0 md:mr-20 flex flex-col gap-5 mb-5 md:mb-0">
          <h4 className="text-3xl text-center md:text-start md:text-5xl font-bold text-wrap">
            Pay invoices, on time every time across borders
          </h4>
          <p>
            Send and receive payments in any currency, without any extra
            charges, within 24 hours or less. Make international transactions a
            piece of cake. <br />
            Avoid late fees and penalties, and capture every early payment
            discount with reminders and automated approvals
          </p>
          <div className="flex gap-1">
            <Image
              src="/assets/top-arrow.png"
              alt="arrow"
              width={26}
              height={26}
            />{" "}
            <p>Learn more</p>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="">
            <Image
              src="/assets/card1.png"
              alt="myCardSection"
              width={400}
              height={400}
              className="shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoneySection;
