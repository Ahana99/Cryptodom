import { useContext } from "react";
import CoinsContext from "../contexts/CoinsContextoinsContext";

export default function useCoinsContext() {
  const context = useContext(CoinsContext);

  return context;
}
