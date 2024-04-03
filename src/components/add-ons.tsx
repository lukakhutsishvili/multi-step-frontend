import { addOnsType } from "./type";
import { useForm } from "react-hook-form";

const AddOns: React.FC<addOnsType> = ({
  setPage,
  setAddOnsData,
  yearly,
  addOnsData,
  formData,
  setData,
  planData,
}) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data: any) => {
    setAddOnsData(data);
    setData({
      info: { ...formData },
      plan: { ...planData },
      addService: { ...data },
    });
    setPage(4);
  };

  console.log(addOnsData);
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="mt-[99px] relative z-10 mx-4 rounded-[10px] px-6 py-8 bg-white">
          <h1 className="font-bold text-darkBlue text-[24px]"> Pick add-ons</h1>
          <p className="leading-[1.56] text-[16px] text-grey font-normal">
            Add-ons help enhance your gaming experience.
          </p>
          <label
            htmlFor="addonlservice"
            className={`px-4 py-[17px] mt-[22px] flex items-center justify-between gap-[14px] border-solid border-[1px] cursor-pointer  rounded-[8px]`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="addonlservice"
                className="w-5 h-5 rounded"
                defaultChecked={
                  Object.keys(addOnsData).length > 1
                    ? addOnsData.addonlservice
                    : ""
                }
                {...register("addonlservice")}
              />
              <div>
                <h3 className="text-[16px] font-medium text-darkBlue">
                  Online service
                </h3>
                <p className="text-grey text-[12px] tracking-[1.67] mt-[7px]">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <p
              className={`mt-[3px] text-[12px] text-activeInput leading-[1.67] `}
            >
              {`$${yearly ? "10" : "1"}/${yearly ? "yr" : "mo"}`}
            </p>
          </label>
          <label
            htmlFor="addstorage"
            className={`px-4 py-[17px] mt-[22px] flex items-center justify-between gap-[14px] border-solid border-[1px] cursor-pointer  rounded-[8px]`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="addstorage"
                className="w-5 h-5 rounded"
                defaultChecked={
                  Object.keys(addOnsData).length > 1
                    ? addOnsData.addstorage
                    : ""
                }
                {...register("addstorage")}
              />
              <div>
                <h3 className="text-[16px] font-medium text-darkBlue">
                  Larger storage
                </h3>
                <p className="text-grey text-[12px] tracking-[1.67] mt-[7px]">
                  Extra 1TB of cloud save
                </p>
              </div>
            </div>
            <p
              className={`mt-[3px] text-[12px] text-activeInput leading-[1.67] `}
            >
              {`$${yearly ? "20" : "2"}/${yearly ? "yr" : "mo"}`}
            </p>
          </label>
          <label
            htmlFor="costumProf"
            className={`px-4 py-[17px] mt-[22px] flex items-center justify-between gap-[14px] border-solid border-[1px] cursor-pointer  rounded-[8px]`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="costumProf"
                className="w-5 h-5 rounded"
                defaultChecked={
                  Object.keys(addOnsData).length > 1
                    ? addOnsData.costumProf
                    : ""
                }
                {...register("costumProf")}
              />
              <div>
                <h3 className="text-[16px] font-medium text-darkBlue">
                  costumProf
                </h3>
                <p className="text-grey text-[12px] tracking-[1.67] mt-[7px]">
                  costumProf
                </p>
              </div>
            </div>
            <p
              className={`mt-[3px] text-[12px] text-activeInput leading-[1.67] `}
            >
              {`$${yearly ? "20" : "2"}/${yearly ? "yr" : "mo"}`}
            </p>
          </label>
          {/* Repeat similar divs for other plans */}
        </div>

        <footer className="mt-auto h-[72px] flex justify-between items-center bg-white px-4">
          <button onClick={() => setPage(2)} className="text-grey">
            Go Back
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-[97px] h-10 rounded-[4px] flex justify-center items-center bg-darkBlue text-white"
          >
            Next Step
          </button>
        </footer>
      </div>
    </>
  );
};

export default AddOns;
