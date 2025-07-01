// src/app/layout.tsx
"use client";

import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Solución para React 19: Evitar renderizado en servidor
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <html lang="es">
        <body className="bg-gray-50">
          <div>Cargando...</div>
        </body>
      </html>
    );
  }

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '/',
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      <html lang="es">
        <body className="bg-gray-50">
          {children}
        </body>
      </html>
    </Auth0Provider>
  );
}
