export type planType = {
  setPage(param): void;
  setPlanData(param): void;
  yearly: boolean;
  setYearly(param): void;
  setPlan(param): void;
  plan: string;
};

export type addOnsType = {
  setPage(param): void;
  yearly: boolean;
  setAddOnsData(param): void;
  planData: object;
  addOnsData: any;
  formData: object;
  setData(param): void;
};

type FormData = {
  addService: {
    addonlservice: boolean;
    addstorage: boolean;
    costumProf: boolean;
  };
  plan: {
    plan: string;
    servicePriceYearly: number;
    yearly: boolean;
  };
  info: {
    email: string;
    name: string;
    number: string;
  };
};

export type finishType = {
  setPage: (param: number) => void;
  data: any;
  setFinished(param: boolean): void;
};
