import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

import SuccessIllustration from "../../assets/successIllustration.svg";

import {
  SuccessContainer,
  SuccessInfo,
  SuccessInfoItem,
  SuccessInfoIcon,
  SuccessContent,
} from "./styles";
import { useEffect, useState } from "react";

type Order = {
  address: string;
  city: string;
  zipCode: string;
  complement: string;
  district: string;
  number: string;
  uf: string;
  paymentMethod: string;
};
export function Success() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("@coffee-delivery:checkout");
    if (data) {
      setOrder(JSON.parse(data));
    }
  });
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <SuccessContent>
        <SuccessInfo>
          <SuccessInfoItem>
            <SuccessInfoIcon type="location">
              <MapPin size={16} weight="fill" />
            </SuccessInfoIcon>
            <p>
              Entrega em{" "}
              <strong>
                {" "}
                {order?.address}, {order?.number}{" "}
              </strong>{" "}
              -{order?.district} - {order?.city}, {order?.uf}
            </p>
          </SuccessInfoItem>

          <SuccessInfoItem>
            <SuccessInfoIcon type="time">
              <Timer size={16} weight="fill" />
            </SuccessInfoIcon>

            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </SuccessInfoItem>

          <SuccessInfoItem>
            <SuccessInfoIcon type="payment">
              <CurrencyDollar size={16} />
            </SuccessInfoIcon>

            <div>
              <span>Pagamento na entrega</span>
              <strong>{order?.paymentMethod}</strong>
            </div>
          </SuccessInfoItem>
        </SuccessInfo>
        <img src={SuccessIllustration} alt="ilustração de sucesso" />
      </SuccessContent>
    </SuccessContainer>
  );
}
