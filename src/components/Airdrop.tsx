import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react"

export default function Airdrop(){
const [solquantity, SetSolquantity] = useState<number>(0);

const { publicKey } = useWallet();
const { connection } = useConnection();

async function airdrop(){
    console.log(solquantity)
    if(publicKey){
        await connection.requestAirdrop(publicKey,solquantity*1000000000)    
    }
}
    return<>
    <div>
        <input type="number" onChange={(e)=>SetSolquantity(Number(e.target.value))} />
        <button onClick={airdrop}>airdrop wallet</button>
    </div>
    </>
}