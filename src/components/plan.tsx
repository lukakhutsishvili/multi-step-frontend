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
      <div className="flex flex-col gap-6">
        <div className="mt-[99px] relative z-10 mx-4 rounded-[10px] px-6 py-8 bg-white">
          <h1 className="font-bold text-darkBlue text-[24px]">
            {" "}
            Select your plan
          </h1>
          <p className="leading-[1.56] text-[16px] text-grey font-normal">
            You have the option of monthly or yearly billing.
          </p>
          <div
            onClick={() => {
              setPlan("arcade");
              setServicePrice(90);
            }}
            className={`px-4 py-[17px] mt-[22px] flex items-start gap-[14px] border-solid border-[1px] cursor-pointer  rounded-[8px] ${
              plan == "arcade"
                ? " border-activeInput bg-bgColor"
                : " border-grey bg-transparent"
            }`}
          >
            <img src={Arcade} />
            <div>
              <h3 className="text-[16px] font-medium text-darkBlue">Arcade</h3>
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
            className={`px-4 py-[17px] mt-[12px] flex items-start gap-[14px] border-solid border-[1px] cursor-pointer  rounded-[8px] ${
              plan == "advanced"
                ? " border-activeInput bg-bgColor"
                : "border-grey bg-transparent"
            }`}
          >
            <img src={Advanced} />
            <div>
              <h3 className="text-[16px] font-medium text-darkBlue">
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
            className={`px-4 py-[17px] mt-[12px] flex items-start gap-[14px] border-solid border-[1px]  rounded-[8px] cursor-pointer ${
              plan == "pro"
                ? " border-activeInput bg-bgColor"
                : "border-grey bg-transparent"
            }`}
          >
            <img src={Pro} />
            <div>
              <h3 className="text-[16px] font-medium text-darkBlue">Pro</h3>
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
          <div className="bg-light flex mt-6 h-12 items-center justify-center gap-6">
            <p className="text-darkBlue text-[14px] text-medium ">Monthly</p>
            <div
              onClick={() => setYearly(!yearly)}
              className="cursor-pointer w-[38px] h-[20px] bg-darkBlue rounded-[10px] flex px-1 items-center "
            >
              <div
                className={`bg-white w-3 h-3 rounded-[50%] ${
                  yearly ? "ml-auto" : ""
                }`}
              ></div>
            </div>
            <p className="text-grey text-[14px] text-medium ">Year</p>
          </div>
        </div>

        <footer className="mt-auto h-[72px] flex justify-between items-center bg-white px-4">
          <button onClick={() => setPage(1)} className="text-grey">
            Go Back
          </button>
          <button
            onClick={handleNextStep}
            className="w-[97px] h-10 rounded-[4px] flex justify-center items-center bg-darkBlue text-white"
          >
            Next Step
          </button>
        </footer>
      </div>
    </>
  );
};

export default SelectPlan;
