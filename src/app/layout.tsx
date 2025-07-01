// Añade al inicio del archivo
"use client"; // Necesario porque Auth0Provider usa hooks// src/app/layout.tsx
import './globals.css';
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
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI || window.location.origin,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!
      }}
      cacheLocation="localstorage"
    >
      <html lang="es">
        <body className="bg-gray-50">
          {children}
        </body>
      </html>
    </Auth0Provider>
  );
}
