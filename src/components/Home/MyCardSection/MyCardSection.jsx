import Image from "next/image";

const MyCardSection = () => {
  return (
    <div className="py-20 px-2">
      <div className="max-w-[1160px] mx-auto md:flex gap-20 items-center">
        <div className="md:w-1/2 ">
          <div className="mb-5 md:mb-0">
            <Image
              src="/assets/card1.png"
              alt="myCardSection"
              width={400}
              height={400}
              className="shadow-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2 mr-0 md:mr-20 flex flex-col gap-5">
          <h4 className="text-3xl text-center md:text-start md:text-5xl font-bold text-wrap">
            Manage all your cards in one place
          </h4>
          <p>
            Centralize and simplify payments, and get comprehensive insights on
            your financials. Connect your bank account and your card to
            Milestone.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check-icon.png"
                alt="checkIcon"
                width={20}
                height={20}
              />
              <p>No hidden fees.</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check-icon.png"
                alt="checkIcon"
                width={20}
                height={20}
              />
              <p>No hidden fees.</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/check-icon.png"
                alt="checkIcon"
                width={20}
                height={20}
              />
              <p>No hidden fees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardSection;
