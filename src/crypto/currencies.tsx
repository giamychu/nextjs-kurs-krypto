import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol: "DOGE",
    name: "Bitcoin",
    icon: <Icon component="img" src="/icons/uniswap-uni-logo.svg" alt="Dogecoin" />,
  },
  {
    symbol: "DOGE",
    name: "Solana",
    icon: <Icon component="img" src="/icons/solana-sol-logo.svg" alt="Dogecoin" />,
  },
  {
    symbol: "DOGE",
    name: "Aptos",
    icon: <Icon component="img" src="/icons/aptos-apt-logo.svg" alt="Dogecoin" />,
  },
  

];
