import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "../login-schema";
// import PhoneInput from "react-phone-number-input";
// import { useState } from "react";
// import { E164Number } from "libphonenumber-js/core";
// import { number } from "yup";

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

  // const [value, setValue] = useState<E164Number | undefined>(undefined);
  return (
    <>
      <div className="mt-[99px] relative z-10 mx-4 rounded-[10px] px-6 py-8 bg-white">
        <h1 className="font-bold text-darkBlue text-[24px]">Personal info</h1>
        <p className="leading-[1.56] text-[16px] text-grey font-normal">
          Please provide your name, email address, and phone number.
        </p>
        <form className=" mt-[22px]">
          <label htmlFor="name" className="text-[12px] text-darkBlue">
            Name
          </label>
          <span className="text-[12px] text-red absolute right-6">
            {errors.name && errors.name.message}
          </span>
          <input
            className="text-[15px] font-[500] text-darkBlue placeholder:text-[15px] outline-activeInput placeholder:font-[500] pl-4 w-full mt-[3px] block border-solid border-[1px] rounded-[4px] border-inputBorder  h-10"
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
            className="inline-block mt-4 text-[12px] text-darkBlue"
          >
            Email Adress
            <span className="text-[12px] text-red  absolute right-6">
              {errors.email && errors.email.message}
            </span>
          </label>

          <input
            className="outline-activeInput pl-4 w-full text-darkBlue mt-[3px] block border-solid border-[1px] rounded-[4px] border-inputBorder h-10"
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
            className="inline-block  mt-4 text-[12px] text-darkBlue"
          >
            Phone Number
            <span className="text-[12px] text-red  absolute right-6">
              {errors.number && errors.number.message}
            </span>
          </label>
          {/* <PhoneInput
            placeholder="e.g. +1 234 567 890"
            id="number"
            value={value}
            onChange={setValue}
            style={{
              padding: "0.5rem",
              width: "100%",
              color: "darkBlue",
              marginTop: "0.75rem",
              display: "block",
              border: "1px solid #ccc",
              borderRadius: "4px",
              height: "2.5rem",
            }}
          /> */}
          <input
            className="outline-activeInput pl-4 w-full text-darkBlue mt-[3px] block border-solid border-[1px] rounded-[4px] border-inputBorder  h-10"
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
      <div className="mt-auto h-[72px] flex justify-end items-center bg-white px-4">
        <button
          onClick={handleSubmit(onSubmit)}
          className="w-[97px] h-10 rounded-[4px] flex justify-center items-center bg-darkBlue text-white"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
