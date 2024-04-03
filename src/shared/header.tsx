const Header: React.FC<{ page: number }> = ({ page }) => {
  return (
    <div className="pt-8 absolute flex justify-center w-full h-[172px] bg-no-repeat bg-cover bg-[url('/images/bg-sidebar-mobile.svg')] ">
      <div className="flex gap-4">
        <div
          className={`${
            page == 1
              ? "bg-skyBlue text-darkBlue border-none"
              : "text-white bg-transparent border-solid "
          } flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
        >
          <p className=" font-bold">1</p>
        </div>
        <div
          className={`${
            page == 2
              ? "bg-skyBlue text-darkBlue border-none"
              : "text-white bg-transparent border-solid "
          } flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
        >
          <p className=" font-bold">2</p>
        </div>
        <div
          className={`${
            page == 3
              ? "bg-skyBlue text-darkBlue border-none"
              : "text-white bg-transparent border-solid "
          } flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
        >
          <p className=" font-bold">3</p>
        </div>
        <div
          className={`${
            page == 4
              ? "bg-skyBlue text-darkBlue border-none"
              : "text-white bg-transparent border-solid "
          } flex justify-center items-center rounded-[50%] w-[33px] h-[33px]  border-white border-[1px] `}
        >
          <p className=" font-bold">4</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
