import { functions, db } from "../../config";
import { ProjectPrice } from "solarx-types";

const priceDefaultData: ProjectPrice = {
  active: true,
  billing_scheme: "per_unit",
  currency: "mxn",
  interval: null,
  interval_count: null,
  metadata: {},
  recurring: null,
  tax_behavior: "unspecified",
  tiers: null,
  tiers_mode: null,
  transform_quantity: null,
  trial_period_days: null,
  type: "one_time",
};

export const createLocalPrices_v0 = functions.https.onCall(async (data) => {
  const pid = data?.id;

  const generalPrice: ProjectPrice = {
    ...priceDefaultData,
    description: "General Investors",
    unit_amount: 100000,
  };

  const earlyPrice: ProjectPrice = {
    ...priceDefaultData,
    description: "5% Discount - Early Investors",
    unit_amount: 95000,
  };

  const superEarlyPrice: ProjectPrice = {
    ...priceDefaultData,
    description: "10% Discount - Super Early Investors",
    unit_amount: 90000,
  };

  const pricesRef = db.collection("projects").doc(pid).collection("prices");

  const batch = db.batch();
  batch.set(pricesRef.doc(), { product: pid, ...generalPrice });
  batch.set(pricesRef.doc(), { product: pid, ...earlyPrice });
  batch.set(pricesRef.doc(), { product: pid, ...superEarlyPrice });

  return batch.commit();
});
