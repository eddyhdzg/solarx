export interface CreateCrowdfundingPayment {
  payment_method?: string;
  priceId?: string;
  projectId?: string;
  qty?: number;
}

export type StripePaymentProcessorBrand =
  | "amex"
  | "diners"
  | "discover"
  | "jcb"
  | "mastercard"
  | "unionpay"
  | "visa";
