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
      <div className="flex flex-col gap-6 min-h-[100vh]">
        <div className="mt-[99px] relative z-10 mx-4 rounded-[10px] px-6 py-8 bg-white">
          <h1 className="font-bold text-darkBlue text-[24px]"> Finishing up</h1>
          <p className="leading-[1.56] text-[16px] text-grey font-normal">
            Double-check everything looks OK before confirming.
          </p>
          <div className="mt-[22px] p-4 bg-light ">
            <div className="flex items-center justify-between">
              <div onClick={() => setPage(1)}>
                <h1 className=" font-medium text-darkBlue text-[12px]">
                  Arcade ({`${data.plan.yearly ? "Yearly" : "monthly"}`})
                </h1>
                <p
                  onClick={() => setPage(1)}
                  className="text-[14px] text-grey underline leading-[1.43] mt-[3px]"
                >
                  change
                </p>
              </div>
              <p className="text-darkBlue text-[14px] font-bold">
                {`${
                  data.plan.yearly
                    ? `$${data.plan.servicePriceYearly}/yr`
                    : `$${data.plan.servicePriceYearly / 10}/mo`
                }`}
              </p>
            </div>
            <div className="h-[1px] w-full mt-3 opacity-[0.2] bg-[#9699aa]"></div>
            {data.addService?.addonlservice ? (
              <p className="mt-3  text-[14px] tracking-[1.43] text-grey flex justify-between">
                online service{" "}
                <span className="text-darkBlue text-[14px]  ">
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
              <p className="mt-3  text-[14px] tracking-[1.43] text-grey flex justify-between">
                larger storage{" "}
                <span className="text-darkBlue text-[14px] ">
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
              <p className="mt-3  text-[14px] tracking-[1.43] text-grey flex justify-between">
                custom profile
                <span className="text-darkBlue text-[14px] ">
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
          <p className="mt-3 px-4  text-[14px] tracking-[1.43] text-grey  flex justify-between">
            total{`${data.plan.yearly ? "(per year)" : "(per month)"}`}
            <span className="text-darkBlue text-[14px] ml-auto ">
              {`${
                data.plan.yearly
                  ? `$${totalPrice}/yr`
                  : `$${totalPrice / 10}/mo`
              }`}
            </span>
          </p>
        </div>
        <footer className="mt-auto h-[72px] flex justify-between items-center bg-white px-4">
          <button onClick={() => setPage(3)} className="text-grey">
            Go Back
          </button>
          <button
            onClick={() => setFinished(true)}
            className="w-[97px] h-10 rounded-[4px] flex justify-center items-center bg-activeInput text-white"
          >
            confirm
          </button>
        </footer>
      </div>
    </>
  );
};

export default Finish;
