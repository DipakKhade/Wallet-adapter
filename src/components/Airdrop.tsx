import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react"
import { toast } from "sonner";

export default function Airdrop(){
const [solquantity, SetSolquantity] = useState<number>(0);

const { publicKey } = useWallet();
const { connection } = useConnection();

async function airdrop(){
    console.log(solquantity)
    if(publicKey){
        await connection.requestAirdrop(publicKey,solquantity*1000000000)  
        toast.success(`${publicKey} is airdroped with ${solquantity} SOL`)  
    }
}
    return<>
    <div className="flex flex-col space-y-4 p-4">
        <input className="border border-slate-500" type="number" onChange={(e)=>SetSolquantity(Number(e.target.value))} />
        <button className="p-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none " onClick={airdrop}>airdrop wallet</button>
    </div>
    </>
}