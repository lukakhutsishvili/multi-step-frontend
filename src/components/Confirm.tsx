const Confirmed: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="mt-[99px] xl:px-[100px] relative z-10 mx-4 rounded-[10px]  bg-white px-6 py-[79px]">
          <div className="flex justify-center">
            <img src="/images/icon-thank-you.svg" />
          </div>

          <h1 className="font-bold xl:mt-8 text-darkBlue text-[24px] xl:text-[32px] mt-6 text-center">
            Thank You!
          </h1>
          <p className="text-[12px] xl:text-[16px] xl:mt-3 font-ubuntu mt-2 text-center text-grey">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default Confirmed;
