export interface PaymentToggleLoading {
  type: "PAYMENT_TOGGLE_LOADING";
  payload: boolean;
}

export interface MethodToggleLoading {
  type: "METHOD_TOGGLE_LOADING";
  payload: boolean;
}

export interface MethodToggleOpen {
  type: "METHOD_TOGGLE_OPEN";
  payload: boolean;
}

export type Actions =
  | PaymentToggleLoading
  | MethodToggleLoading
  | MethodToggleOpen;
