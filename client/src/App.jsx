// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";

// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Header />
//         <Hero />
//         <Benefits />
//         <Collaboration />
//         <Services />
//         {/* <Pricing /> */}
//         <Roadmap />
//         <Footer />
//       </div>

//       <ButtonGradient />
//     </>
//   );
// };

// export default App;



import React from 'react';
import ReactDOM from 'react-dom/client';
import { MetaMaskUIProvider, MetaMaskButton, useAccount, useSDK, useSignMessage } from '@metamask/sdk-react-ui';
import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Services from './components/Services';
import './App.css';

const AppContent = () => {
  const { isConnected } = useAccount();
  const {
    data: signData,
    isError: isSignError,
    isLoading: isSignLoading,
    isSuccess: isSignSuccess,
    signMessage,
  } = useSignMessage({
    message: 'gm wagmi frens',
  });

  const handleSignMessage = async () => {
    try {
      await signMessage();
    } catch (error) {
      console.error('Failed to sign message:', error);
    }
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        {/* <Pricing /> */}
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />

      <div className="metamask-section">
        <MetaMaskButton theme={'light'} color="white" />
        {isConnected && (
          <div style={{ marginTop: 20 }}>
            <button disabled={isSignLoading} onClick={handleSignMessage}>
              Sign message
            </button>
            {isSignSuccess && <div>Signature: {signData}</div>}
            {isSignError && <div>Error signing message</div>}
          </div>
        )}
      </div>
    </>
  );
};

const App = () => {
  const { ready } = useSDK();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return <AppContent />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MetaMaskUIProvider
      sdkOptions={{
        dappMetadata: {
          name: 'Example React UI Dapp',
          url: window.location.href,
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
      }}
    >
      <App />
    </MetaMaskUIProvider>
  </React.StrictMode>
);

export default App;

