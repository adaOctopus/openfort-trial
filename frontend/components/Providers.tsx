'use client';

import React, { useState, useEffect } from "react";
import {
  AuthProvider,
  OpenfortProvider,
  getDefaultConfig,
  RecoveryMethod,
} from "@openfort/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";
import { baseSepolia, sepolia } from "viem/chains";

let config: ReturnType<typeof createConfig> | null = null;

if (typeof window !== 'undefined') {
  config = createConfig(
    getDefaultConfig({
      appName: "Openfort Demo App",
      chains: [baseSepolia, sepolia], // add all the chains you want to support
      ssr: true,
    })
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !config) {
    return <>{children}</>;
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OpenfortProvider
          // Set the publishable key of your Openfort account. This field is required.
          publishableKey={process.env.NEXT_PUBLIC_OPENFORT_PUBLISHABLE_KEY || "YOUR_OPENFORT_PUBLISHABLE_KEY"}

          // Set the wallet configuration.
          walletConfig={{
            shieldPublishableKey: process.env.NEXT_PUBLIC_OPENFORT_SHIELD_PUBLISHABLE_KEY || "YOUR_OPENFORT_SHIELD_PUBLISHABLE_KEY",
            // If you want to use AUTOMATIC embedded wallet recovery, an encryption session is required.
            // Set this to your recovery endpoint URL from step "3. Set up the recovery endpoint" (e.g., "https://your-domain.com/api/protected-create-encryption-session").
            createEncryptedSessionEndpoint: process.env.NEXT_PUBLIC_OPENFORT_BACKEND_ENDPOINT || "YOUR_OPENFORT_BACKEND_ENDPOINT",
          }}

          uiConfig={{
            authProviders: [
              AuthProvider.EMAIL,
              AuthProvider.GUEST,
              AuthProvider.GOOGLE,
              AuthProvider.WALLET,
              // Add your own authentication providers here...
              // More information in https://www.openfort.io/docs/products/embedded-wallet/react/auth
            ],
            walletRecovery: {
              defaultMethod: RecoveryMethod.AUTOMATIC, // or RecoveryMethod.PASSKEY or RecoveryMethod.PASSWORD
            },
          }}
        >
          {children}
        </OpenfortProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

