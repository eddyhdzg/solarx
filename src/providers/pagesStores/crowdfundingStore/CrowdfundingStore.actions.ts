import { PaymentIntentStatus } from "types";

export interface AlertToggleOpen {
  type: "ALERT_TOGGLE_OPEN";
  payload: boolean;
}

export interface AlertSendData {
  type: "ALERT_SEND_DATA";
  payload: {
    id: string;
    status: PaymentIntentStatus;
  };
}

export interface PaymentToggleProcessing {
  type: "PAYMENT_TOGGLE_PROCESSING";
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
export interface MethodToggleProcessing {
  type: "METHOD_TOGGLE_PROCESSING";
  payload: boolean;
}

export type Actions =
  | AlertToggleOpen
  | AlertSendData
  | PaymentToggleProcessing
  | MethodToggleLoading
  | MethodToggleOpen
  | MethodToggleProcessing;
