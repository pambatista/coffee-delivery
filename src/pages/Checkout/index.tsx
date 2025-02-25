import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutSummary,
  CheckoutFromTitle,
  PaymentMethodsContainer,
  CheckoutFormContent,
} from "./styles";
import { TextField } from "../../components/TextField";
import { SelectPayment } from "./components/SelectPayment";
import { Invoice } from "./components/Invoice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const checkoutFormValidationSchema = zod.object({
  zipCode: zod
    .string()
    .min(1, "CEP obrigatório")
    .regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  address: zod.string().min(1, "Endereço obrigatório"),
  number: zod.string().min(1, "Número obrigatório"),
  complement: zod.string().optional(),
  district: zod.string().min(1, "Bairro obrigatório"),
  city: zod.string().min(1, "Cidade obrigatória"),
  uf: zod.string().min(1, "UF obrigatória").max(2, "UF deve ter 2 letras"),
});

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("Cartão de crédito");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  });

  const navigate = useNavigate();

  function handleSubmitCheckout(data: CheckoutFormData) {
    localStorage.setItem(
      "@coffee-delivery:checkout",
      JSON.stringify({ ...data, paymentMethod })
    );

    navigate("/success");
  }

  function formatZipCode(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d{3})$/, "$1-$2")
      .slice(0, 9);
  }

  function handleZipCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const zipCode = formatZipCode(e.target.value);
    setValue("zipCode", zipCode);

    if (zipCode.length === 9) {
      fetchCompletedAddress(zipCode);
    }
  }

  function fetchCompletedAddress(zipCode: string) {
    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setValue("address", data.logradouro);
        setValue("complement", data.complemento);
        setValue("district", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
      });
  }

  function handlePaymentMethodChange(paymentMethod: string) {
    setPaymentMethod(paymentMethod);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitCheckout)} action="">
      <CheckoutContainer>
        <div>
          <h3>Complete seu pedido</h3>
          <CheckoutForm>
            <CheckoutFromTitle iconColor="yellow">
              <MapPinLine size={22} weight="light" />
              <div>
                <h4>Endereço de entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutFromTitle>
            <CheckoutFormContent>
              <TextField
                placeholder="CEP"
                {...register("zipCode")}
                id="zipCode"
                maxLength={9}
                onChange={handleZipCodeChange}
                error={errors.zipCode?.message}
              />
              <TextField
                placeholder="Rua"
                className="street"
                {...register("address")}
                id="address"
                error={errors.address?.message}
              />
              <TextField
                placeholder="Número"
                {...register("number")}
                id="number"
                error={errors.number?.message}
              />
              <TextField
                placeholder="Complemento"
                className="complement"
                {...register("complement")}
                id="complement"
              />
              <TextField
                placeholder="Bairro"
                {...register("district")}
                id="district"
                error={errors.district?.message}
              />
              <TextField
                placeholder="Cidade"
                {...register("city")}
                id="city"
                error={errors.city?.message}
              />
              <TextField
                placeholder="UF"
                {...register("uf")}
                id="uf"
                error={errors.uf?.message}
              />
            </CheckoutFormContent>
          </CheckoutForm>

          <CheckoutForm>
            <CheckoutFromTitle iconColor="purple">
              <CurrencyDollar size={22} weight="light" />
              <div>
                <h4>Forma de pagamento</h4>
                <p>Selecione o meio de pagamento</p>
              </div>
            </CheckoutFromTitle>

            <PaymentMethodsContainer>
              <SelectPayment
                title="Cartão de crédito"
                icon="credit-card"
                selected={paymentMethod === "Cartão de crédito"}
                onClick={() => handlePaymentMethodChange("Cartão de crédito")}
              />
              <SelectPayment
                title="Cartão de debito"
                icon="debit"
                selected={paymentMethod === "Cartão de débito"}
                onClick={() => handlePaymentMethodChange("Cartão de débito")}
              />
              <SelectPayment
                title="Dinheiro"
                icon="money"
                selected={paymentMethod === "Dinheiro"}
                onClick={() => handlePaymentMethodChange("Dinheiro")}
              />
            </PaymentMethodsContainer>
          </CheckoutForm>
        </div>
        <div>
          <h3>Cafés selecionados</h3>
          <CheckoutSummary>
            <Invoice />
          </CheckoutSummary>
        </div>
      </CheckoutContainer>
    </form>
  );
}
