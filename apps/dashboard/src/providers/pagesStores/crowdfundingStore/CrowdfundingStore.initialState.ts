import { PaymentIntentStatus } from "solarx-types";

export type CrowdfundingState = {
  alert: {
    open: boolean;
    id?: string;
    status?: PaymentIntentStatus;
  };
  payment: {
    processing: boolean;
  };
  method: {
    loading: boolean;
    open: boolean;
    processing: boolean;
  };
};

export const initialCrowdfundingState: CrowdfundingState = {
  alert: {
    open: false,
    id: undefined,
    status: undefined,
  },
  payment: {
    processing: false,
  },
  method: {
    loading: false,
    open: false,
    processing: false,
  },
};
