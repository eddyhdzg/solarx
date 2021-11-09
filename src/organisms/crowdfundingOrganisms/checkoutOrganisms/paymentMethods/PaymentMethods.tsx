import { useEffect } from "react";
import { useCurrUserPaymentMethods } from "hooks";
import { ListItemIcon, Skeleton } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useFormContext, Controller } from "react-hook-form";
import {
  CreateCrowdfundingPaymentFormSchema,
  useCrowdfundingStore,
} from "hooks";
import Styled from "./PaymentMethods.styled";
import shallow from "zustand/shallow";

export default function PaymentMethods() {
  const { data } = useCurrUserPaymentMethods();
  const { control } = useFormContext<CreateCrowdfundingPaymentFormSchema>();
  const { dispatch, method } = useCrowdfundingStore(
    ({ dispatch, method }) => ({ dispatch, method }),
    shallow
  );

  useEffect(() => {
    dispatch({ type: "METHOD_TOGGLE_LOADING", payload: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.length]);

  return (
    <Styled.StyledList aria-label="payment-method-list">
      {data?.map((paymentMethod) => {
        return (
          <Controller
            key={paymentMethod?.id}
            name="paymentMethod"
            control={control}
            render={({ field: { value, onChange } }) => {
              const isSelected = value === paymentMethod?.id;
              return (
                <Styled.StyledListItemButton
                  selected={isSelected}
                  onClick={() => {
                    onChange(isSelected ? "" : paymentMethod?.id);
                  }}
                >
                  <ListItemIcon>
                    <Styled.StyledCreditCardIcon
                      card={paymentMethod?.card?.brand}
                    />
                  </ListItemIcon>
                  <Styled.StyledListItemText
                    primary={`${paymentMethod?.card?.brand} ending in ${paymentMethod?.card?.last4}`}
                    secondary={`Expiry ${paymentMethod?.card?.exp_month} / ${paymentMethod?.card?.exp_year}`}
                  />
                  <Styled.IconContainer>
                    {isSelected ? (
                      <RadioButtonCheckedIcon
                        color="primary"
                        fontSize="small"
                      />
                    ) : (
                      <RadioButtonUncheckedIcon
                        color="secondary"
                        fontSize="small"
                      />
                    )}
                  </Styled.IconContainer>
                </Styled.StyledListItemButton>
              );
            }}
          ></Controller>
        );
      })}

      {method.loading && (
        <li>
          <Skeleton
            variant="rectangular"
            animation="wave"
            height={76}
            sx={{
              borderRadius: 1,
            }}
          />
        </li>
      )}
    </Styled.StyledList>
  );
}
