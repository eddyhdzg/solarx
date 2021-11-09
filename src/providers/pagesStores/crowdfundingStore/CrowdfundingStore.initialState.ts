export type CrowdfundingState = {
  payment: {
    loading: boolean;
  };
  method: {
    open: boolean;
    loading: boolean;
  };
};

export const initialCrowdfundingState: CrowdfundingState = {
  payment: {
    loading: false,
  },
  method: {
    open: false,
    loading: false,
  },
};
