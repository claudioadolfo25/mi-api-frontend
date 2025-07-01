<<<<<<< HEAD
'use client';

import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <Auth0Provider
          domain={'TU_DOMINIO.auth0.com'}
          clientId={'TU_CLIENT_ID'}
          authorizationParams={{
            redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
            audience: 'https://qmsnch-api',
            scope: 'openid profile email',
          }}
        >
          {children}
        </Auth0Provider>
      </body>
    </html>
=======
// src/app/layout.tsx
import './globals.css';
"use client";

import { Auth0Provider } from '@auth0/auth0-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '/',
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!,
        scope: 'openid profile email'
      }}
      cacheLocation="localstorage"
    >
      <html lang="es">
        <body>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </body>
      </html>
    </Auth0Provider>
>>>>>>> 703f474b442e794b200a98de7c1b1ed59357b009
  );
}
