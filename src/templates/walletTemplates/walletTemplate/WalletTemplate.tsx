import { useBreakpoint } from "hooks";
import WalletDesktopLayout from "./walletDesktopLayout/WalletDesktopLayout";
import WalletMobileLayout from "./walletMobileLayout/WalletMobileLayout";

export default function WalletTemplate() {
  const lg = useBreakpoint("lg");
  return lg ? <WalletDesktopLayout /> : <WalletMobileLayout />;
}
