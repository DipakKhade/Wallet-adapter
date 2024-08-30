
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';import {
    WalletModalProvider
} from '@solana/wallet-adapter-react-ui';
import './App.css'
import '@solana/wallet-adapter-react-ui/styles.css';

import Adapter from './components/Adapter';


function App() {
  
  return (
  <>
   <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/K8uFHkLwqSo68gCqj-o0u-lahQC0mSH-'}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <Adapter/>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  </>
  )
}

export default App
