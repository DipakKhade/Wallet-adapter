import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import Airdrop from "./Airdrop";
import Appbar from "./Appbar";
import Hero from "./Hero";
export default function Adapter() {
  return (
    <>
      <div className="m-auto w-full h-full">
        <Appbar />
        <Hero/>
        <div className=" pl-[20vw] pr-[20vw]">
        <WalletMultiButton />
        <WalletDisconnectButton />
        <Airdrop />
        </div>
      </div>
    </>
  );
}
