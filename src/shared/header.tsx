const Header: React.FC<{ page: number }> = ({ page }) => {
  return (
    <div
      className={`xl:justify-start xl:pl-8 xl:pt-10 xl:p-0 xl:rounded-[10px] ${
        page == 4 ? " xl:row-end-2" : "xl:row-end-3"
      } xl:h-full xl:row-start-1  xl:static xl:bg-[url('/images/bg-sidebar-desktop.svg')] pt-8 absolute flex justify-center w-full h-[172px] bg-no-repeat bg-cover bg-[url('/images/bg-sidebar-mobile.svg')]`}
    >
      <div className=" flex gap-4 xl:flex-col">
        <div className="xl:flex xl:gap-4  ">
          <div
            className={`${
              page == 1
                ? "bg-skyBlue text-darkBlue border-none"
                : "text-white bg-transparent border-solid "
            } flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
          >
            <p className=" font-bold">1</p>
          </div>
          <div className="hidden xl:block">
            <p className="text-[12px] text-lighttext">STEP 1</p>
            <p className="text-[14px] tracking-[1px] text-white mt-1">
              YOUR INFO
            </p>
          </div>
        </div>
        <div className="xl:flex xl:gap-4 hidden">
          <div
            className={`${
              page == 2
                ? "bg-skyBlue text-darkBlue border-none"
                : "text-white bg-transparent border-solid "
            }  flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
          >
            <p className=" font-bold">2</p>
          </div>
          <div className="hidden xl:block">
            <p className="text-[12px] text-lighttext">STEP 2</p>
            <p className="text-[14px] tracking-[1px] text-white mt-1">
              SELECT PLAN
            </p>
          </div>
        </div>
        <div className="xl:flex xl:gap-4 hidden">
          <div
            className={`${
              page == 3
                ? "bg-skyBlue text-darkBlue border-none"
                : "text-white bg-transparent border-solid "
            } flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
          >
            <p className=" font-bold">3</p>
          </div>
          <div className="hidden xl:block">
            <p className="text-[12px] text-lighttext">STEP 3</p>
            <p className="text-[14px] tracking-[1px] text-white mt-1">
              ADD-ONS
            </p>
          </div>
        </div>
        <div className="xl:flex xl:gap-4 hidden">
          <div
            className={`${
              page == 4
                ? "bg-skyBlue text-darkBlue border-none"
                : "text-white bg-transparent border-solid "
            } flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
          >
            <p className=" font-bold">4</p>
          </div>
          <div className="hidden xl:block">
            <p className="text-[12px] text-lighttext">STEP 4</p>
            <p className="text-[14px] tracking-[1px] text-white mt-1">
              SUMMARY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
