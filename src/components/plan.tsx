import Arcade from "/images/icon-arcade.svg";
import Advanced from "/images/icon-advanced.svg";
import Pro from "/images/icon-pro.svg";
import { useState } from "react";
import { planType } from "./type";

const SelectPlan: React.FC<planType> = ({
  setPage,
  setPlanData,
  yearly,
  setYearly,
  setPlan,
  plan,
}) => {
  const [servicePriceYearly, setServicePrice] = useState<number>(90);

  const handleNextStep = () => {
    setPlanData({ plan, yearly, servicePriceYearly });
    setPage(3);
  };

  return (
    <>
      <div className="flex flex-col gap-6 xl:row-end-3 xl:gap-[93px] xl:row-start-1">
        <div className="xl:pb-0 xl:pt-10 xl:pl-[100px] xl:pr-[100px] xl:m-0  mt-[99px] relative z-10 mx-4 rounded-[10px] px-6 py-8 bg-white">
          <h1 className=" xl:text-[32px] font-bold text-darkBlue text-[24px]">
            {" "}
            Select your plan
          </h1>
          <p className="leading-[1.56] text-[16px] text-grey font-normal xl:mt-[11px]">
            You have the option of monthly or yearly billing.
          </p>
          <div className="xl:flex xl:gap-2 ">
            <div
              onClick={() => {
                setPlan("arcade");
                setServicePrice(90);
              }}
              className={`xl:flex-1 xl:flex-col xl:mt-0 px-4 py-[17px] mt-[22px] flex items-start gap-[14px] border-solid border-[1px] cursor-pointer  rounded-[8px] ${
                plan == "arcade"
                  ? " border-activeInput bg-bgColor"
                  : " border-grey bg-transparent"
              }`}
            >
              <img src={Arcade} />
              <div>
                <h3 className="xl:mt-[39px] text-[16px] font-medium text-darkBlue">
                  Arcade
                </h3>
                <p className="text-grey text-[14px] mt-[7px]">{`${
                  yearly ? "$90/yr" : "$9/mo"
                }`}</p>
                <p
                  className={`mt-[3px] text-[12px] text-darkBlue leading-[1.67] ${
                    yearly ? "block" : "hidden"
                  }`}
                >
                  2 months free
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                setPlan("advanced");
                setServicePrice(120);
              }}
              className={`xl:flex-1 xl:mt-0 xl:flex-col px-4 py-[17px] mt-[12px] flex items-start gap-[14px] border-solid border-[1px] cursor-pointer  rounded-[8px] ${
                plan == "advanced"
                  ? " border-activeInput bg-bgColor"
                  : "border-grey bg-transparent"
              }`}
            >
              <img src={Advanced} />
              <div>
                <h3 className="xl:mt-[39px] text-[16px] font-medium text-darkBlue">
                  Advanced
                </h3>
                <p className="text-grey text-[14px] mt-[7px]">{`${
                  yearly ? "$120/yr" : "$12/mo"
                }`}</p>
                <p
                  className={`mt-[3px] text-[12px] text-darkBlue leading-[1.67] ${
                    yearly ? "block" : "hidden"
                  }`}
                >
                  2 months free
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                setPlan("pro");
                setServicePrice(150);
              }}
              className={`xl:flex-1 xl:mt-0 xl:flex-col px-4 py-[17px] mt-[12px] flex items-start gap-[14px] border-solid border-[1px]  rounded-[8px] cursor-pointer ${
                plan == "pro"
                  ? " border-activeInput bg-bgColor"
                  : "border-grey bg-transparent"
              }`}
            >
              <img src={Pro} />
              <div>
                <h3 className="xl:mt-[39px] text-[16px] font-medium text-darkBlue">
                  Pro
                </h3>
                <p className="text-grey text-[14px] mt-[7px]">{`${
                  yearly ? "$150/yr" : "$15/mo"
                }`}</p>
                <p
                  className={`mt-[3px] text-[12px] text-darkBlue leading-[1.67] ${
                    yearly ? "block" : "hidden"
                  }`}
                >
                  2 months free
                </p>
              </div>
            </div>
          </div>
          <div className="bg-light flex mt-6 h-12 items-center justify-center gap-6">
            <p
              className={` text-[14px] text-medium ${
                yearly ? "text-grey " : "text-darkBlue"
              }`}
            >
              Monthly
            </p>
            <div
              onClick={() => setYearly(!yearly)}
              className={`cursor-pointer w-[38px] h-[20px] bg-darkBlue rounded-[10px] flex px-1 items-center `}
            >
              <div
                className={`bg-white w-3 h-3 rounded-[50%] ${
                  yearly ? "ml-auto" : ""
                }`}
              ></div>
            </div>
            <p
              className={` text-[14px] text-medium ${
                yearly ? "text-darkBlue" : "text-grey "
              }`}
            >
              Yearly
            </p>
          </div>
        </div>

        <footer className="xl:row-start-2 xl:px-[100px] mt-auto h-[72px] flex justify-between items-center bg-white px-4">
          <button
            onClick={() => setPage(1)}
            className="text-grey xl:text-[16px]"
          >
            Go Back
          </button>
          <button
            onClick={handleNextStep}
            className="xl:rounded-[8px] xl:text-[16px] xl:h-12 xl:w-[123px]  w-[97px] h-10 rounded-[4px] flex justify-center items-center bg-darkBlue text-white"
          >
            Next Step
          </button>
        </footer>
      </div>
    </>
  );
};

export default SelectPlan;
