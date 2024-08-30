import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui"
import Airdrop from "./Airdrop"
export default function Adapter(){

    return<>
    <div>
        <WalletMultiButton/>
<WalletDisconnectButton/>
<Airdrop/>
    </div>
    </>
}