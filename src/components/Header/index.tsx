import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import LogoCoffeDelivery from "../../assets/logo.svg";
import { ChipCar, ChipLocation, HeaderContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/shoppingCart";

interface Location {
  city: string;
  state: string;
}

type GeoLocation = {
  latitude: number;
  longitude: number;
};
export function Header() {
  const [location, setLocation] = useState<Location>();
  const { products } = useContext(ShoppingCartContext);

  async function getLocation({ latitude, longitude }: GeoLocation) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      console.log(data);

      if (data.address) {
        setLocation({
          city: data.address.city || data.address.town || data.address.village,
          state: data.address.state,
        });
      }
    } catch (error) {
      console.error("Erro ao buscar localização:", error);
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          await getLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.log("Geolocalização não suportada no navegador.");
    }
  }, []);

  return (
    <HeaderContainer>
      <img
        src={LogoCoffeDelivery}
        title="logo coffe delivery"
        alt="logo coffe delivery"
      />

      <div>
        <ChipLocation>
          <MapPin size={22} weight="fill" />
          {location?.city}, {location?.state}
        </ChipLocation>
        <NavLink to="/checkout">
          <ChipCar items={products.length}>
            <ShoppingCart size={22} weight="fill" />
          </ChipCar>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
