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
  );
}
