import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "../login-schema";

const PersonalInfo: React.FC<{
  setPage(param: number): void;
  setFormData(param: any): void;
  formData: any;
}> = ({ setPage, setFormData, formData }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const { errors } = formState;

  const onSubmit = async (data: any) => {
    setFormData(data);
    setPage(2);
  };

  return (
    <>
      <div className="xl:pt-10 xl:pl-[100px] xl:pr-[100px] xl:m-0 mt-[99px] relative z-10 mx-4 rounded-[10px] px-6 py-8 bg-white">
        <span className="font-bold text-darkBlue text-[24px] xl:text-[32px]">
          Personal info
        </span>
        <p className="leading-[1.56] text-[16px] text-grey font-normal xl:mt-[11px] ">
          Please provide your name, email address, and phone number.
        </p>
        <form className=" mt-[22px] xl:mt-[40px]">
          <label
            htmlFor="name"
            className="text-[12px] xl:text-[14px] text-darkBlue"
          >
            Name
          </label>
          <span className="text-[12px] text-red absolute right-6 xl:right-[100px]">
            {errors.name && errors.name.message}
          </span>
          <input
            className="xl:rounded-2 xl:h-12 xl:mt-2 text-[15px] font-[500] text-darkBlue placeholder:text-[15px] outline-activeInput placeholder:font-[500] pl-4 w-full mt-[3px] block border-solid border-[1px] rounded-[4px] border-inputBorder  h-10"
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            defaultValue={Object.keys(formData).length > 1 ? formData.name : ""}
            {...register("name", {
              required: { value: true, message: "this field is required" },
            })}
          />

          <label
            htmlFor="email"
            className="xl:mt-6 xl:text-[14px] inline-block mt-4 text-[12px] text-darkBlue"
          >
            Email Adress
            <span className="text-[12px] text-red  absolute right-6 xl:right-[100px]">
              {errors.email && errors.email.message}
            </span>
          </label>

          <input
            className="xl:rounded-2 xl:h-12 xl:mt-2  outline-activeInput pl-4 w-full text-darkBlue mt-[3px] block border-solid border-[1px] rounded-[4px] border-inputBorder h-10"
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            defaultValue={
              Object.keys(formData).length > 1 ? formData.email : ""
            }
            {...register("email")}
          />

          <label
            htmlFor="number"
            className="xl:mt-6 xl:text-[14px] inline-block  mt-4 text-[12px] text-darkBlue"
          >
            Phone Number
            <span className="  text-[12px] text-red  absolute right-6 xl:right-[100px]">
              {errors.number && errors.number.message}
            </span>
          </label>
          <input
            className="xl:rounded-2 xl:h-12 xl:mt-2  outline-activeInput pl-4 w-full text-darkBlue mt-[3px] block border-solid border-[1px] rounded-[4px] border-inputBorder  h-10"
            type="text"
            id="number"
            placeholder="e.g. +1 234 567 890"
            defaultValue={
              Object.keys(formData).length > 1 ? formData.number : ""
            }
            {...register("number")}
          />
        </form>
      </div>
      <div className=" xl:pr-[100px] xl:row-start-2 xl:col-start-2 xl:col-end mt-auto h-[72px] flex justify-end items-center bg-white px-4">
        <button
          onClick={handleSubmit(onSubmit)}
          className="xl:rounded-[8px] xl:text-[16px] xl:h-12 xl:w-[123px]  w-[97px] h-10 rounded-[4px] flex justify-center items-center bg-darkBlue text-white"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
