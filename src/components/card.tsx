import { useState } from "react";
import { Header } from ".";
import PersonalInfo from "./info";
import SelectPlan from "./plan";
import AddOns from "./add-ons";
import Finish from "./finish";
import Confirmed from "./Confirm";

const Card = () => {
  const [page, setPage] = useState<number>(1);
  const [formData, setFormData] = useState({});
  const [planData, setPlanData] = useState({});
  const [yearly, setYearly] = useState(false);
  const [data, setData] = useState<object>({});
  const [finished, setFinished] = useState<boolean>(false);
  const [plan, setPlan] = useState("arcade");
  const [addOnsData, setAddOnsData] = useState<object>({});



  return (
    <>
      <div className="bg-bgColor min-h-[100vh] flex flex-col font-ubuntu">
        <Header page={page} />
        {page == 1 && (
          <PersonalInfo
            setPage={setPage}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {page == 2 && (
          <SelectPlan
            setPage={setPage}
            setPlanData={setPlanData}
            yearly={yearly}
            setYearly={setYearly}
            setPlan={setPlan}
            plan={plan}
          />
        )}
        {page == 3 && (
          <AddOns
            setPage={setPage}
            setAddOnsData={setAddOnsData}
            planData={planData}
            yearly={yearly}
            addOnsData={addOnsData}
            formData={formData}
            setData={setData}
          />
        )}
        {page == 4 && finished == false ? (
          <Finish setPage={setPage} data={data} setFinished={setFinished} />
        ) : page == 4 && finished ? (
          <Confirmed />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Card;
