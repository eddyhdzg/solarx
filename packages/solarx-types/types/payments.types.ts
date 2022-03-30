export type PaymentData = Array<{
  amount?: number;
  billing_details?: {
    email?: string;
    name?: string;
    created?: number;
    currency?: string;
    customer?: string;
    description?: string;
    id?: string;
    idempotencyKey?: string;
    priceId?: string;
    projectId?: string;
    qty?: number;
  };
  metadata?: {
    idempotencyKey?: string;
    priceId?: string;
    projectId?: string;
    qty?: string;
    object?: string;
  };
  payment_intent?: string;
  payment_method?: string;
  payment_method_details?: {
    card?: {
      brand?: string;
      country?: string;
      exp_month?: number;
      exp_year?: number;
      last4?: string;
      network?: string;
    };
    receipt_url?: string;
  };
}>;

export interface Payment {
  amount?: number;
  charges?: {
    data?: PaymentData;
  };
  created?: number;
  currency?: string;
  customer?: string;
  description?: string;
  id?: string;
  metadata?: {
    batch?: string; // FIXME
    description?: string;
    idempotencyKey?: string;
    step?: string;
    priceId?: string;
    projectId?: string;
    quantity?: string;
    title?: string;
    transaction?: string;
  };
  payment_method?: string;
}
