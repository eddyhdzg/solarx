export type PaymentIntentStatus =
  | "canceled"
  | "processing"
  | "requires_action"
  | "requires_capture"
  | "requires_confirmation"
  | "requires_payment_method"
  | "succeeded";

export type PaymentIntentRes = {
  doc: string;
  id: string;
  status: PaymentIntentStatus;
};
