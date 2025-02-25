import { CreditCard, Bank, Money } from "@phosphor-icons/react";
import { SelectPaymentContainer } from "./styles";

interface SelectPaymentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: "credit-card" | "debit" | "money";
  selected?: boolean;
}

export function SelectPayment({
  title,
  icon = "credit-card",
  selected = false,
  ...rest
}: SelectPaymentProps) {
  return (
    <SelectPaymentContainer selected={selected} {...rest}>
      {icon === "credit-card" ? (
        <CreditCard size={16} weight="light" />
      ) : icon === "debit" ? (
        <Bank size={16} weight="light" />
      ) : (
        <Money size={16} weight="light" />
      )}
      <span>{title}</span>
    </SelectPaymentContainer>
  );
}
