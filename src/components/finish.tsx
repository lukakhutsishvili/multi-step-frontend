import { finishType } from "./type";

const Finish: React.FC<finishType> = ({ setPage, data, setFinished }) => {
  const onlineservPrice = 10;
  const storagePrice = 20;
  const customProfprice = 20;
  const serviceprice = data.plan.servicePriceYearly;
  let totalPrice;
  const onlserv = data.addService.addonlservice;
  const storage = data.addService.addstorage;
  const customprof = data.addService.costumProf;

  if (onlserv && storage && customprof) {
    totalPrice =
      serviceprice + onlineservPrice + storagePrice + customProfprice;
  } else if (onlserv && storage) {
    totalPrice = serviceprice + onlineservPrice + storagePrice;
  } else if (onlserv && customprof) {
    totalPrice = serviceprice + onlserv + customProfprice;
  } else if (storage && customprof) {
    totalPrice = serviceprice + storagePrice + customProfprice;
  } else if (onlserv) {
    totalPrice = serviceprice + onlineservPrice;
  } else if (storage) {
    totalPrice = serviceprice + storagePrice;
  } else if (customprof) {
    totalPrice = serviceprice + customProfprice;
  } else if (!onlserv && !storage && !customprof) {
    totalPrice = serviceprice;
  }

  return (
    <>
      <div className="flex flex-col gap-6 min-h-[100vh]  xl:row-end-2 xl:gap-[130px] xl:row-start-1">
        <div className="xl:pb-0 xl:pt-10 xl:pl-[100px] xl:pr-[100px] xl:m-0  mt-[99px] relative z-10 mx-4 rounded-[10px] px-6 py-8 bg-white">
          <h1 className="xl:text-[32px] font-bold text-darkBlue text-[24px]">
            {" "}
            Finishing up
          </h1>
          <p className="xl:mt-[11px] leading-[1.56] text-[16px] text-grey font-normal">
            Double-check everything looks OK before confirming.
          </p>
          <div className="xl:px-6 xl:pt-4 xl:pb-6  xl:mt-[40px] mt-[22px] p-4 bg-light ">
            <div className="flex items-center justify-between">
              <div onClick={() => setPage(1)}>
                <h1 className="xl:text-[16px] font-medium text-darkBlue text-[12px]">
                  Arcade ({`${data.plan.yearly ? "Yearly" : "monthly"}`})
                </h1>
                <p
                  onClick={() => setPage(1)}
                  className="xl:mt-[7px] text-[14px] text-grey underline leading-[1.43] mt-[3px] cursor-pointer hover:text-activeInput"
                >
                  change
                </p>
              </div>
              <p className="text-darkBlue text-[14px] font-bold xl:text-[16px]">
                {`${
                  data.plan.yearly
                    ? `$${data.plan.servicePriceYearly}/yr`
                    : `$${data.plan.servicePriceYearly / 10}/mo`
                }`}
              </p>
            </div>
            <div className="xl:mt-6 h-[1px]  w-full mt-3 opacity-[0.2] bg-[#9699aa]"></div>
            {data.addService?.addonlservice ? (
              <p className="xl:mt-4 mt-3  text-[14px] tracking-[1.43] text-grey flex justify-between">
                online service{" "}
                <span className="text-darkBlue text-[14px] font-normal ">
                  {`${
                    data.plan.yearly
                      ? `+$${onlineservPrice}yr`
                      : `+$${onlineservPrice / 10}/mo`
                  }`}
                </span>
              </p>
            ) : (
              ""
            )}
            {data.addService?.addstorage ? (
              <p className="xl:mt-4 mt-3  text-[14px] tracking-[1.43] text-grey flex justify-between">
                larger storage{" "}
                <span className="text-darkBlue text-[14px] font-normal">
                  {`${
                    data.plan.yearly
                      ? `+$${customProfprice}/yr`
                      : `+$${customProfprice / 10}/mo`
                  }`}
                </span>
              </p>
            ) : (
              ""
            )}
            {data.addService?.costumProf ? (
              <p className="xl:mt-4 mt-3  text-[14px] tracking-[1.43] text-grey flex justify-between">
                custom profile
                <span className="text-darkBlue text-[14px] font-normal ">
                  {`${
                    data.plan.yearly
                      ? `+$${customProfprice}/yr`
                      : `+$${customProfprice / 10}/mo`
                  }`}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
          <p className="xl:px-6 xl:mt-6 mt-3 px-4  text-[14px] tracking-[1.43] text-grey  flex justify-between">
            total{`${data.plan.yearly ? "(per year)" : "(per month)"}`}
            <span className="text-[16px] ml-auto text-activeInput xl:text-[20px]">
              {`${
                data.plan.yearly
                  ? `$${totalPrice}/yr`
                  : `$${totalPrice / 10}/mo`
              }`}
            </span>
          </p>
        </div>
        <footer className="xl:row-start-2 xl:px-[100px] mt-auto h-[72px] flex justify-between items-center bg-white px-4">
          <button
            onClick={() => setPage(3)}
            className="text-grey xl:text-[16px]"
          >
            Go Back
          </button>
          <button
            onClick={() => setFinished(true)}
            className="xl:rounded-[8px] xl:text-[16px] xl:h-12 xl:w-[123px] w-[97px] h-10 rounded-[4px] flex justify-center items-center bg-activeInput text-white"
          >
            confirm
          </button>
        </footer>
      </div>
    </>
  );
};

export default Finish;
